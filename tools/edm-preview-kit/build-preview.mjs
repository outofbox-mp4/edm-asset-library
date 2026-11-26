import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';
import { fileURLToPath } from 'node:url';

const configPath = path.resolve(process.argv[2] || path.join(path.dirname(fileURLToPath(import.meta.url)), 'campaign.example.json'));
const configDir = path.dirname(configPath);

function fail(message) {
  throw new Error(message);
}

function requiredText(value, label) {
  if (typeof value !== 'string' || !value.trim()) fail(`${label} must be a non-empty string`);
  return value.trim();
}

function safeId(value) {
  const id = requiredText(value, 'variant.id');
  if (!/^[a-z0-9-]+$/.test(id)) fail(`variant.id must use lowercase letters, digits or hyphens: ${id}`);
  return id;
}

function resolveInput(value, label) {
  const file = path.resolve(configDir, requiredText(value, label));
  if (!fs.existsSync(file) || !fs.statSync(file).isFile()) fail(`${label} does not exist: ${file}`);
  return file;
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]);
}

const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));
const campaign = requiredText(config.campaign, 'campaign');
const subtitle = requiredText(config.subtitle, 'subtitle');
if (!Array.isArray(config.variants) || config.variants.length < 1) fail('variants must be a non-empty array');
const variants = config.variants.map((variant, index) => ({
  id: safeId(variant.id),
  label: requiredText(variant.label, `variants[${index}].label`),
  segment: requiredText(variant.segment, `variants[${index}].segment`),
  subject: requiredText(variant.subject, `variants[${index}].subject`),
  preview: requiredText(variant.preview, `variants[${index}].preview`),
  htmlFile: resolveInput(variant.htmlFile, `variants[${index}].htmlFile`),
}));
if (new Set(variants.map(variant => variant.id)).size !== variants.length) fail('variant.id values must be unique');

const assets = (config.sharedAssets || []).map((file, index) => resolveInput(file, `sharedAssets[${index}]`));
const assetNames = assets.map(file => path.basename(file));
if (new Set(assetNames).size !== assetNames.length) fail('sharedAssets filenames must be unique');
for (const variant of variants) {
  if (assetNames.includes(`${variant.id}.html`)) fail(`sharedAssets filename conflicts with variant: ${variant.id}.html`);
}
const preparedVariants = variants.map(variant => {
  const source = fs.readFileSync(variant.htmlFile, 'utf8');
  const subjectComment = source.match(/<!--\s*Subject:\s*(.*?)\s*-->/i)?.[1];
  const previewComment = source.match(/<!--\s*Preview:\s*(.*?)\s*-->/i)?.[1];
  if (subjectComment && subjectComment !== variant.subject) fail(`Subject mismatch in ${variant.htmlFile}`);
  if (previewComment && previewComment !== variant.preview) fail(`Preview mismatch in ${variant.htmlFile}`);
  return variant;
});
const requestedDir = path.resolve(configDir, requiredText(config.outputDir, 'outputDir'));
let outputDir = requestedDir;
for (let version = 2; fs.existsSync(outputDir); version++) {
  if (version > 100) fail(`Too many preview versions beside ${requestedDir}`);
  outputDir = `${requestedDir}-v${version}`;
}
fs.mkdirSync(path.join(outputDir, 'emails'), { recursive: true });

for (const asset of assets) {
  const destination = path.join(outputDir, 'emails', path.basename(asset));
  if (fs.existsSync(destination)) fail(`Duplicate asset filename: ${path.basename(asset)}`);
  fs.copyFileSync(asset, destination);
}
for (const variant of preparedVariants) {
  fs.copyFileSync(variant.htmlFile, path.join(outputDir, 'emails', `${variant.id}.html`));
}

const serialized = JSON.stringify(variants.map(({ id, label, segment, subject, preview }) => ({ id, label, segment, subject, preview }))).replace(/</g, '\\u003c');
const tabs = variants.map((variant, index) => `<button type="button" class="tab" data-index="${index}" aria-pressed="${index === 0}"><span class="tab-number">${String(index + 1).padStart(2, '0')}</span><span>${escapeHtml(variant.label)}</span></button>`).join('');
const html = `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${escapeHtml(campaign)} · EDM preview</title>
<style>
:root{color-scheme:light;font-family:Arial,Helvetica,sans-serif;color:#18212a;background:#f3f5f8}*{box-sizing:border-box}body{margin:0}.page{width:min(1100px,100%);margin:auto;padding:30px 22px 48px}.eyebrow{font-size:12px;font-weight:700;letter-spacing:.11em;text-transform:uppercase;color:#3873b8}.heading{display:flex;align-items:flex-end;justify-content:space-between;gap:20px;margin-bottom:20px}h1{font-size:28px;line-height:1.2;margin:7px 0}.subtitle{margin:0;color:#5c6674;font-size:14px;line-height:1.5}.count{padding:8px 12px;border-radius:99px;background:#e7edf5;color:#31527a;font-size:12px;font-weight:700;white-space:nowrap}.layout{display:grid;grid-template-columns:240px minmax(0,1fr);gap:20px}.rail,.panel{background:#fff;border:1px solid #dfe5ec;border-radius:12px;box-shadow:0 5px 18px rgba(21,35,52,.04)}.rail{padding:10px;align-self:start}.tab{display:flex;align-items:center;gap:11px;width:100%;padding:13px 12px;border:0;border-radius:8px;background:transparent;text-align:left;color:#364354;font-size:14px;font-weight:700;cursor:pointer}.tab+.tab{margin-top:3px}.tab[aria-pressed=true]{background:#eaf2ff;color:#075bc2}.tab:hover{background:#f2f6fc}.tab-number{font-size:11px;color:#7d8a9a}.tab[aria-pressed=true] .tab-number{color:#075bc2}.panel{overflow:hidden}.meta{padding:20px 22px;border-bottom:1px solid #e6ebf0}.segment{font-size:12px;color:#657382;margin-bottom:15px}.field-label{font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:#64748b;margin-bottom:5px}.subject{font-size:18px;line-height:1.35;font-weight:700;margin-bottom:14px}.preview{font-size:14px;line-height:1.5;color:#596679}.toolbar{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:11px 22px;background:#fafbfd;border-bottom:1px solid #e6ebf0}.toolbar-title{font-size:12px;font-weight:700;color:#5a6879}.actions{display:flex;align-items:center;gap:8px}.toggle{border:1px solid #ced8e4;background:#fff;border-radius:6px;padding:7px 11px;color:#33465b;font-size:12px;font-weight:700;cursor:pointer}.toggle[aria-pressed=true]{background:#183556;color:#fff;border-color:#183556}.open{font-size:12px;font-weight:700;color:#075bc2;text-decoration:none;margin-left:7px}.stage{display:flex;justify-content:center;overflow:auto;background:#e9edf3;padding:24px 16px 34px}.frame{display:block;width:600px;max-width:100%;height:800px;border:0;background:#fff;box-shadow:0 8px 24px rgba(25,37,54,.15);transition:width .15s ease}.frame.mobile{width:375px;height:840px}@media(max-width:750px){.page{padding:18px 12px 30px}.heading{align-items:start}.layout{display:block}.rail{display:flex;overflow:auto;gap:5px;margin-bottom:12px}.tab{min-width:max-content}.tab+.tab{margin-top:0}.stage{padding:15px 7px 25px}.meta{padding:16px}.toolbar{padding:10px 16px}.frame{height:740px}}
</style></head><body><main class="page"><div class="heading"><div><div class="eyebrow">EDM campaign preview</div><h1>${escapeHtml(campaign)}</h1><p class="subtitle">${escapeHtml(subtitle)}</p></div><div class="count">${variants.length} audience versions</div></div><div class="layout"><nav class="rail" aria-label="Audience versions">${tabs}</nav><section class="panel"><div class="meta"><div class="segment" id="segment"></div><div class="field-label">Subject</div><div class="subject" id="subject"></div><div class="field-label">Preview text</div><div class="preview" id="preview"></div></div><div class="toolbar"><div class="toolbar-title">HTML email preview</div><div class="actions"><button class="toggle" id="desktop" type="button" aria-pressed="true">Desktop</button><button class="toggle" id="mobile" type="button" aria-pressed="false">Mobile</button><a class="open" id="open" target="_blank" rel="noopener">Open HTML ↗</a></div></div><div class="stage"><iframe class="frame" id="frame" title="HTML email preview"></iframe></div></section></div></main>
<script>const variants=${serialized};const tabs=[...document.querySelectorAll('.tab')];const frame=document.getElementById('frame');const open=document.getElementById('open');function select(index){const v=variants[index];tabs.forEach((tab,i)=>tab.setAttribute('aria-pressed',String(i===index)));document.getElementById('segment').textContent='Audience: '+v.segment;document.getElementById('subject').textContent=v.subject;document.getElementById('preview').textContent=v.preview;const url='emails/'+v.id+'.html';frame.src=url;open.href=url;}tabs.forEach((tab,index)=>tab.addEventListener('click',()=>select(index)));function device(mobile){frame.classList.toggle('mobile',mobile);document.getElementById('desktop').setAttribute('aria-pressed',String(!mobile));document.getElementById('mobile').setAttribute('aria-pressed',String(mobile));}document.getElementById('desktop').addEventListener('click',()=>device(false));document.getElementById('mobile').addEventListener('click',()=>device(true));select(0);</script></body></html>`;
fs.writeFileSync(path.join(outputDir, 'index.html'), html, 'utf8');
console.log(JSON.stringify({ outputDir, variants: variants.length, preview: path.join(outputDir, 'index.html') }));

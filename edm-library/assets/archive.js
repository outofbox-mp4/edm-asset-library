(() => {
  const library = window.EDM_LIBRARY;
  const home = document.getElementById('archive-home');
  const detail = document.getElementById('archive-detail');
  const search = document.getElementById('archive-search');
  const labels = {templates:'邮件模板',components:'内容组件',resources:'外部资源',examples:'资源使用示例',playbooks:'策略与 SOP',framework:'标准与行业基准原稿',guidelines:'发送与入库规范',maintenance:'维护说明'};
  const esc = value => String(value ?? '').replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
  let selectedTemplate = null, selectedPlaybook = 'lifecycle', templateFilter = 'all';

  search.addEventListener('input', () => {
    const term=search.value.trim().toLowerCase();let total=0;
    document.querySelectorAll('.group').forEach(group => {
      let count=0;group.querySelectorAll('.row').forEach(row => {
        const match=row.textContent.toLowerCase().includes(term);
        row.hidden=!match;if(match)count++;
      });
      group.hidden=count===0;total+=count;
    });
    document.getElementById('empty').classList.toggle('show',total===0);
  });
  function heading(title,description='') {return `<button class="detail-back" data-home>← 全部档案</button><header class="detail-header"><h1>${title}</h1>${description?`<p>${description}</p>`:''}</header>`;}
  function showHome(group) {
    home.hidden=false;detail.hidden=true;detail.innerHTML='';
    if(group)document.getElementById(group)?.scrollIntoView({block:'start'});
    else scrollTo({top:0,behavior:'auto'});
  }
  function showView(view) {
    if(!labels[view]) {showHome();return;}
    home.hidden=true;detail.hidden=false;
    const pages={templates:templatesPage,components:componentsPage,resources:resourcesPage,examples:examplesPage,playbooks:playbooksPage,framework:frameworkPage,guidelines:guidelinesPage,maintenance:maintenancePage};
    pages[view]();scrollTo({top:0,behavior:'auto'});
  }
  function route() {
    const [key,query='']=decodeURIComponent(location.hash.slice(1)).split('?');
    if(key==='templates'&&query.startsWith('id='))selectedTemplate=query.slice(3);
    if(labels[key])showView(key);
    else showHome(['owned','references','standards'].includes(key)?key:null);
  }
  document.addEventListener('click', event => {
    const row=event.target.closest('a.row');
    if(row) {if(location.hash===row.getAttribute('href')) {event.preventDefault();route();}return;}
    if(event.target.closest('[data-home]')) {if(location.hash==='#index')showHome();else location.hash='index';}
  });
  addEventListener('hashchange',route);

  function templateRecords() {
    const phaseOrder={'预热期':0,'早鸟价':1,'早鸟价 36h':1,'正式活动':2};
    return [...library.templates,...(window.EDM_MAILCHIMP_TEMPLATES||[])].map(t=>{
      const campaign=t.campaign||t.tags?.[0]||'Black Friday';
      return {...t,campaign,displayName:`${t.phase} · ${t.audience}`,tags:[campaign,t.phase,t.audience]};
    }).sort((a,b)=>(phaseOrder[a.phase]??9)-(phaseOrder[b.phase]??9)||a.audience.localeCompare(b.audience,'zh'));
  }
  function templatesPage() {
    const campaigns=[...new Set(templateRecords().map(t=>t.campaign))];
    detail.innerHTML=heading('邮件模板','按活动查找，在当前页查看分层版本与 HTML 预览。')+
      `<input class="detail-search" id="template-search" type="search" placeholder="搜索活动、阶段或人群" aria-label="搜索邮件模板"><div class="filter-bar" id="template-filters"><button class="active" data-filter="all">全部</button>${campaigns.map(c=>`<button data-filter="${esc(c)}">${esc(c)}</button>`).join('')}</div><div class="record-layout"><div class="record-list" id="template-list"></div><div class="record-detail" id="template-detail"></div></div>`;
    document.getElementById('template-search').addEventListener('input',renderTemplateList);
    document.getElementById('template-filters').addEventListener('click',event=>{
      const button=event.target.closest('[data-filter]');if(!button)return;
      templateFilter=button.dataset.filter;
      document.querySelectorAll('#template-filters button').forEach(item=>item.classList.toggle('active',item===button));
      renderTemplateList();
    });
    document.getElementById('template-list').addEventListener('click',event=>{
      const button=event.target.closest('[data-template]');if(!button)return;
      selectedTemplate=button.dataset.template;renderTemplateList();
    });
    renderTemplateList();
  }
  function renderTemplateList() {
    const query=document.getElementById('template-search')?.value.toLowerCase().trim()||'';
    const rows=templateRecords().filter(t=>(templateFilter==='all'||t.campaign===templateFilter)&&`${t.name} ${t.displayName} ${t.variant||''} ${t.goal} ${t.tags.join(' ')}`.toLowerCase().includes(query));
    const list=document.getElementById('template-list'),pane=document.getElementById('template-detail');
    if(!rows.length){list.innerHTML='<div class="empty-state">没有匹配的模板。</div>';pane.innerHTML='<div class="empty-state">调整搜索词或筛选条件。</div>';return;}
    if(!rows.some(t=>t.id===selectedTemplate))selectedTemplate=rows[0].id;
    list.innerHTML=rows.map(t=>`<button class="record-item ${t.id===selectedTemplate?'active':''}" data-template="${esc(t.id)}"><b>${esc(t.displayName)}</b><small>${esc(t.variant||t.desc)}</small></button>`).join('');
    const t=rows.find(item=>item.id===selectedTemplate);
    pane.innerHTML=`<div class="meta-label">${esc(t.campaign)}</div><h2>${esc(t.displayName)}</h2><p>${esc(t.variant||t.desc)}</p><dl><dt>说明</dt><dd>${esc(t.desc)}</dd><dt>目标</dt><dd>${esc(t.goal)}</dd>${t.source?`<dt>来源</dt><dd>${esc(t.source)} · ${esc(t.name)}</dd>`:''}${t.subject?`<dt>主题行</dt><dd>${esc(t.subject)}</dd>`:''}${t.preheader?`<dt>Preheader</dt><dd>${esc(t.preheader)}</dd>`:''}${t.cta?`<dt>主 CTA</dt><dd>${esc(t.cta)}</dd>`:''}</dl><div class="detail-actions"><a class="plain-button" href="${esc(t.file)}" download>下载 HTML</a></div><iframe class="preview-frame" title="${esc(t.displayName)} HTML 预览" src="${esc(t.file)}" loading="lazy"></iframe>`;
  }

  function playbooksPage() {
    detail.innerHTML=heading('策略与 SOP')+`<div class="record-layout"><div class="record-list" id="playbook-list" aria-label="策略与 SOP 目录"></div><article class="record-detail playbook-detail" id="playbook-detail"></article></div>`;
    document.getElementById('playbook-list').addEventListener('click',event=>{
      const button=event.target.closest('[data-playbook]');if(!button)return;
      selectedPlaybook=button.dataset.playbook;
      renderPlaybook();
    });
    renderPlaybook();
  }
  function renderPlaybook() {
    const items=window.EDM_PLAYBOOKS||[];
    if(!items.some(item=>item.id===selectedPlaybook))selectedPlaybook=items[0]?.id;
    const active=items.find(item=>item.id===selectedPlaybook);
    document.getElementById('playbook-list').innerHTML=items.map(item=>`<button class="record-item ${item.id===selectedPlaybook?'active':''}" data-playbook="${esc(item.id)}"><b>${esc(item.title)}</b><small>${esc(item.summary)}</small></button>`).join('');
    if(!active)return;
    const section=part=>`<section class="detail-section"><h3>${esc(part.title)}</h3>${part.rows?`<div class="table-scroll"><table class="archive-table"><thead><tr>${part.headers.map(head=>`<th>${esc(head)}</th>`).join('')}</tr></thead><tbody>${part.rows.map(row=>`<tr>${row.map(cell=>`<td>${esc(cell)}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`:''}${part.bullets?`<ul>${part.bullets.map(item=>`<li>${esc(item)}</li>`).join('')}</ul>`:''}</section>`;
    document.getElementById('playbook-detail').innerHTML=`<h2>${esc(active.title)}</h2><p>${esc(active.summary)}</p>${active.sections.map(section).join('')}<div class="archive-note">${esc(active.note)}</div>${active.references.length?`<section class="detail-section"><h3>当前官方参考</h3><ul class="reference-list">${active.references.map(ref=>`<li><a class="inline-link" href="${esc(ref.url)}" target="_blank" rel="noopener noreferrer">${esc(ref.label)}</a></li>`).join('')}</ul></section>`:''}`;
  }

  function componentsPage() {
    const components=window.EDM_COMPONENTS||[];
    detail.innerHTML=heading('内容组件','预览效果并复制对应的邮件 HTML 片段。')+`<div class="archive-note">代码中的 <code>{{变量}}</code> 需要替换为本次邮件的实际文案、价格和 URL。复制后在 Mailchimp、Gmail、Outlook 和移动端测试。</div>`+components.map(item=>`<section class="component-record" id="component-${esc(item.id)}"><div class="component-heading"><div><h2>${esc(item.name)}</h2><p>${esc(item.description)}</p></div><button class="plain-button copy-component" data-copy="${esc(item.id)}" type="button">复制代码</button></div><div class="component-preview"><iframe title="${esc(item.name)}预览" data-preview="${esc(item.id)}" style="height:${Number(item.height)||220}px" sandbox=""></iframe></div><label class="code-label" for="code-${esc(item.id)}">HTML 代码</label><textarea class="component-code" id="code-${esc(item.id)}" readonly spellcheck="false">${esc(item.html)}</textarea><span class="copy-status" data-copy-status="${esc(item.id)}" role="status"></span></section>`).join('');
    components.forEach(item=>{
      const frame=detail.querySelector(`[data-preview="${item.id}"]`);
      let preview=item.html;
      for(const [token,value] of Object.entries(item.sample)) preview=preview.replaceAll(token,value);
      frame.srcdoc=`<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head><body style="margin:0;background:#fff;">${preview}</body></html>`;
    });
    detail.querySelectorAll('[data-copy]').forEach(button=>button.addEventListener('click',async()=>{
      const item=components.find(entry=>entry.id===button.dataset.copy);
      const status=detail.querySelector(`[data-copy-status="${button.dataset.copy}"]`);
      if(!item)return;
      try {
        if(navigator.clipboard?.writeText) await navigator.clipboard.writeText(item.html);
        else {const field=detail.querySelector(`#code-${item.id}`);field.select();if(!document.execCommand('copy'))throw new Error('copy failed');}
        status.textContent='已复制，可粘贴到邮件 HTML 编辑器。';
      } catch {status.textContent='复制失败；请在下方代码框中全选后复制。';}
    }));
  }
  function resourcesPage() {
    const groups=[['visual','视觉风格','用于决定整封邮件的视觉气质与内容节奏。'],['modules','内容模块','解决按钮、单列布局、移动端与客户端兼容。'],['scale','规模化工作流','组件、变量、多语言与长期构建。']];
    detail.innerHTML=heading('外部资源','先看用途，再访问原项目或案例网站。')+groups.map(([key,name,description])=>`<section class="detail-section resource-category"><h2>${name}</h2><p>${description}</p>${library.resources.filter(r=>r.category===key).map(r=>`<div class="resource-entry"><b>${esc(r.name)}</b><span>${esc(r.type)} · ${esc(r.use)}</span><a class="inline-link" href="${esc(r.url)}" target="_blank" rel="noopener noreferrer">${r.stars==='案例库'?'访问案例网站':'查看 GitHub 项目'}</a></div>`).join('')}</section>`).join('')+`<div class="archive-note">借鉴结构、层级和兼容写法。纳入自有库前，需重做品牌元素、确认授权，并测试目标邮件客户端。</div>`;
  }
  function examplesPage() {
    const examples=[
      ['Colorlib + Leemunroe','黑五活动邮件：先定整封邮件风格，再填内容模块。','Colorlib 定整封邮件的 600px 骨架、首屏比例、间距、按钮、分区与页脚；Leemunroe 提供 HTML 容器、CTA 和内联样式基础。','先统一页头、按钮和页脚；按活动替换 Hero、功能说明和价格区；导入 Mailchimp 前测试 Gmail 与 Outlook。'],
      ['konsav','AI Assistant：仅在需要解释操作时使用步骤模块。','三步说明是按需结构，适合首次上手、功能介绍与试用激活。纯促销、到期提醒或单 CTA 邮件可省略。','输入 URL 与目标字段 → 选择模板、Browser Use 或 Cloud Agent → 调整字段，复核结果并导出。'],
      ['Cerberus','用兼容性写法承载复杂排版。','Cerberus 是邮件客户端兼容性底座，价格双栏只是示例；图文双栏、功能对比、双 CTA、背景色提示区也适用。','重点检查 Outlook/Gmail 双栏是否稳定、按钮是否可点、移动端顺序是否正确；复杂区块优先使用兼容的表格结构。'],
      ['Postmark','试用用户的 SaaS 生命周期序列。','每封只推动一个下一步，按行为触发或停止。产品价值邮件与优惠邮件分开管理；已完成关键动作的用户跳过对应提醒。','Day 0 试用欢迎与输入 URL → Day 1 未建任务者的首次任务示例 → 首次成功后介绍扩展场景 → Day 3 按行为推荐功能 → Day 5 展示使用成果 → Day 6 到期提醒 → Day 7 按用量建议 Basic / Standard。'],
      ['Maizzle / MJML','一套组件生成多语言 HTML。','共享 Header、Hero、CTA、Footer、价格卡与 URL 规则；主题、Preheader、标题、正文、CTA 与法律文本按语言维护。','同一组件读取 en/de/fr 文案文件，构建各语言可发送 HTML，再分别导入 Mailchimp。避免逐份复制和手改英文 HTML。']
    ];
    detail.innerHTML=heading('资源使用示例','把参考库转成可复用的邮件结构。')+examples.map(([source,title,description,application],i)=>`<details class="example-item" ${i===0?'open':''}><summary>${esc(source)} · ${esc(title)}</summary><p>${esc(description)}</p><p>${esc(application)}</p></details>`).join('')+`<div class="archive-note">借鉴结构、兼容写法与内容层级；外部资源的品牌图片、文案和链接不直接用于 Octoparse 邮件。当前优先挑选版式参考、用 Cerberus 审核复杂排版，并将测试通过的模块入自有库；MJML 等工程化工具作为后续工作流。</div>`;
  }
  function frameworkPage() {
    const gold=[['受众相关性','按生命周期、使用行为和购买意图分层。'],['单一目标','每封邮件只推动一个清晰的主行动。'],['价值先于优惠','先说明用户获得什么，再说明何时行动。'],['交付与可读性','兼顾层级、移动端、Gmail 和 Outlook。'],['可衡量闭环','用结果持续反哺下一轮内容与分层。']];
    const workflow=[['定义策略','明确人群、业务目标、发送时机、主 CTA 与成功指标。'],['选择资产','优先复用已验证模板和组件，再生成分层版本。'],['质量检查','检查品牌、变量、URL、UTM 与客户端表现。'],['复盘沉淀','记录表现和结论，升级为可复用资产。']];
    const agent=[['策略匹配度','匹配目标人群、业务目标、优惠边界与主 CTA。'],['首轮质量通过率','品牌、文案、变量、URL 与兼容性检查能否一次通过。'],['资产复用率','优先使用已验证模板与组件。'],['真实参与与业务增量','结合有效点击、落地页互动与后续转化；打开率仅作辅助信号。']];
    const cards=items=>`<div class="compact-grid">${items.map(([name,desc],i)=>`<article class="compact-card"><span class="meta-label">${String(i+1).padStart(2,'0')}</span><b>${esc(name)}</b><p>${esc(desc)}</p></article>`).join('')}</div>`;
    detail.innerHTML=heading('标准与行业基准原稿','原总览中的判断框架集中存档。')+`<section class="detail-section"><h2>EDM 的五项金标准</h2>${cards(gold)}</section><section class="detail-section"><h2>一封好的邮件：四步工作流</h2>${cards(workflow)}</section><section class="detail-section"><h2>Agent 时代的评判标准</h2>${cards(agent)}</section><section class="detail-section"><h2>行业基准线 · SaaS 营销邮件</h2><table class="archive-table"><thead><tr><th>打开率*</th><th>点击率</th><th>CTOR</th><th>退信率</th><th>退订率</th></tr></thead><tbody><tr><td>38.14%</td><td>1.19%</td><td>6.81%</td><td>0.50%</td><td>0.14%</td></tr></tbody></table><div class="archive-note">这是原总览记录的 2025 benchmark sample，保留作历史参照。使用前应复核来源、区域和邮件类型；打开率受隐私代理与自动读取影响，只作辅助信号。</div></section>`;
  }
  function guidelinesPage() {
    const rows=[['邮件宽度','桌面主容器 600px','移动端 100% 宽度；关键 CTA 可全宽。'],['品牌色','Ink #08070B · Mint #1FF2CF · Pink #D61BAF','每封邮件控制在 2–3 个主色。'],['Logo','使用公网 HTTPS 图片 URL','不用本地路径，并提供 alt 文本。'],['CTA','每封邮件 1 个明确主 CTA','核对 href、UTM 与链接文案。'],['文案','主题行 + Preheader + 首屏价值','根据人群使用对应分层内容。'],['兼容性','Gmail、Outlook、移动端、Mailchimp','重要活动实际测试；Outlook 不依赖圆角。'],['入库','标注已验证或待复查','只有可发送版本进入自有模板库，记录修改日期。']];
    detail.innerHTML=heading('发送与入库规范','品牌、内容、链接和客户端检查口径。')+`<table class="archive-table"><thead><tr><th>项目</th><th>当前规范</th><th>检查点</th></tr></thead><tbody>${rows.map(row=>`<tr>${row.map(cell=>`<td>${esc(cell)}</td>`).join('')}</tr>`).join('')}</tbody></table><div class="archive-note"><b>模板命名</b>：<code>[阶段]-[人群]-[目标]-[套餐/功能]-v01.html</code><br>例如 <code>earlybird-active-standard-upgrade-v01.html</code>。</div>`;
  }
  function maintenancePage() {
    detail.innerHTML=heading('维护说明','源文件和站点数据在 GitHub 维护。')+`<section class="detail-section"><h2>新增品牌模板</h2><p>将最终 HTML 放入相应的 <code>outputs/</code> 目录，并在 <code>edm-library/assets/data.js</code> 的 <code>templates</code> 数组新增记录。Mailchimp Saved 原件另存于 <code>outputs/mailchimp-en26-black-friday/</code>，索引在 <code>edm-library/assets/mailchimp-templates.js</code>。</p><p>标题由活动阶段与适配人群生成；未知的主题行和 Preheader 留空，不自行补写。</p></section><section class="detail-section"><h2>新增外部资源</h2><p>在同一数据文件的 <code>resources</code> 数组记录用途、类型、来源链接和检索日期。</p></section><section class="detail-section"><h2>入库门槛</h2><ol><li>品牌 Logo 与色彩已确认。</li><li>CTA、UTM 与人群文案已替换。</li><li>完成移动端、Gmail、Outlook 与 Mailchimp 测试。</li><li>记录主题行、Preheader、发送时机及最终表现。</li></ol></section><a class="source-link" href="https://github.com/outofbox-mp4/edm-asset-library/blob/main/edm-library/README.md" target="_blank" rel="noopener noreferrer">查看 GitHub 中的维护原文</a>`;
  }
  route();
})();

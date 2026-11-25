(() => {
  const assetBase = 'edm-library/assets/cats/';
  const ads = [
    {id:'roi',name:'ROI 诊断',kind:'方法框架',mark:'ROI ↓',intro:'当广告回报下滑，先定位漏斗断点，再决定调整预算、流量或转化路径。',bullets:['对齐花费、点击、注册、试用、付费与收入的口径。','按可比周期识别成本、流量质量和产品激活的变化。','输出可执行的排查顺序与下一步决策。'],url:'https://github.com/outofbox-mp4/ad-ai-toolkit/blob/main/methodology/roi-diagnosis.md'},
    {id:'traffic',name:'流量质量审计',kind:'Agent Skill',mark:'TRAFFIC',intro:'检查新增流量是否真正带来合格用户，而不只看点击和注册数量。',bullets:['按渠道、受众、搜索主题、地区和设备切分。','把注册后的试用和付费行为纳入质量判断。','用证据标记应保留、控制、缩减或排除的流量。'],url:'https://github.com/outofbox-mp4/ad-ai-toolkit/tree/main/skills/ad-traffic-quality-audit'},
    {id:'experiment',name:'广告实验设计',kind:'Agent Skill',mark:'A / B',intro:'将优化想法写成可验证的假设、对照、成功阈值和停止规则。',bullets:['先写明实验结束后要做的业务决策。','使用 ROI 或下游 CPA 等核心指标，并设置质量护栏。','区分 A/B、holdout 和观察性比较的适用场景。'],url:'https://github.com/outofbox-mp4/ad-ai-toolkit/tree/main/skills/ad-experiment-design'},
    {id:'search',name:'搜索词异常排查',kind:'Agent Skill',mark:'QUERY?',intro:'从查询意图入手，解释搜索词花费、CPC、CPA 与转化变化。',bullets:['按查询主题识别相关性和浪费。','结合下游行为评估搜索词，而非只看表层点击。','形成可复查的否定词或结构调整建议。'],url:'https://github.com/outofbox-mp4/ad-ai-toolkit/tree/main/skills/search-term-anomaly-diagnosis'}
  ];
  const templates = window.EDM_LIBRARY?.templates || [];
  const resources = window.EDM_LIBRARY?.resources || [];
  const $ = (selector) => document.querySelector(selector);
  const $$ = (selector) => [...document.querySelectorAll(selector)];
  const esc = (value) => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  let topZ = 10, activeTab = 'templates', phase = 'all', selectedTemplate = null;

  function focusWindow(win) { win.style.zIndex = ++topZ; }
  function openWindow(id) {
    const win = document.getElementById('win-' + id);
    if (!win) return;
    win.classList.add('open');
    win.setAttribute('aria-hidden','false');
    focusWindow(win);
    $('#start-menu').classList.remove('open');
    $('#menu-toggle').classList.remove('active');
  }
  function closeWindow(win) { win.classList.remove('open'); win.setAttribute('aria-hidden','true'); }
  function toggleMax(win) { win.classList.toggle('maximized'); focusWindow(win); }
  function openFromHash() {
    const id = location.hash.replace('#','');
    if (['about','ads','edm'].includes(id)) openWindow(id);
  }

  // The reference opens windows from desktop icons and allows several windows to overlap.
  document.addEventListener('click', event => {
    const launch = event.target.closest('[data-open]');
    if (launch) { openWindow(launch.dataset.open); return; }
    const control = event.target.closest('[data-control]');
    if (control) {
      const win = control.closest('.window');
      if (control.dataset.control === 'close') closeWindow(win);
      else if (control.dataset.control === 'max') toggleMax(win);
      return;
    }
    if (event.target.closest('#menu-toggle')) {
      const menu = $('#start-menu');
      menu.classList.toggle('open');
      $('#menu-toggle').classList.toggle('active', menu.classList.contains('open'));
      return;
    }
    if (event.target.closest('#shutdown')) {
      $('#start-menu').classList.remove('open');
      const boot = $('#boot');
      boot.classList.remove('done');
      boot.classList.add('restarting');
      $('.boot-inner span').textContent = 'Shutting down...';
      setTimeout(() => location.reload(), 850);
      return;
    }
    if (!event.target.closest('#start-menu')) { $('#start-menu').classList.remove('open'); $('#menu-toggle').classList.remove('active'); }
    const win = event.target.closest('.window');
    if (win) focusWindow(win);
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      if ($('#start-menu').classList.contains('open')) { $('#start-menu').classList.remove('open'); return; }
      const win = $$('.window.open').sort((a,b) => Number(b.style.zIndex)-Number(a.style.zIndex))[0];
      if (win) closeWindow(win);
    }
  });
  let drag = null;
  document.addEventListener('pointerdown', event => {
    const bar = event.target.closest('.titlebar');
    if (!bar || event.target.closest('button')) return;
    const win = bar.closest('.window');
    if (win.classList.contains('maximized') || innerWidth <= 760) return;
    focusWindow(win);
    const rect = win.getBoundingClientRect();
    drag = {win,dx:event.clientX-rect.left,dy:event.clientY-rect.top};
    bar.setPointerCapture(event.pointerId);
  });
  document.addEventListener('pointermove', event => {
    if (!drag) return;
    drag.win.style.left = Math.max(0,Math.min(innerWidth-160,event.clientX-drag.dx)) + 'px';
    drag.win.style.top = Math.max(0,Math.min(innerHeight-120,event.clientY-drag.dy)) + 'px';
  });
  document.addEventListener('pointerup', () => { drag = null; });

  function renderAds() {
    const term = $('#ad-search').value.trim().toLowerCase();
    const visible = ads.filter(a => `${a.name} ${a.kind} ${a.intro}`.toLowerCase().includes(term));
    $('#ad-grid').innerHTML = visible.length ? visible.map(a => `<button class="asset-tile" data-ad="${a.id}"><span class="tile-art" data-mark="${esc(a.mark)}" style="--art:${a.id==='roi'?'#fff4de':a.id==='traffic'?'#e6f2e8':a.id==='experiment'?'#f3e8fa':'#e5ebf5'}"></span><span class="tile-text"><strong>${esc(a.name)}</strong><small>${esc(a.kind)} · 点击查看预览</small></span></button>`).join('') : '<div class="empty">没有找到匹配的广告资产。</div>';
  }
  $('#ad-search').addEventListener('input',renderAds);
  $('#ad-grid').addEventListener('click', event => {
    const card = event.target.closest('[data-ad]'); if (!card) return;
    const a = ads.find(item => item.id === card.dataset.ad); if (!a) return;
    $('#detail-title').textContent = a.name;
    $('#detail-body').innerHTML = `<div class="eyebrow">AD ASSET / ${esc(a.kind)}</div><h2>${esc(a.name)}</h2><p class="lead">${esc(a.intro)}</p><div class="content-hero"><h3>资产预览</h3><ul class="detail-list">${a.bullets.map(x=>`<li>${esc(x)}</li>`).join('')}</ul></div><div class="button-row"><a class="primary" href="ad-library/index.html#${a.id==='roi'?'methodology?id=roi':a.id==='traffic'?'skills?id=skill-traffic':a.id==='experiment'?'skills?id=skill-experiment':'skills?id=skill-terms'}">查看档案记录</a><a class="secondary" href="${a.url}" target="_blank" rel="noopener noreferrer">查看 GitHub 原文件</a><button class="secondary" data-open="ads">返回广告目录</button></div>`;
    openWindow('detail');
  });

  function renderEdm() {
    const term = $('#edm-search').value.trim().toLowerCase();
    const list = templates.filter(t => (phase==='all'||(phase==='verified'?t.status==='已验证':t.phase===phase)) && `${t.name} ${t.audience} ${t.goal} ${t.tags.join(' ')}`.toLowerCase().includes(term));
    $('#edm-grid').innerHTML = list.length ? list.map((t,i) => `<button class="asset-tile" data-template="${esc(t.id)}"><span class="tile-art" data-mark="${esc(t.phase==='早鸟价'?'EARLY BIRD':'BLACK FRIDAY')}" style="--art:${i%2?'#dbfff0':'#191919'};--art-ink:${i%2?'#161616':'#e9a3a8'}"></span><span class="tile-text"><strong>${esc(t.name)}</strong><small>${esc(t.audience)} · ${esc(t.status)}</small></span></button>`).join('') : '<div class="empty">没有找到匹配的邮件模板。</div>';
  }
  function renderResources() {
    const groups = {visual:'视觉风格',modules:'内容模块',scale:'规模化邮件'};
    $('#edm-resources').innerHTML = Object.entries(groups).map(([key,label]) => `<h3>${label}</h3>${resources.filter(r=>r.category===key).map(r=>`<button class="resource-row" data-resource="${esc(r.name)}"><b>${esc(r.name)}</b><small>${esc(r.type)} · ${esc(r.use)}</small></button>`).join('')}`).join('');
  }
  function setEdmTab(tab) {
    activeTab=tab;
    $$('#edm-tabs [data-tab]').forEach(b=>b.setAttribute('aria-selected',String(b.dataset.tab===tab)));
    $$('#edm-sections > section').forEach(s=>s.hidden=s.id!=='edm-'+tab);
  }
  $('#edm-tabs').addEventListener('click',e=>{const b=e.target.closest('[data-tab]');if(b)setEdmTab(b.dataset.tab)});
  $('#phase-tabs').addEventListener('click',e=>{const b=e.target.closest('[data-phase]');if(!b)return;phase=b.dataset.phase;$$('#phase-tabs button').forEach(x=>x.setAttribute('aria-selected',String(x===b)));renderEdm()});
  $('#edm-search').addEventListener('input',renderEdm);
  $('#edm-grid').addEventListener('click',event=>{
    const card=event.target.closest('[data-template]');if(!card)return;
    const t=templates.find(x=>x.id===card.dataset.template);if(!t)return;
    selectedTemplate=t;
    $('#detail-title').textContent=t.name;
    const src=t.file.replace(/^\.\.\//,'');
    $('#detail-body').innerHTML=`<div class="eyebrow">EDM / ${esc(t.phase)} / ${esc(t.audience)}</div><h2>${esc(t.name)}</h2><p class="lead">${esc(t.desc)}</p><div class="meta-grid"><div><b>主题行</b>${esc(t.subject)}</div><div><b>Preheader</b>${esc(t.preheader)}</div><div><b>主要行动</b>${esc(t.cta)}</div><div><b>状态</b>${esc(t.status)}</div></div><div class="button-row"><a class="secondary" href="edm-library/overview-classic.html#templates?id=${encodeURIComponent(t.id)}">查看档案记录</a><a class="secondary" href="${src}" target="_blank" rel="noopener">新标签打开邮件</a></div><h3>HTML 预览</h3><iframe class="mail-preview" title="${esc(t.name)} 邮件 HTML 预览" src="${src}" loading="lazy"></iframe>`;
    openWindow('detail');
  });
  $('#edm-resources').addEventListener('click',event=>{
    const row=event.target.closest('[data-resource]');if(!row)return;
    const r=resources.find(x=>x.name===row.dataset.resource);if(!r)return;
    $('#detail-title').textContent=r.name;
    $('#detail-body').innerHTML=`<div class="eyebrow">RESOURCE / ${esc(r.type)}</div><h2>${esc(r.name)}</h2><p class="lead">${esc(r.use)}</p><div class="meta-grid"><div><b>来源</b>${esc(r.repo)}</div><div><b>分类</b>${esc(r.type)}</div></div><a class="primary" href="${r.url}" target="_blank" rel="noopener noreferrer">访问资源</a>`;
    openWindow('detail');
  });

  renderAds(); renderEdm(); renderResources(); setEdmTab(activeTab); openFromHash();
  window.addEventListener('hashchange',openFromHash);
  function clock(){ $('#clock').textContent=new Date().toLocaleTimeString('en-US',{hour:'numeric',minute:'2-digit',second:'2-digit'}); }
  clock(); setInterval(clock,1000);
  const boot=$('#boot');
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) boot.classList.add('done');
  else setTimeout(()=>boot.classList.add('done'),1650);
})();

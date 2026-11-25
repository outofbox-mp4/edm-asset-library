(() => {
  const assetBase = 'edm-library/assets/cats/';
  const templates = [...(window.EDM_LIBRARY?.templates || []), ...(window.EDM_MAILCHIMP_TEMPLATES || [])].map(t => {
    const campaign = t.campaign || t.tags?.[0] || 'Black Friday';
    return {...t,campaign,displayName:`${t.phase} · ${t.audience}`};
  }).sort((a,b) => {
    const order = {'预热期':0,'早鸟价':1,'早鸟价 36h':1,'正式活动':2};
    return (order[a.phase] ?? 9) - (order[b.phase] ?? 9) || a.audience.localeCompare(b.audience,'zh');
  });
  const resources = window.EDM_LIBRARY?.resources || [];
  const $ = (selector) => document.querySelector(selector);
  const $$ = (selector) => [...document.querySelectorAll(selector)];
  const esc = (value) => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  let topZ = 10, activeTab = 'templates', campaignFilter = 'all';

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

  function renderEdm() {
    const term = $('#edm-search').value.trim().toLowerCase();
    const list = templates.filter(t => (campaignFilter === 'all' || t.campaign === campaignFilter) && `${t.name} ${t.displayName} ${t.variant || ''} ${t.goal} ${t.campaign}`.toLowerCase().includes(term));
    $('#edm-grid').innerHTML = list.length ? list.map((t,i) => `<button class="asset-tile" data-template="${esc(t.id)}"><span class="tile-art" data-mark="${esc(t.campaign)}" style="--art:${i%2?'#dbfff0':'#191919'};--art-ink:${i%2?'#161616':'#e9a3a8'}"></span><span class="tile-text"><strong>${esc(t.displayName)}</strong><small>${esc(t.variant || t.desc)}</small></span></button>`).join('') : '<div class="empty">没有找到匹配的邮件模板。</div>';
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
  $('#campaign-tabs').innerHTML = `<button class="tab" data-campaign="all" aria-selected="true">全部</button>${[...new Set(templates.map(t => t.campaign))].map(c => `<button class="tab" data-campaign="${esc(c)}" aria-selected="false">${esc(c)}</button>`).join('')}`;
  $('#campaign-tabs').addEventListener('click',e=>{const b=e.target.closest('[data-campaign]');if(!b)return;campaignFilter=b.dataset.campaign;$$('#campaign-tabs button').forEach(x=>x.setAttribute('aria-selected',String(x===b)));renderEdm()});
  $('#edm-search').addEventListener('input',renderEdm);
  $('#edm-grid').addEventListener('click',event=>{
    const card=event.target.closest('[data-template]');if(!card)return;
    const t=templates.find(x=>x.id===card.dataset.template);if(!t)return;
    $('#detail-title').textContent=t.displayName;
    const src=t.file.replace(/^\.\.\//,'');
    $('#detail-body').innerHTML=`<div class="eyebrow">${esc(t.campaign)} / ${esc(t.phase)}</div><h2>${esc(t.displayName)}</h2><p class="lead">${esc(t.variant || t.desc)}</p><div class="meta-grid"><div><b>说明</b>${esc(t.desc)}</div><div><b>目标</b>${esc(t.goal)}</div>${t.subject?`<div><b>主题行</b>${esc(t.subject)}</div>`:''}${t.preheader?`<div><b>Preheader</b>${esc(t.preheader)}</div>`:''}</div><div class="button-row"><a class="secondary" href="edm-library/overview-classic.html#templates?id=${encodeURIComponent(t.id)}">查看档案记录</a><a class="secondary" href="${src}" target="_blank" rel="noopener">新标签打开邮件</a></div><h3>HTML 预览</h3><iframe class="mail-preview" title="${esc(t.displayName)} 邮件 HTML 预览" src="${src}" loading="lazy"></iframe>`;
    openWindow('detail');
  });
  $('#edm-resources').addEventListener('click',event=>{
    const row=event.target.closest('[data-resource]');if(!row)return;
    const r=resources.find(x=>x.name===row.dataset.resource);if(!r)return;
    $('#detail-title').textContent=r.name;
    $('#detail-body').innerHTML=`<div class="eyebrow">RESOURCE / ${esc(r.type)}</div><h2>${esc(r.name)}</h2><p class="lead">${esc(r.use)}</p><div class="meta-grid"><div><b>来源</b>${esc(r.repo)}</div><div><b>分类</b>${esc(r.type)}</div></div><a class="primary" href="${r.url}" target="_blank" rel="noopener noreferrer">访问资源</a>`;
    openWindow('detail');
  });

  renderEdm(); renderResources(); setEdmTab(activeTab); openFromHash();
  window.addEventListener('hashchange',openFromHash);
  function clock(){ $('#clock').textContent=new Date().toLocaleTimeString('en-US',{hour:'numeric',minute:'2-digit',second:'2-digit'}); }
  clock(); setInterval(clock,1000);
  const boot=$('#boot');
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) boot.classList.add('done');
  else setTimeout(()=>boot.classList.add('done'),1650);
})();

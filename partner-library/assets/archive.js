(() => {
  const library = window.PARTNER_LIBRARY;
  const sections = [
    {id:'affiliate',glyph:'◇'},
    {id:'kol',glyph:'◎'},
    {id:'shared',glyph:'∑'}
  ];
  const $ = selector => document.querySelector(selector);
  const esc = value => String(value ?? '').replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
  const searchable = (group,item) => `${group.name} ${item.name} ${item.summary} ${item.steps.join(' ')} ${item.output}`.toLowerCase();
  const home = $('#archive-home');
  const detail = $('#archive-detail');
  const search = $('#archive-search');

  function renderHome() {
    const term = search.value.trim().toLowerCase();
    let matches = 0;
    $('#archive-groups').innerHTML = sections.map(section => {
      const group = library[section.id];
      const items = group.items.filter(item => searchable(group,item).includes(term));
      matches += items.length;
      if (!items.length) return '';
      return `<section class="group" id="${section.id}"><h2>${esc(group.name)} <small>${items.length}</small></h2><div class="rows">${items.map(item => `<a class="row" href="#${section.id}?item=${encodeURIComponent(item.id)}"><span class="glyph" aria-hidden="true">${section.glyph}</span><span><strong>${esc(item.name)}</strong><span class="meta">${esc(item.summary)}</span></span><span class="arrow" aria-hidden="true">→</span></a>`).join('')}</div></section>`;
    }).join('');
    $('#archive-empty').classList.toggle('show',matches===0);
  }

  function selectItem(groupId,itemId) {
    const group = library[groupId];
    const item = group.items.find(entry => entry.id===itemId) || group.items[0];
    $('.record-detail').innerHTML = `<span class="meta-label">${esc(group.name)} / 方法概览</span><h2>${esc(item.name)}</h2><p>${esc(item.summary)}</p><h3>判断要点</h3><ol>${item.steps.map(step => `<li>${esc(step)}</li>`).join('')}</ol><div class="deliverable"><b>建议记录</b><p>${esc(item.output)}</p></div>`;
    detail.querySelectorAll('[data-item]').forEach(button => {
      const active = button.dataset.item===item.id;
      button.classList.toggle('active',active);
      button.setAttribute('aria-current',String(active));
    });
  }

  function showGroup(groupId,itemId) {
    const group = library[groupId];
    home.hidden = true;
    detail.hidden = false;
    if (detail.dataset.group!==groupId) {
      detail.dataset.group = groupId;
      detail.innerHTML = `<a class="detail-back" href="#index">← 全部档案</a><header class="detail-header"><h1>${esc(group.name)}</h1><p>${esc(group.intro)}</p></header><input class="detail-search" id="record-search" type="search" placeholder="搜索${esc(group.name)}" aria-label="搜索${esc(group.name)}"><p class="record-count">共 ${group.items.length} 项</p><div class="record-layout"><div class="record-list">${group.items.map(item => `<button class="record-item" type="button" data-item="${esc(item.id)}"><b>${esc(item.name)}</b><small>${esc(item.summary)}</small></button>`).join('')}</div><article class="record-detail"></article></div>`;
      detail.querySelector('.record-list').addEventListener('click',event => {
        const button = event.target.closest('[data-item]');
        if (button) location.hash = `${groupId}?item=${encodeURIComponent(button.dataset.item)}`;
      });
      $('#record-search').addEventListener('input',event => {
        const term = event.target.value.trim().toLowerCase();
        detail.querySelectorAll('[data-item]').forEach(button => {
          const item = group.items.find(entry => entry.id===button.dataset.item);
          button.hidden = !searchable(group,item).includes(term);
        });
      });
      window.scrollTo({top:0,behavior:'instant'});
    }
    selectItem(groupId,itemId);
    document.querySelectorAll('.sidebar a').forEach(link => link.classList.toggle('active',link.hash===`#${groupId}`));
  }

  function route() {
    const [groupId,query=''] = location.hash.slice(1).split('?');
    if (library[groupId]) {
      showGroup(groupId,new URLSearchParams(query).get('item'));
      return;
    }
    detail.hidden = true;
    detail.dataset.group = '';
    home.hidden = false;
    document.querySelectorAll('.sidebar a').forEach(link => link.classList.remove('active'));
  }

  search.addEventListener('input',renderHome);
  window.addEventListener('hashchange',route);
  renderHome();
  route();
})();

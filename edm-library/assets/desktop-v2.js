(() => {
  const $ = selector => document.querySelector(selector);
  const $$ = selector => [...document.querySelectorAll(selector)];
  let topZ = 10;

  function focusWindow(win) { win.style.zIndex = ++topZ; }
  function openWindow(id) {
    const win = document.getElementById('win-' + id);
    if (!win) return;
    win.classList.add('open');
    win.setAttribute('aria-hidden', 'false');
    focusWindow(win);
    $('#start-menu').classList.remove('open');
    $('#menu-toggle').classList.remove('active');
  }
  function closeWindow(win) {
    win.classList.remove('open');
    win.setAttribute('aria-hidden', 'true');
  }
  function openFromHash() {
    const id = location.hash.slice(1);
    if (['about', 'ads', 'edm', 'partners'].includes(id)) openWindow(id);
  }

  document.addEventListener('click', event => {
    const launch = event.target.closest('[data-open]');
    if (launch) { openWindow(launch.dataset.open); return; }
    const control = event.target.closest('[data-control]');
    if (control) {
      const win = control.closest('.window');
      if (control.dataset.control === 'close') closeWindow(win);
      if (control.dataset.control === 'max') { win.classList.toggle('maximized'); focusWindow(win); }
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
    if (!event.target.closest('#start-menu')) {
      $('#start-menu').classList.remove('open');
      $('#menu-toggle').classList.remove('active');
    }
    const win = event.target.closest('.window');
    if (win) focusWindow(win);
  });
  document.addEventListener('keydown', event => {
    if (event.key !== 'Escape') return;
    if ($('#start-menu').classList.contains('open')) {
      $('#start-menu').classList.remove('open');
      $('#menu-toggle').classList.remove('active');
      return;
    }
    const win = $$('.window.open').sort((a, b) => Number(b.style.zIndex) - Number(a.style.zIndex))[0];
    if (win) closeWindow(win);
  });

  let drag = null;
  document.addEventListener('pointerdown', event => {
    const bar = event.target.closest('.titlebar');
    if (!bar || event.target.closest('button')) return;
    const win = bar.closest('.window');
    if (win.classList.contains('maximized') || innerWidth <= 760) return;
    focusWindow(win);
    const rect = win.getBoundingClientRect();
    drag = {win, dx:event.clientX - rect.left, dy:event.clientY - rect.top};
    bar.setPointerCapture(event.pointerId);
  });
  document.addEventListener('pointermove', event => {
    if (!drag) return;
    drag.win.style.left = Math.max(0, Math.min(innerWidth - 160, event.clientX - drag.dx)) + 'px';
    drag.win.style.top = Math.max(0, Math.min(innerHeight - 120, event.clientY - drag.dy)) + 'px';
  });
  document.addEventListener('pointerup', () => { drag = null; });

  openFromHash();
  window.addEventListener('hashchange', openFromHash);
  function clock() {
    $('#clock').textContent = new Date().toLocaleTimeString('en-US', {hour:'numeric', minute:'2-digit', second:'2-digit'});
  }
  clock();
  setInterval(clock, 1000);
  const boot = $('#boot');
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) boot.classList.add('done');
  else setTimeout(() => boot.classList.add('done'), 1650);
})();

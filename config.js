(() => {
  'use strict';

  const config = window.APP_CONFIG || {};
  const appUrl = String(config.gasWebAppUrl || '').trim();
  const appName = config.appName || 'ระบบสร้างใบลงเวลา';

  const frame = document.getElementById('gasFrame');
  const loading = document.getElementById('loadingPanel');
  const offline = document.getElementById('offlinePanel');
  const networkDot = document.getElementById('networkDot');
  const networkText = document.getElementById('networkText');
  const refreshBtn = document.getElementById('refreshBtn');
  const retryBtn = document.getElementById('retryBtn');
  const openDirectBtn = document.getElementById('openDirectBtn');
  const helpDirectLink = document.getElementById('helpDirectLink');
  const appNameEl = document.getElementById('appName');

  document.title = appName;
  appNameEl.textContent = appName;

  function setConnectionStatus() {
    const isOnline = navigator.onLine;
    networkDot.className = `network-dot ${isOnline ? 'online' : 'offline'}`;
    networkText.textContent = isOnline ? 'เชื่อมต่อแล้ว' : 'ออฟไลน์';
    offline.hidden = isOnline;
  }

  function loadApp(forceReload = false) {
    if (!appUrl) {
      loading.innerHTML = '<strong>ยังไม่ได้กำหนด Google Apps Script URL</strong><span>แก้ไขไฟล์ config.js แล้วลองใหม่</span>';
      return;
    }
    if (!navigator.onLine) {
      setConnectionStatus();
      return;
    }
    loading.hidden = false;
    const sep = appUrl.includes('?') ? '&' : '?';
    frame.src = forceReload ? `${appUrl}${sep}_pwa_refresh=${Date.now()}` : appUrl;
  }

  [openDirectBtn, helpDirectLink].forEach((link) => {
    link.href = appUrl || '#';
  });

  frame.addEventListener('load', () => {
    loading.hidden = true;
  });

  refreshBtn.addEventListener('click', () => loadApp(true));
  retryBtn.addEventListener('click', () => loadApp(true));
  window.addEventListener('online', () => { setConnectionStatus(); loadApp(true); });
  window.addEventListener('offline', setConnectionStatus);

  setConnectionStatus();
  loadApp();

  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('./sw.js').catch((err) => {
        console.warn('Service worker registration failed:', err);
      });
    });
  }
})();

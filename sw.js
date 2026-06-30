:root {
  --teal: #0f766e;
  --teal-dark: #115e59;
  --teal-soft: #ecfdf5;
  --ink: #18302d;
  --muted: #64748b;
  --line: #d9e6e4;
  --surface: #ffffff;
  --shell: #f5fbfa;
  --danger: #b91c1c;
}

* { box-sizing: border-box; }
html, body { width: 100%; min-height: 100%; margin: 0; }
body {
  color: var(--ink);
  background: var(--shell);
  font-family: "Noto Sans Thai", "Sarabun", Tahoma, Arial, sans-serif;
}
button, a { font: inherit; }
.app-shell { min-height: 100dvh; display: flex; flex-direction: column; }
.topbar {
  min-height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: max(10px, env(safe-area-inset-top)) 16px 10px;
  background: var(--surface);
  border-bottom: 1px solid var(--line);
  box-shadow: 0 1px 8px rgba(15, 118, 110, .07);
  z-index: 10;
}
.brand { display: flex; align-items: center; gap: 10px; min-width: 0; }
.brand-icon { width: 40px; height: 40px; border-radius: 11px; box-shadow: 0 2px 5px rgba(15, 118, 110, .18); }
.brand-title { font-size: 16px; font-weight: 750; letter-spacing: .05px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.brand-subtitle { display: flex; align-items: center; gap: 6px; margin-top: 2px; color: var(--muted); font-size: 12px; }
.network-dot { width: 8px; height: 8px; border-radius: 999px; background: #f59e0b; display: inline-block; }
.network-dot.online { background: #16a34a; }
.network-dot.offline { background: var(--danger); }
.toolbar-actions { display: flex; align-items: center; gap: 8px; flex-shrink: 0; }
.icon-button, .open-button {
  min-height: 38px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 9px;
  cursor: pointer;
  text-decoration: none;
  white-space: nowrap;
}
.icon-button { width: 38px; border: 1px solid var(--line); color: var(--teal-dark); background: #fff; font-weight: 700; font-size: 24px; line-height: 1; }
.icon-button:hover { background: var(--teal-soft); }
.open-button { padding: 0 12px; color: #fff; background: var(--teal); border: 1px solid var(--teal); font-size: 13px; font-weight: 700; }
.open-button:hover { background: var(--teal-dark); }
.content-area { position: relative; flex: 1; min-height: calc(100dvh - 64px); background: #fff; }
#gasFrame { display: block; width: 100%; height: calc(100dvh - 64px); border: 0; background: #fff; }
.loading-panel { position: absolute; inset: 0; z-index: 4; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 8px; background: #fff; color: var(--ink); }
.loading-panel span { color: var(--muted); font-size: 14px; }
.spinner { width: 36px; height: 36px; border-radius: 50%; border: 4px solid #d1fae5; border-top-color: var(--teal); animation: spin .85s linear infinite; }
@keyframes spin { to { transform: rotate(360deg); } }
.offline-panel { position: absolute; inset: 0; z-index: 8; display: grid; place-items: center; padding: 24px; background: rgba(248, 250, 252, .97); }
.offline-card { max-width: 440px; text-align: center; padding: 28px; border-radius: 18px; border: 1px solid var(--line); background: #fff; box-shadow: 0 12px 34px rgba(15, 23, 42, .12); }
.offline-icon { width: 52px; height: 52px; display: grid; place-items: center; margin: 0 auto 8px; background: #fef2f2; color: var(--danger); border-radius: 14px; font-size: 29px; font-weight: 700; }
.offline-card h1 { margin: 0 0 8px; font-size: 19px; }
.offline-card p { margin: 0 0 18px; color: var(--muted); line-height: 1.55; font-size: 14px; }
.offline-card button { border: 0; border-radius: 9px; padding: 10px 15px; color: white; background: var(--teal); font-weight: 700; cursor: pointer; }
.embed-help { padding: 7px 14px calc(7px + env(safe-area-inset-bottom)); background: #fffbeb; border-top: 1px solid #fde68a; color: #713f12; font-size: 12px; line-height: 1.45; }
.embed-help code { display: inline-block; padding: 1px 4px; border-radius: 4px; color: #7c2d12; background: #fff7ed; font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace; font-size: 11px; }
.embed-help a { color: #92400e; font-weight: 700; }

@media (max-width: 620px) {
  .topbar { min-height: 58px; padding-left: 10px; padding-right: 10px; }
  .brand-icon { width: 35px; height: 35px; border-radius: 10px; }
  .brand-title { font-size: 14px; max-width: 42vw; }
  .brand-subtitle { font-size: 11px; }
  .open-button { padding: 0 9px; font-size: 12px; }
  #gasFrame { height: calc(100dvh - 58px); }
  .content-area { min-height: calc(100dvh - 58px); }
  .embed-help { font-size: 11px; }
}

@media (display-mode: standalone) {
  .topbar { padding-top: max(10px, env(safe-area-inset-top)); }
}

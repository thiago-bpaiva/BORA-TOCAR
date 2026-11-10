// Registra o Service Worker somente em contextos seguros (HTTPS ou localhost).
if ('serviceWorker' in navigator && (location.protocol === 'https:' || location.hostname === 'localhost')) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./service-worker.js')
      .catch(error => console.error('Não foi possível registrar o Service Worker:', error));
  });
}

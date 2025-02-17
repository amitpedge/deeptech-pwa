import { useState, useEffect } from 'react';

export default function InstallButton() {
  const [showInstall, setShowInstall] = useState(false);

  useEffect(() => {
    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
      window.deferredPrompt = e;
      setShowInstall(true);
    });

    window.addEventListener('appinstalled', () => {
      setShowInstall(false);
      window.deferredPrompt = null;
    });
  }, []);

  const handleInstall = async () => {
    if (!window.deferredPrompt) return;

    window.deferredPrompt.prompt();
    const { outcome } = await window.deferredPrompt.userChoice;
    
    if (outcome === 'accepted') {
      console.log('App installed');
    }
    
    window.deferredPrompt = null;
    setShowInstall(false);
  };

  if (!showInstall) return null;

  return (
    <button
      onClick={handleInstall}
      className="install-button"
    >
      Install App 📱
    </button>
  );
} 
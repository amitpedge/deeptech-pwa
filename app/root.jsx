import {
    Links,
    LiveReload,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration,
  } from "@remix-run/react";

import styles from "./styles/global.css"

export const links = () => [
  {
    rel: "stylesheet",
    href: styles
  }
];

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1" />
        <meta name="theme-color" content="#4a148c" />
        <meta name="description" content="Latest news and companies in deep tech" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/icons/icon-192.png" />
        <link rel="apple-touch-icon" href="/icons/icon-512.png" />
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Immediate registration without waiting for load
              if ('serviceWorker' in navigator) {
                try {
                  navigator.serviceWorker.register('/service-worker.js', {
                    scope: '/',
                    type: 'classic',
                    updateViaCache: 'none'
                  }).then(registration => {
                    console.log('SW registered on:', window.location.href);
                    console.log('SW scope:', registration.scope);
                    
                    // Check if service worker is active
                    if (registration.active) {
                      console.log('SW is active');
                    } else {
                      console.log('SW is not active yet');
                    }
                  });
                } catch (error) {
                  console.error('SW registration failed:', error);
                }
              } else {
                console.error('Service Workers not supported');
              }

              let deferredPrompt;

              window.addEventListener('beforeinstallprompt', (e) => {
                // Prevent Chrome 67 and earlier from automatically showing the prompt
                e.preventDefault();
                // Stash the event so it can be triggered later
                deferredPrompt = e;
                // Show your install button here
                console.log('App can be installed');
              });

              // When you want to trigger the install prompt (e.g., button click)
              function installApp() {
                if (deferredPrompt) {
                  // Show the prompt
                  deferredPrompt.prompt();
                  
                  // Wait for the user to respond to the prompt
                  deferredPrompt.userChoice.then((choiceResult) => {
                    if (choiceResult.outcome === 'accepted') {
                      console.log('User accepted the install prompt');
                    } else {
                      console.log('User dismissed the install prompt');
                    }
                    deferredPrompt = null;
                  });
                }
              }
            `,
          }}
        />
      </body>
    </html>
  );
}
import{b as r,f as o,g as t,h as n,i,j as a,l as s,m as d}from"/build/_shared/chunk-N2RQUN62.js";var c="/build/_assets/global-QUAAMULA.css";var e=r(d()),u=()=>[{rel:"stylesheet",href:c}];function l(){return(0,e.jsxs)("html",{lang:"en",children:[(0,e.jsxs)("head",{children:[(0,e.jsx)("meta",{charSet:"utf-8"}),(0,e.jsx)("meta",{name:"viewport",content:"width=device-width,initial-scale=1,minimum-scale=1"}),(0,e.jsx)("meta",{name:"theme-color",content:"#4a148c"}),(0,e.jsx)("meta",{name:"description",content:"Latest news and companies in deep tech"}),(0,e.jsx)("link",{rel:"manifest",href:"/manifest.json"}),(0,e.jsx)("link",{rel:"icon",href:"/icons/icon-192.png"}),(0,e.jsx)("link",{rel:"apple-touch-icon",href:"/icons/icon-512.png"}),(0,e.jsx)(n,{}),(0,e.jsx)(t,{})]}),(0,e.jsxs)("body",{children:[(0,e.jsx)(o,{}),(0,e.jsx)(s,{}),(0,e.jsx)(i,{}),(0,e.jsx)(a,{}),(0,e.jsx)("script",{dangerouslySetInnerHTML:{__html:`
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
            `}})]})]})}export{l as default,u as links};

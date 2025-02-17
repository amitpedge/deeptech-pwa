var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  mode: () => mode,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// node_modules/@remix-run/dev/dist/config/defaults/entry.server.node.tsx
var entry_server_node_exports = {};
__export(entry_server_node_exports, {
  default: () => handleRequest
});
var import_node_stream = require("node:stream"), import_node = require("@remix-run/node"), import_react = require("@remix-run/react"), isbotModule = __toESM(require("isbot")), import_server = require("react-dom/server"), import_jsx_runtime = require("react/jsx-runtime"), ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext) {
  return isBotRequest(request.headers.get("user-agent")) || remixContext.isSpaMode ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function isBotRequest(userAgent) {
  return userAgent ? "isbot" in isbotModule && typeof isbotModule.isbot == "function" ? isbotModule.isbot(userAgent) : "default" in isbotModule && typeof isbotModule.default == "function" ? isbotModule.default(userAgent) : !1 : !1;
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        }
      ),
      {
        onAllReady() {
          shellRendered = !0;
          let body = new import_node_stream.PassThrough(), stream = (0, import_node.createReadableStreamFromReadable)(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        }
      ),
      {
        onShellReady() {
          shellRendered = !0;
          let body = new import_node_stream.PassThrough(), stream = (0, import_node.createReadableStreamFromReadable)(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.jsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links
});
var import_react2 = require("@remix-run/react");

// app/styles/global.css
var global_default = "/build/_assets/global-QUAAMULA.css";

// app/root.jsx
var import_jsx_runtime2 = require("react/jsx-runtime"), links = () => [
  {
    rel: "stylesheet",
    href: global_default
  }
];
function App() {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("meta", { charSet: "utf-8" }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("meta", { name: "viewport", content: "width=device-width,initial-scale=1,minimum-scale=1" }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("meta", { name: "theme-color", content: "#4a148c" }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("meta", { name: "description", content: "Latest news and companies in deep tech" }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("link", { rel: "manifest", href: "/manifest.json" }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("link", { rel: "icon", href: "/icons/icon-192.png" }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("link", { rel: "apple-touch-icon", href: "/icons/icon-512.png" }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.Meta, {}),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.Links, {})
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.Outlet, {}),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.ScrollRestoration, {}),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.Scripts, {}),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.LiveReload, {}),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
        "script",
        {
          dangerouslySetInnerHTML: {
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
            `
          }
        }
      )
    ] })
  ] });
}

// app/routes/_index.jsx
var index_exports = {};
__export(index_exports, {
  default: () => Index,
  links: () => links2
});
var import_react3 = require("react");

// app/data/companies.js
var companies = [
  {
    name: "Anant Raj Pvt Ltd",
    revenue: "20,000 cr",
    days: 2,
    code: 543,
    url: "https://google.com"
  },
  {
    name: "Asian Paints",
    revenue: "1,00,000 cr",
    days: 23,
    code: 1499,
    url: "https://asianpaints.com"
  },
  {
    name: "TechCorp",
    revenue: "$5M",
    days: 30,
    code: "TECH01",
    url: "https://techcorp.example.com"
  },
  {
    name: "BioInnovate",
    revenue: "$3M",
    days: 45,
    code: "BIO02",
    url: "https://bioinnovate.example.com"
  }
];

// app/data/news.js
var news = [
  {
    id: 1,
    title: "Anant Raj Pvt Ltd Secures Major Contract",
    description: "Anant Ray Pvt Ltd announces a significant contract win worth 500cr...",
    date: "2024-01-15",
    source: "Business Standard",
    company: "543"
  },
  {
    id: 2,
    title: "Asian Paints Expansion",
    description: "Asian Paints reveals plans for new manufacturing facility...",
    date: "2024-01-14",
    source: "Economic Times",
    company: "1499"
  },
  {
    id: 3,
    title: "TechCorp Innovation",
    description: "TechCorp launches new AI platform...",
    date: "2024-01-13",
    source: "Tech News",
    company: "TECH01"
  },
  {
    id: 4,
    title: "BioInnovate Research",
    description: "BioInnovate announces breakthrough in research...",
    date: "2024-01-12",
    source: "Science Daily",
    company: "BIO02"
  }
];

// app/styles/index.css
var styles_default = "/build/_assets/index-7BAP6M5W.css";

// app/routes/_index.jsx
var import_react4 = require("@remix-run/react"), import_jsx_runtime3 = require("react/jsx-runtime"), links2 = () => [
  {
    rel: "stylesheet",
    href: styles_default
  }
];
function Index() {
  let [activeTab, setActiveTab] = (0, import_react3.useState)("COMPANIES"), [selectedCompany, setSelectedCompany] = (0, import_react3.useState)("all"), navigate = (0, import_react4.useNavigate)(), handleCompanyClick = (url) => {
    window.open(url, "_blank");
  }, filteredNews = selectedCompany === "all" ? news : news.filter((item) => item.company === selectedCompany);
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "app-container", children: [
    /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("header", { className: "header", children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "left-icons", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "logo", children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { children: "\u{1F52E}" }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { children: "1nvest" })
      ] }) }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("button", { className: "icon-button", children: "\u{1F464}" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("nav", { className: "navigation", children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
        "button",
        {
          className: `nav-button ${activeTab === "COMPANIES" ? "active" : ""}`,
          onClick: () => setActiveTab("COMPANIES"),
          children: "COMPANIES"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
        "button",
        {
          className: `nav-button ${activeTab === "NEWS" ? "active" : ""}`,
          onClick: () => setActiveTab("NEWS"),
          children: "NEWS"
        }
      )
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("main", { children: activeTab === "COMPANIES" ? /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "company-list", children: companies.map(
      (company) => /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
        "div",
        {
          className: "company-item",
          onClick: () => handleCompanyClick(company.url),
          role: "button",
          tabIndex: 0,
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("h3", { children: company.name }),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "company-details", children: [
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { children: company.revenue }),
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { children: "|" }),
              /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("span", { children: [
                company.days,
                " days"
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { children: "|" }),
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { children: company.code })
            ] })
          ]
        },
        company.code
      )
    ) }) : /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "news-section", children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "news-filters", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
        "select",
        {
          value: selectedCompany,
          onChange: (e) => setSelectedCompany(e.target.value),
          className: "company-filter",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("option", { value: "all", children: "All Companies" }),
            companies.map(
              (company) => /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("option", { value: company.code, children: company.name }, company.code)
            )
          ]
        }
      ) }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "news-list", children: filteredNews.map(
        (item) => /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "news-item", children: [
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("h3", { children: item.title }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { children: item.description }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "news-meta", children: [
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { children: item.date }),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { children: "\u2022" }),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { children: item.source })
          ] })
        ] }, item.id)
      ) })
    ] }) }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("footer", { className: "footer", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("button", { className: "sign-out-button", children: "SIGN OUT" }) })
  ] });
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-22P6A5Y4.js", imports: ["/build/_shared/chunk-N2RQUN62.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-TPULVD7A.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-UKWHEK7Y.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 } }, version: "4341e841", hmr: void 0, url: "/build/manifest-4341E841.js" };

// server-entry-module:@remix-run/dev/server-build
var mode = "production", assetsBuildDirectory = "public/build", future = { v3_fetcherPersist: !1, v3_relativeSplatPath: !1, v3_throwAbortReason: !1, v3_routeConfig: !1, v3_singleFetch: !1, v3_lazyRouteDiscovery: !1, unstable_optimizeDeps: !1 }, publicPath = "/build/", entry = { module: entry_server_node_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: index_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  mode,
  publicPath,
  routes
});

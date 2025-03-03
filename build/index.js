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
var import_node_stream = require("node:stream"), import_node = require("@remix-run/node"), import_react = require("@remix-run/react"), isbotModule = __toESM(require("isbot")), import_server = require("react-dom/server"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), ABORT_DELAY = 5e3;
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
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "node_modules/@remix-run/dev/dist/config/defaults/entry.server.node.tsx",
          lineNumber: 66,
          columnNumber: 7
        },
        this
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
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "node_modules/@remix-run/dev/dist/config/defaults/entry.server.node.tsx",
          lineNumber: 116,
          columnNumber: 7
        },
        this
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
var import_react4 = require("@remix-run/react");

// app/context/AuthContext.jsx
var import_react2 = require("react"), import_react3 = require("@remix-run/react"), import_jsx_dev_runtime2 = require("react/jsx-dev-runtime"), AuthContext = (0, import_react2.createContext)(null);
function AuthProvider({ children }) {
  let [user, setUser] = (0, import_react2.useState)(null), [loading, setLoading] = (0, import_react2.useState)(!0), navigate = (0, import_react3.useNavigate)();
  (0, import_react2.useEffect)(() => {
    (async () => {
      try {
        let storedUser = localStorage.getItem("user");
        storedUser && setUser(JSON.parse(storedUser));
      } catch (error) {
        console.error("Authentication error:", error);
      } finally {
        setLoading(!1);
      }
    })();
  }, []);
  let value = {
    user,
    loading,
    login: async (email, password) => {
      try {
        let userData = {
          id: "1",
          email,
          name: email.split("@")[0],
          createdAt: (/* @__PURE__ */ new Date()).toISOString()
        };
        return localStorage.setItem("user", JSON.stringify(userData)), setUser(userData), { success: !0 };
      } catch (error) {
        return { success: !1, error: error.message };
      }
    },
    signup: async (email, password, name) => {
      try {
        let userData = {
          id: "1",
          email,
          name: name || email.split("@")[0],
          createdAt: (/* @__PURE__ */ new Date()).toISOString()
        };
        return localStorage.setItem("user", JSON.stringify(userData)), setUser(userData), { success: !0 };
      } catch (error) {
        return { success: !1, error: error.message };
      }
    },
    logout: () => {
      localStorage.removeItem("user"), setUser(null), navigate("/login");
    },
    isAuthenticated: !!user
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(AuthContext.Provider, { value, children }, void 0, !1, {
    fileName: "app/context/AuthContext.jsx",
    lineNumber: 85,
    columnNumber: 10
  }, this);
}
function useAuth() {
  return (0, import_react2.useContext)(AuthContext);
}

// app/root.jsx
var import_jsx_dev_runtime3 = require("react/jsx-dev-runtime"), links = () => [
  {
    rel: "stylesheet",
    href: "/styles/app.css"
  }
];
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("meta", { charSet: "utf-8" }, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 22,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("meta", { name: "viewport", content: "width=device-width,initial-scale=1,minimum-scale=1" }, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 23,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("meta", { name: "theme-color", content: "#4a148c" }, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 24,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("meta", { name: "description", content: "Latest news and companies in deep tech" }, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 25,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("link", { rel: "manifest", href: "/manifest.json" }, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 26,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("link", { rel: "icon", href: "/icons/icon-192.png" }, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 27,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("link", { rel: "apple-touch-icon", href: "/icons/icon-512.png" }, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 28,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react4.Meta, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 29,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react4.Links, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 30,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 21,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(AuthProvider, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react4.Outlet, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 34,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 33,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react4.ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 36,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react4.Scripts, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 37,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react4.LiveReload, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 38,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 32,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.jsx",
    lineNumber: 20,
    columnNumber: 5
  }, this);
}

// app/routes/app.company.$symbol.summary.jsx
var app_company_symbol_summary_exports = {};
__export(app_company_symbol_summary_exports, {
  default: () => CompanySummary,
  loader: () => loader
});
var import_react8 = require("@remix-run/react");

// app/data/companySummary.js
var companySummary = {
  AAPL: {
    description: `Apple Inc. is a global technology leader that designs, manufactures, and sells smartphones, computers, tablets, wearables, and accessories. Founded in 1976 by Steve Jobs and Steve Wozniak, Apple has revolutionized personal technology with the iPhone, iPad, Mac, Apple Watch, and Apple TV.

    The company's software ecosystem includes iOS, macOS, and various services like iCloud, Apple Music, and the App Store. Apple's focus on design, user experience, and privacy has built one of the world's most valuable brands.
    
    In recent years, Apple has expanded into services, including Apple TV+, Apple Arcade, and Apple Card, creating new revenue streams beyond hardware.`,
    keyMetrics: {
      marketCap: "2.95T",
      peRatio: "31.2",
      beta: "1.28",
      dividendYield: "0.51%",
      eps: "6.13",
      revenue: "383.93B",
      profitMargin: "25.31%",
      debtToEquity: "1.76"
    },
    financialRatios: [
      {
        category: "Liquidity Ratios",
        ratios: [
          { name: "Current Ratio", value: "1.47" },
          { name: "Quick Ratio", value: "1.23" },
          { name: "Cash Ratio", value: "0.74" }
        ]
      },
      {
        category: "Profitability Ratios",
        ratios: [
          { name: "Gross Margin", value: "43.31%" },
          { name: "Operating Margin", value: "30.42%" },
          { name: "ROE", value: "160.90%" }
        ]
      }
    ],
    historicalPrices: [
      { date: "2023-01", price: 135.27 },
      { date: "2023-02", price: 147.41 },
      { date: "2023-03", price: 164.9 },
      { date: "2023-04", price: 169.68 },
      { date: "2023-05", price: 177.25 },
      { date: "2023-06", price: 193.97 },
      { date: "2023-07", price: 196.45 },
      { date: "2023-08", price: 187.87 },
      { date: "2023-09", price: 171.21 },
      { date: "2023-10", price: 170.77 },
      { date: "2023-11", price: 189.37 },
      { date: "2023-12", price: 193.58 }
    ]
  }
  // Add more companies as needed
};

// app/components/charts/ChartWrapper.jsx
var import_react7 = require("react");

// app/components/charts/RechartsPriceChart.jsx
var import_recharts = require("recharts"), import_jsx_dev_runtime4 = require("react/jsx-dev-runtime"), RechartsPriceChart = ({ data, height, width }) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_recharts.ResponsiveContainer, { width, height, children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
  import_recharts.LineChart,
  {
    data,
    margin: { top: 20, right: 30, left: 20, bottom: 20 },
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_recharts.CartesianGrid, { strokeDasharray: "3 3", stroke: "#eee" }, void 0, !1, {
        fileName: "app/components/charts/RechartsPriceChart.jsx",
        lineNumber: 10,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_recharts.XAxis, { dataKey: "date" }, void 0, !1, {
        fileName: "app/components/charts/RechartsPriceChart.jsx",
        lineNumber: 11,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_recharts.YAxis, {}, void 0, !1, {
        fileName: "app/components/charts/RechartsPriceChart.jsx",
        lineNumber: 12,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_recharts.Tooltip, {}, void 0, !1, {
        fileName: "app/components/charts/RechartsPriceChart.jsx",
        lineNumber: 13,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
        import_recharts.Line,
        {
          type: "monotone",
          dataKey: "price",
          stroke: "#4a90e2",
          strokeWidth: 2,
          dot: !1
        },
        void 0,
        !1,
        {
          fileName: "app/components/charts/RechartsPriceChart.jsx",
          lineNumber: 14,
          columnNumber: 9
        },
        this
      )
    ]
  },
  void 0,
  !0,
  {
    fileName: "app/components/charts/RechartsPriceChart.jsx",
    lineNumber: 6,
    columnNumber: 7
  },
  this
) }, void 0, !1, {
  fileName: "app/components/charts/RechartsPriceChart.jsx",
  lineNumber: 5,
  columnNumber: 5
}, this), RechartsPriceChart_default = RechartsPriceChart;

// app/components/charts/ApexPriceChart.jsx
var import_react5 = require("react"), import_jsx_dev_runtime5 = require("react/jsx-dev-runtime"), ApexPriceChart = ({ data, height, width }) => {
  let [Chart, setChart] = (0, import_react5.useState)(null);
  if ((0, import_react5.useEffect)(() => {
    import("react-apexcharts").then((mod) => {
      setChart(() => mod.default);
    });
  }, []), !Chart)
    return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { children: "Loading chart..." }, void 0, !1, {
      fileName: "app/components/charts/ApexPriceChart.jsx",
      lineNumber: 14,
      columnNumber: 12
    }, this);
  let chartData = {
    options: {
      chart: {
        type: "line",
        height,
        width,
        toolbar: {
          show: !1
        }
      },
      stroke: {
        curve: "smooth",
        width: 2
      },
      xaxis: {
        type: "datetime",
        categories: data.map((item) => item.date)
      },
      tooltip: {
        x: {
          format: "dd MMM yyyy"
        }
      }
    },
    series: [{
      name: "Price",
      data: data.map((item) => item.price)
    }]
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
    Chart,
    {
      options: chartData.options,
      series: chartData.series,
      type: "line",
      height
    },
    void 0,
    !1,
    {
      fileName: "app/components/charts/ApexPriceChart.jsx",
      lineNumber: 48,
      columnNumber: 5
    },
    this
  );
}, ApexPriceChart_default = ApexPriceChart;

// app/components/charts/TradingViewChart.jsx
var import_react6 = require("react"), import_jsx_dev_runtime6 = require("react/jsx-dev-runtime"), TradingViewChart = ({ symbol, height, width }) => {
  let [TradingViewWidget, setTradingViewWidget] = (0, import_react6.useState)(null);
  return (0, import_react6.useEffect)(() => {
    import("react-ts-tradingview-widgets").then((mod) => {
      setTradingViewWidget(() => mod.AdvancedRealTimeChart);
    });
  }, []), TradingViewWidget ? /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
    TradingViewWidget,
    {
      symbol,
      theme: "light",
      height,
      width,
      interval: "D",
      timezone: "Etc/UTC",
      style: "1"
    },
    void 0,
    !1,
    {
      fileName: "app/components/charts/TradingViewChart.jsx",
      lineNumber: 17,
      columnNumber: 5
    },
    this
  ) : /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { children: "Loading chart..." }, void 0, !1, {
    fileName: "app/components/charts/TradingViewChart.jsx",
    lineNumber: 13,
    columnNumber: 12
  }, this);
}, TradingViewChart_default = TradingViewChart;

// app/components/charts/ChartWrapper.jsx
var import_jsx_dev_runtime7 = require("react/jsx-dev-runtime"), CHART_TYPES = {
  RECHARTS: "recharts",
  APEX: "apex",
  TRADINGVIEW: "tradingview"
}, ChartWrapper = ({
  data,
  type = CHART_TYPES.RECHARTS,
  // default chart type
  height = 400,
  width = "100%",
  options = {}
}) => /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "chart-container", style: { height, width }, children: (() => {
  switch (type) {
    case CHART_TYPES.RECHARTS:
      return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(RechartsPriceChart_default, { data, height, width, options }, void 0, !1, {
        fileName: "app/components/charts/ChartWrapper.jsx",
        lineNumber: 23,
        columnNumber: 16
      }, this);
    case CHART_TYPES.APEX:
      return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(ApexPriceChart_default, { data, height, width, options }, void 0, !1, {
        fileName: "app/components/charts/ChartWrapper.jsx",
        lineNumber: 25,
        columnNumber: 16
      }, this);
    case CHART_TYPES.TRADINGVIEW:
      return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(TradingViewChart_default, { data, height, width, options }, void 0, !1, {
        fileName: "app/components/charts/ChartWrapper.jsx",
        lineNumber: 27,
        columnNumber: 16
      }, this);
    default:
      return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(RechartsPriceChart_default, { data, height, width, options }, void 0, !1, {
        fileName: "app/components/charts/ChartWrapper.jsx",
        lineNumber: 29,
        columnNumber: 16
      }, this);
  }
})() }, void 0, !1, {
  fileName: "app/components/charts/ChartWrapper.jsx",
  lineNumber: 34,
  columnNumber: 5
}, this), ChartWrapper_default = (0, import_react7.memo)(ChartWrapper);

// app/routes/app.company.$symbol.summary.jsx
var import_jsx_dev_runtime8 = require("react/jsx-dev-runtime");
async function loader({ params }) {
  let summary = companySummary[params.symbol] || null;
  if (!summary)
    throw new Error(`No data found for company: ${params.symbol}`);
  return summary;
}
function CompanySummary() {
  let { symbol } = (0, import_react8.useParams)(), data = (0, import_react8.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "company-summary", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react8.Link, { to: "..", className: "back-link", children: "\u2190 Back " }, void 0, !1, {
      fileName: "app/routes/app.company.$symbol.summary.jsx",
      lineNumber: 19,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("section", { className: "summary-section", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("h2", { children: [
        "About ",
        symbol
      ] }, void 0, !0, {
        fileName: "app/routes/app.company.$symbol.summary.jsx",
        lineNumber: 23,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("p", { className: "description", children: data.description }, void 0, !1, {
        fileName: "app/routes/app.company.$symbol.summary.jsx",
        lineNumber: 24,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/app.company.$symbol.summary.jsx",
      lineNumber: 22,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("section", { className: "summary-section", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("h2", { children: "Key Metrics" }, void 0, !1, {
        fileName: "app/routes/app.company.$symbol.summary.jsx",
        lineNumber: 29,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "metrics-grid", children: Object.entries(data.keyMetrics).map(([key, value]) => /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "metric-item", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("span", { className: "metric-label", children: key }, void 0, !1, {
          fileName: "app/routes/app.company.$symbol.summary.jsx",
          lineNumber: 33,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("span", { className: "metric-value", children: value }, void 0, !1, {
          fileName: "app/routes/app.company.$symbol.summary.jsx",
          lineNumber: 34,
          columnNumber: 15
        }, this)
      ] }, key, !0, {
        fileName: "app/routes/app.company.$symbol.summary.jsx",
        lineNumber: 32,
        columnNumber: 13
      }, this)) }, void 0, !1, {
        fileName: "app/routes/app.company.$symbol.summary.jsx",
        lineNumber: 30,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/app.company.$symbol.summary.jsx",
      lineNumber: 28,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("section", { className: "summary-section", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("h2", { children: "Financial Ratios" }, void 0, !1, {
        fileName: "app/routes/app.company.$symbol.summary.jsx",
        lineNumber: 42,
        columnNumber: 9
      }, this),
      data.financialRatios.map((group) => /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "ratio-group", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("h3", { children: group.category }, void 0, !1, {
          fileName: "app/routes/app.company.$symbol.summary.jsx",
          lineNumber: 45,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("table", { className: "ratio-table", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("tbody", { children: group.ratios.map((ratio) => /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("tr", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("td", { children: ratio.name }, void 0, !1, {
            fileName: "app/routes/app.company.$symbol.summary.jsx",
            lineNumber: 50,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("td", { children: ratio.value }, void 0, !1, {
            fileName: "app/routes/app.company.$symbol.summary.jsx",
            lineNumber: 51,
            columnNumber: 21
          }, this)
        ] }, ratio.name, !0, {
          fileName: "app/routes/app.company.$symbol.summary.jsx",
          lineNumber: 49,
          columnNumber: 19
        }, this)) }, void 0, !1, {
          fileName: "app/routes/app.company.$symbol.summary.jsx",
          lineNumber: 47,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/routes/app.company.$symbol.summary.jsx",
          lineNumber: 46,
          columnNumber: 13
        }, this)
      ] }, group.category, !0, {
        fileName: "app/routes/app.company.$symbol.summary.jsx",
        lineNumber: 44,
        columnNumber: 11
      }, this))
    ] }, void 0, !0, {
      fileName: "app/routes/app.company.$symbol.summary.jsx",
      lineNumber: 41,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("section", { className: "summary-section", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("h2", { children: "Historical Prices" }, void 0, !1, {
        fileName: "app/routes/app.company.$symbol.summary.jsx",
        lineNumber: 62,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
        ChartWrapper_default,
        {
          data: data.historicalPrices,
          type: CHART_TYPES.RECHARTS,
          height: 400,
          options: {
            tooltip: !0,
            grid: !0
          }
        },
        void 0,
        !1,
        {
          fileName: "app/routes/app.company.$symbol.summary.jsx",
          lineNumber: 63,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/routes/app.company.$symbol.summary.jsx",
      lineNumber: 61,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/app.company.$symbol.summary.jsx",
    lineNumber: 18,
    columnNumber: 5
  }, this);
}

// app/routes/app.company.$symbol.news.jsx
var app_company_symbol_news_exports = {};
__export(app_company_symbol_news_exports, {
  default: () => CompanyNews,
  loader: () => loader2
});
var import_react9 = require("@remix-run/react"), import_jsx_dev_runtime9 = require("react/jsx-dev-runtime");
async function loader2({ params }) {
  console.log("Loader params:", params);
  let API_URL = process.env.API_URL || "http://localhost:8000";
  try {
    return await (await fetch(`${API_URL}/api/company/${params.symbol}/news`)).json();
  } catch (error) {
    return console.error("Error fetching news:", error), {
      news: [],
      error: "Failed to fetch news"
    };
  }
}
function CompanyNews() {
  let { symbol } = (0, import_react9.useParams)(), { news } = (0, import_react9.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "news-container", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_react9.Link, { to: "..", className: "back-link", children: "\u2190 Back " }, void 0, !1, {
      fileName: "app/routes/app.company.$symbol.news.jsx",
      lineNumber: 26,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "news-list", children: news?.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "news-item", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("h3", { children: item.title }, void 0, !1, {
        fileName: "app/routes/app.company.$symbol.news.jsx",
        lineNumber: 31,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("p", { className: "news-meta", children: [
        item.date,
        " \u2022 ",
        item.source
      ] }, void 0, !0, {
        fileName: "app/routes/app.company.$symbol.news.jsx",
        lineNumber: 32,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("p", { className: "news-summary", children: item.summary }, void 0, !1, {
        fileName: "app/routes/app.company.$symbol.news.jsx",
        lineNumber: 35,
        columnNumber: 13
      }, this)
    ] }, item.id, !0, {
      fileName: "app/routes/app.company.$symbol.news.jsx",
      lineNumber: 30,
      columnNumber: 11
    }, this)) }, void 0, !1, {
      fileName: "app/routes/app.company.$symbol.news.jsx",
      lineNumber: 28,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/app.company.$symbol.news.jsx",
    lineNumber: 25,
    columnNumber: 5
  }, this);
}

// app/routes/_layout.forgot-password.jsx
var layout_forgot_password_exports = {};
__export(layout_forgot_password_exports, {
  default: () => ForgotPassword,
  links: () => links2
});
var import_react10 = require("react"), import_react11 = require("@remix-run/react");
var import_jsx_dev_runtime10 = require("react/jsx-dev-runtime");
function links2() {
  return [{ rel: "stylesheet", href: "/styles/app.css" }];
}
function ForgotPassword() {
  let [email, setEmail] = (0, import_react10.useState)(""), [message, setMessage] = (0, import_react10.useState)(""), [error, setError] = (0, import_react10.useState)(""), [loading, setLoading] = (0, import_react10.useState)(!1), { resetPassword } = useAuth(), navigate = (0, import_react11.useNavigate)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "auth-card", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("h2", { className: "auth-title", children: "Reset Password" }, void 0, !1, {
      fileName: "app/routes/_layout.forgot-password.jsx",
      lineNumber: 46,
      columnNumber: 7
    }, this),
    error && /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "error-message", children: error }, void 0, !1, {
      fileName: "app/routes/_layout.forgot-password.jsx",
      lineNumber: 48,
      columnNumber: 17
    }, this),
    message && /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { style: { color: "#4caf50", marginBottom: "15px", textAlign: "center" }, children: message }, void 0, !1, {
      fileName: "app/routes/_layout.forgot-password.jsx",
      lineNumber: 49,
      columnNumber: 19
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("form", { onSubmit: async (e) => {
      e.preventDefault(), setMessage(""), setError(""), setLoading(!0);
      try {
        if (!email)
          throw new Error("Please enter your email");
        await resetPassword(email), setMessage("Check your email for password reset instructions"), setTimeout(() => {
          navigate("/login");
        }, 5e3);
      } catch (err) {
        setError(err.message || "Failed to reset password");
      } finally {
        setLoading(!1);
      }
    }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "form-group", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("label", { className: "form-label", htmlFor: "email", children: "Email" }, void 0, !1, {
          fileName: "app/routes/_layout.forgot-password.jsx",
          lineNumber: 53,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
          "input",
          {
            id: "email",
            type: "email",
            className: "form-input",
            value: email,
            onChange: (e) => setEmail(e.target.value),
            placeholder: "Enter your email",
            required: !0
          },
          void 0,
          !1,
          {
            fileName: "app/routes/_layout.forgot-password.jsx",
            lineNumber: 54,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/_layout.forgot-password.jsx",
        lineNumber: 52,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
        "button",
        {
          type: "submit",
          className: "auth-button",
          disabled: loading,
          children: loading ? "Sending..." : "Reset Password"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/_layout.forgot-password.jsx",
          lineNumber: 65,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/routes/_layout.forgot-password.jsx",
      lineNumber: 51,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { style: { marginTop: "20px", textAlign: "center", fontSize: "0.9rem" }, children: [
      "Remember your password?",
      " ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_react11.Link, { to: "/login", style: { color: "#4a90e2", textDecoration: "none", fontWeight: "500" }, children: "Log In" }, void 0, !1, {
        fileName: "app/routes/_layout.forgot-password.jsx",
        lineNumber: 76,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_layout.forgot-password.jsx",
      lineNumber: 74,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_layout.forgot-password.jsx",
    lineNumber: 45,
    columnNumber: 5
  }, this);
}

// app/routes/_layout.signup.jsx
var layout_signup_exports = {};
__export(layout_signup_exports, {
  default: () => Signup,
  links: () => links3
});
var import_react12 = require("react"), import_react13 = require("@remix-run/react");
var import_jsx_dev_runtime11 = require("react/jsx-dev-runtime");
function links3() {
  return [{ rel: "stylesheet", href: "/styles/app.css" }];
}
function Signup() {
  let [name, setName] = (0, import_react12.useState)(""), [email, setEmail] = (0, import_react12.useState)(""), [password, setPassword] = (0, import_react12.useState)(""), [confirmPassword, setConfirmPassword] = (0, import_react12.useState)(""), [error, setError] = (0, import_react12.useState)(""), [loading, setLoading] = (0, import_react12.useState)(!1), navigate = (0, import_react13.useNavigate)(), { signup } = useAuth();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "auth-card", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("h2", { className: "auth-title", children: "Sign Up" }, void 0, !1, {
      fileName: "app/routes/_layout.signup.jsx",
      lineNumber: 50,
      columnNumber: 7
    }, this),
    error && /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "error-message", children: error }, void 0, !1, {
      fileName: "app/routes/_layout.signup.jsx",
      lineNumber: 52,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("form", { onSubmit: async (e) => {
      e.preventDefault(), setError(""), setLoading(!0);
      try {
        if (!name || !email || !password || !confirmPassword)
          throw new Error("Please fill in all fields");
        if (password !== confirmPassword)
          throw new Error("Passwords do not match");
        if (password.length < 6)
          throw new Error("Password must be at least 6 characters");
        await signup(name, email, password), navigate("/app");
      } catch (err) {
        setError(err.message || "Failed to create an account");
      } finally {
        setLoading(!1);
      }
    }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "form-group", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("label", { className: "form-label", htmlFor: "name", children: "Name" }, void 0, !1, {
          fileName: "app/routes/_layout.signup.jsx",
          lineNumber: 56,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
          "input",
          {
            id: "name",
            type: "text",
            className: "form-input",
            value: name,
            onChange: (e) => setName(e.target.value),
            placeholder: "Enter your name",
            required: !0
          },
          void 0,
          !1,
          {
            fileName: "app/routes/_layout.signup.jsx",
            lineNumber: 57,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/_layout.signup.jsx",
        lineNumber: 55,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "form-group", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("label", { className: "form-label", htmlFor: "email", children: "Email" }, void 0, !1, {
          fileName: "app/routes/_layout.signup.jsx",
          lineNumber: 69,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
          "input",
          {
            id: "email",
            type: "email",
            className: "form-input",
            value: email,
            onChange: (e) => setEmail(e.target.value),
            placeholder: "Enter your email",
            required: !0
          },
          void 0,
          !1,
          {
            fileName: "app/routes/_layout.signup.jsx",
            lineNumber: 70,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/_layout.signup.jsx",
        lineNumber: 68,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "form-group", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("label", { className: "form-label", htmlFor: "password", children: "Password" }, void 0, !1, {
          fileName: "app/routes/_layout.signup.jsx",
          lineNumber: 82,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
          "input",
          {
            id: "password",
            type: "password",
            className: "form-input",
            value: password,
            onChange: (e) => setPassword(e.target.value),
            placeholder: "Create a password",
            required: !0
          },
          void 0,
          !1,
          {
            fileName: "app/routes/_layout.signup.jsx",
            lineNumber: 83,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/_layout.signup.jsx",
        lineNumber: 81,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "form-group", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("label", { className: "form-label", htmlFor: "confirmPassword", children: "Confirm Password" }, void 0, !1, {
          fileName: "app/routes/_layout.signup.jsx",
          lineNumber: 95,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
          "input",
          {
            id: "confirmPassword",
            type: "password",
            className: "form-input",
            value: confirmPassword,
            onChange: (e) => setConfirmPassword(e.target.value),
            placeholder: "Confirm your password",
            required: !0
          },
          void 0,
          !1,
          {
            fileName: "app/routes/_layout.signup.jsx",
            lineNumber: 96,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/_layout.signup.jsx",
        lineNumber: 94,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
        "button",
        {
          type: "submit",
          className: "auth-button",
          disabled: loading,
          children: loading ? "Creating Account..." : "Sign Up"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/_layout.signup.jsx",
          lineNumber: 107,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/routes/_layout.signup.jsx",
      lineNumber: 54,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { style: { marginTop: "20px", textAlign: "center", fontSize: "0.9rem" }, children: [
      "Already have an account?",
      " ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_react13.Link, { to: "/login", style: { color: "#4a90e2", textDecoration: "none", fontWeight: "500" }, children: "Log In" }, void 0, !1, {
        fileName: "app/routes/_layout.signup.jsx",
        lineNumber: 118,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_layout.signup.jsx",
      lineNumber: 116,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_layout.signup.jsx",
    lineNumber: 49,
    columnNumber: 5
  }, this);
}

// app/routes/_layout.login.jsx
var layout_login_exports = {};
__export(layout_login_exports, {
  default: () => Login,
  links: () => links4
});
var import_react14 = require("react"), import_react15 = require("@remix-run/react");
var import_jsx_dev_runtime12 = require("react/jsx-dev-runtime");
function links4() {
  return [{ rel: "stylesheet", href: "/styles/app.css" }];
}
function Login() {
  let [email, setEmail] = (0, import_react14.useState)(""), [password, setPassword] = (0, import_react14.useState)(""), [error, setError] = (0, import_react14.useState)(""), [loading, setLoading] = (0, import_react14.useState)(!1), navigate = (0, import_react15.useNavigate)(), { login } = useAuth();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "auth-card", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("h2", { className: "auth-title", children: "Log In" }, void 0, !1, {
      fileName: "app/routes/_layout.login.jsx",
      lineNumber: 40,
      columnNumber: 7
    }, this),
    error && /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "error-message", children: error }, void 0, !1, {
      fileName: "app/routes/_layout.login.jsx",
      lineNumber: 42,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("form", { onSubmit: async (e) => {
      e.preventDefault(), setError(""), setLoading(!0);
      try {
        if (!email || !password)
          throw new Error("Please fill in all fields");
        await login(email, password), navigate("/app");
      } catch (err) {
        setError(err.message || "Failed to log in");
      } finally {
        setLoading(!1);
      }
    }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "form-group", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("label", { className: "form-label", htmlFor: "email", children: "Email" }, void 0, !1, {
          fileName: "app/routes/_layout.login.jsx",
          lineNumber: 46,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
          "input",
          {
            id: "email",
            type: "email",
            className: "form-input",
            value: email,
            onChange: (e) => setEmail(e.target.value),
            placeholder: "Enter your email",
            required: !0
          },
          void 0,
          !1,
          {
            fileName: "app/routes/_layout.login.jsx",
            lineNumber: 47,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/_layout.login.jsx",
        lineNumber: 45,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "form-group", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("label", { className: "form-label", htmlFor: "password", children: "Password" }, void 0, !1, {
          fileName: "app/routes/_layout.login.jsx",
          lineNumber: 59,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
          "input",
          {
            id: "password",
            type: "password",
            className: "form-input",
            value: password,
            onChange: (e) => setPassword(e.target.value),
            placeholder: "Enter your password",
            required: !0
          },
          void 0,
          !1,
          {
            fileName: "app/routes/_layout.login.jsx",
            lineNumber: 60,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/_layout.login.jsx",
        lineNumber: 58,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
        "button",
        {
          type: "submit",
          className: "auth-button",
          disabled: loading,
          children: loading ? "Logging in..." : "Log In"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/_layout.login.jsx",
          lineNumber: 71,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/routes/_layout.login.jsx",
      lineNumber: 44,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { style: { marginTop: "20px", textAlign: "center" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_react15.Link, { to: "/forgot-password", style: { color: "#4a90e2", textDecoration: "none", fontSize: "0.9rem" }, children: "Forgot Password?" }, void 0, !1, {
      fileName: "app/routes/_layout.login.jsx",
      lineNumber: 81,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/_layout.login.jsx",
      lineNumber: 80,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { style: { marginTop: "20px", textAlign: "center", fontSize: "0.9rem" }, children: [
      "Don't have an account?",
      " ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_react15.Link, { to: "/signup", style: { color: "#4a90e2", textDecoration: "none", fontWeight: "500" }, children: "Sign Up" }, void 0, !1, {
        fileName: "app/routes/_layout.login.jsx",
        lineNumber: 88,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_layout.login.jsx",
      lineNumber: 86,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_layout.login.jsx",
    lineNumber: 39,
    columnNumber: 5
  }, this);
}

// app/routes/app.profile.jsx
var app_profile_exports = {};
__export(app_profile_exports, {
  default: () => Profile
});
var import_react16 = require("react"), import_react17 = require("@remix-run/react");
var import_jsx_dev_runtime13 = require("react/jsx-dev-runtime");
function Profile() {
  let { user, updateProfile, updatePassword, logout } = useAuth(), navigate = (0, import_react17.useNavigate)(), [name, setName] = (0, import_react16.useState)(user?.name || ""), [email, setEmail] = (0, import_react16.useState)(user?.email || ""), [currentPassword, setCurrentPassword] = (0, import_react16.useState)(""), [newPassword, setNewPassword] = (0, import_react16.useState)(""), [confirmPassword, setConfirmPassword] = (0, import_react16.useState)(""), [profileMessage, setProfileMessage] = (0, import_react16.useState)(""), [profileError, setProfileError] = (0, import_react16.useState)(""), [passwordMessage, setPasswordMessage] = (0, import_react16.useState)(""), [passwordError, setPasswordError] = (0, import_react16.useState)(""), [loadingProfile, setLoadingProfile] = (0, import_react16.useState)(!1), [loadingPassword, setLoadingPassword] = (0, import_react16.useState)(!1);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "profile-container", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("h1", { children: "Profile Settings" }, void 0, !1, {
      fileName: "app/routes/app.profile.jsx",
      lineNumber: 94,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "profile-section", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("h2", { children: "Update Profile" }, void 0, !1, {
        fileName: "app/routes/app.profile.jsx",
        lineNumber: 97,
        columnNumber: 9
      }, this),
      profileMessage && /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "success-message", children: profileMessage }, void 0, !1, {
        fileName: "app/routes/app.profile.jsx",
        lineNumber: 98,
        columnNumber: 28
      }, this),
      profileError && /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "error-message", children: profileError }, void 0, !1, {
        fileName: "app/routes/app.profile.jsx",
        lineNumber: 99,
        columnNumber: 26
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("form", { onSubmit: async (e) => {
        e.preventDefault(), setProfileMessage(""), setProfileError(""), setLoadingProfile(!0);
        try {
          if (!name || !email)
            throw new Error("Name and email are required");
          await updateProfile(name, email), setProfileMessage("Profile updated successfully");
        } catch (err) {
          setProfileError(err.message || "Failed to update profile");
        } finally {
          setLoadingProfile(!1);
        }
      }, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "form-group", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("label", { htmlFor: "name", children: "Name" }, void 0, !1, {
            fileName: "app/routes/app.profile.jsx",
            lineNumber: 103,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
            "input",
            {
              id: "name",
              type: "text",
              value: name,
              onChange: (e) => setName(e.target.value),
              placeholder: "Your name"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/app.profile.jsx",
              lineNumber: 104,
              columnNumber: 13
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/app.profile.jsx",
          lineNumber: 102,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "form-group", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("label", { htmlFor: "email", children: "Email" }, void 0, !1, {
            fileName: "app/routes/app.profile.jsx",
            lineNumber: 114,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
            "input",
            {
              id: "email",
              type: "email",
              value: email,
              onChange: (e) => setEmail(e.target.value),
              placeholder: "Your email",
              disabled: !0
            },
            void 0,
            !1,
            {
              fileName: "app/routes/app.profile.jsx",
              lineNumber: 115,
              columnNumber: 13
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/app.profile.jsx",
          lineNumber: 113,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
          "button",
          {
            type: "submit",
            className: "update-button",
            disabled: loadingProfile,
            children: loadingProfile ? "Updating..." : "Update Profile"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/app.profile.jsx",
            lineNumber: 125,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/app.profile.jsx",
        lineNumber: 101,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/app.profile.jsx",
      lineNumber: 96,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "profile-section", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("h2", { children: "Change Password" }, void 0, !1, {
        fileName: "app/routes/app.profile.jsx",
        lineNumber: 136,
        columnNumber: 9
      }, this),
      passwordMessage && /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "success-message", children: passwordMessage }, void 0, !1, {
        fileName: "app/routes/app.profile.jsx",
        lineNumber: 137,
        columnNumber: 29
      }, this),
      passwordError && /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "error-message", children: passwordError }, void 0, !1, {
        fileName: "app/routes/app.profile.jsx",
        lineNumber: 138,
        columnNumber: 27
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("form", { onSubmit: async (e) => {
        e.preventDefault(), setPasswordMessage(""), setPasswordError(""), setLoadingPassword(!0);
        try {
          if (!currentPassword || !newPassword || !confirmPassword)
            throw new Error("All password fields are required");
          if (newPassword !== confirmPassword)
            throw new Error("New passwords do not match");
          if (newPassword.length < 6)
            throw new Error("Password must be at least 6 characters");
          await updatePassword(currentPassword, newPassword), setPasswordMessage("Password updated successfully"), setCurrentPassword(""), setNewPassword(""), setConfirmPassword("");
        } catch (err) {
          setPasswordError(err.message || "Failed to update password");
        } finally {
          setLoadingPassword(!1);
        }
      }, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "form-group", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("label", { htmlFor: "currentPassword", children: "Current Password" }, void 0, !1, {
            fileName: "app/routes/app.profile.jsx",
            lineNumber: 142,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
            "input",
            {
              id: "currentPassword",
              type: "password",
              value: currentPassword,
              onChange: (e) => setCurrentPassword(e.target.value),
              placeholder: "Current password"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/app.profile.jsx",
              lineNumber: 143,
              columnNumber: 13
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/app.profile.jsx",
          lineNumber: 141,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "form-group", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("label", { htmlFor: "newPassword", children: "New Password" }, void 0, !1, {
            fileName: "app/routes/app.profile.jsx",
            lineNumber: 153,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
            "input",
            {
              id: "newPassword",
              type: "password",
              value: newPassword,
              onChange: (e) => setNewPassword(e.target.value),
              placeholder: "New password"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/app.profile.jsx",
              lineNumber: 154,
              columnNumber: 13
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/app.profile.jsx",
          lineNumber: 152,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "form-group", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("label", { htmlFor: "confirmPassword", children: "Confirm New Password" }, void 0, !1, {
            fileName: "app/routes/app.profile.jsx",
            lineNumber: 164,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
            "input",
            {
              id: "confirmPassword",
              type: "password",
              value: confirmPassword,
              onChange: (e) => setConfirmPassword(e.target.value),
              placeholder: "Confirm new password"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/app.profile.jsx",
              lineNumber: 165,
              columnNumber: 13
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/app.profile.jsx",
          lineNumber: 163,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
          "button",
          {
            type: "submit",
            className: "update-button",
            disabled: loadingPassword,
            children: loadingPassword ? "Updating..." : "Change Password"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/app.profile.jsx",
            lineNumber: 174,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/app.profile.jsx",
        lineNumber: 140,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/app.profile.jsx",
      lineNumber: 135,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "profile-section danger-zone", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("h2", { children: "Danger Zone" }, void 0, !1, {
        fileName: "app/routes/app.profile.jsx",
        lineNumber: 185,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("p", { children: "Once you delete your account, there is no going back. Please be certain." }, void 0, !1, {
        fileName: "app/routes/app.profile.jsx",
        lineNumber: 186,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
        "button",
        {
          onClick: async () => {
            if (window.confirm("Are you sure you want to delete your account? This action cannot be undone."))
              try {
                await logout(), navigate("/login");
              } catch (err) {
                alert("Failed to delete account: " + (err.message || "Unknown error"));
              }
          },
          className: "delete-account-button",
          children: "Delete Account"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/app.profile.jsx",
          lineNumber: 187,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/routes/app.profile.jsx",
      lineNumber: 184,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/app.profile.jsx",
    lineNumber: 93,
    columnNumber: 5
  }, this);
}

// app/routes/app._index.jsx
var app_index_exports = {};
__export(app_index_exports, {
  default: () => Index,
  links: () => links5,
  loader: () => loader3
});
var import_react19 = require("react");

// app/data/companies.js
var companies = [
  {
    id: "543",
    symbol: "AAPL",
    title: "Anant Raj Ltd",
    marketCap: "\u20B92,500 Cr",
    lastPrice: "\u20B9145.30",
    unreadNews: "3",
    summary: "Leading real estate developer in Delhi NCR with focus on residential and commercial projects"
  },
  {
    id: "1499",
    title: "Asian Paints Ltd",
    marketCap: "\u20B9380,000 Cr",
    lastPrice: "\u20B93,245.65",
    unreadNews: "5",
    summary: "India's largest paint manufacturer with strong presence in decorative and industrial segments"
  },
  {
    id: "TECH01",
    title: "TechCorp Solutions",
    marketCap: "\u20B915,600 Cr",
    lastPrice: "\u20B9876.40",
    unreadNews: "2",
    summary: "Leading IT services provider specializing in cloud computing and digital transformation"
  },
  {
    id: "BIO02",
    title: "BioInnovate Research",
    marketCap: "\u20B98,900 Cr",
    lastPrice: "\u20B9567.80",
    unreadNews: "0",
    summary: "Biotechnology company focused on novel drug development and research"
  }
];

// app/routes/app._index.jsx
var import_react20 = require("@remix-run/react");

// app/components/CompanyCard.jsx
var import_react18 = require("@remix-run/react"), import_jsx_dev_runtime14 = require("react/jsx-dev-runtime");
function CompanyCard({ company, onDelete }) {
  let navigate = (0, import_react18.useNavigate)(), handleNewsClick = (e) => {
    e.preventDefault(), navigate(`/app/company/${company.symbol}/news`);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "card", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "card-header", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "title-row", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("span", { className: "company-name", children: company.title }, void 0, !1, {
        fileName: "app/components/CompanyCard.jsx",
        lineNumber: 16,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
        "button",
        {
          onClick: () => onDelete(company.id),
          className: "delete-btn",
          children: "\xD7"
        },
        void 0,
        !1,
        {
          fileName: "app/components/CompanyCard.jsx",
          lineNumber: 17,
          columnNumber: 11
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/CompanyCard.jsx",
      lineNumber: 15,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/CompanyCard.jsx",
      lineNumber: 14,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "card-body", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "data-row", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("span", { children: "Market Cap" }, void 0, !1, {
          fileName: "app/components/CompanyCard.jsx",
          lineNumber: 29,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("span", { children: company.marketCap }, void 0, !1, {
          fileName: "app/components/CompanyCard.jsx",
          lineNumber: 30,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/CompanyCard.jsx",
        lineNumber: 28,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "data-row", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("span", { children: "LTP" }, void 0, !1, {
          fileName: "app/components/CompanyCard.jsx",
          lineNumber: 33,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("span", { children: company.lastPrice }, void 0, !1, {
          fileName: "app/components/CompanyCard.jsx",
          lineNumber: 34,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/CompanyCard.jsx",
        lineNumber: 32,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/CompanyCard.jsx",
      lineNumber: 27,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "card-footer", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { children: company.unreadNews !== "0" && /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
        "button",
        {
          className: "news-count",
          onClick: handleNewsClick,
          "aria-label": `View ${company.unreadNews} unread news for ${company.title}`,
          children: company.unreadNews
        },
        void 0,
        !1,
        {
          fileName: "app/components/CompanyCard.jsx",
          lineNumber: 42,
          columnNumber: 13
        },
        this
      ) }, void 0, !1, {
        fileName: "app/components/CompanyCard.jsx",
        lineNumber: 40,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
        import_react18.Link,
        {
          to: `/app/company/${company.symbol}/summary`,
          className: "details-link",
          preventScrollReset: !0,
          children: "View Details \u2192"
        },
        void 0,
        !1,
        {
          fileName: "app/components/CompanyCard.jsx",
          lineNumber: 51,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/CompanyCard.jsx",
      lineNumber: 39,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/CompanyCard.jsx",
    lineNumber: 12,
    columnNumber: 5
  }, this);
}

// app/routes/app._index.jsx
var import_jsx_dev_runtime15 = require("react/jsx-dev-runtime");
function links5() {
  return [{ rel: "stylesheet", href: "/styles/app.css" }];
}
async function loader3() {
  try {
    let response = await fetch("https://pdf-processing-service.vercel.app/summaries");
    if (!response.ok)
      throw new Error("Failed to fetch news");
    return { news: await response.json() };
  } catch (error) {
    return console.error("Error fetching news:", error), { news: [] };
  }
}
function Index() {
  let [activeTab, setActiveTab] = (0, import_react19.useState)("COMPANIES"), { news } = (0, import_react20.useLoaderData)(), navigate = (0, import_react20.useNavigate)(), handleDelete = (code) => {
    console.log(`Deleting company with code: ${code}`);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "tabs-container", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
        "div",
        {
          className: `tab ${activeTab === "COMPANIES" ? "active" : ""}`,
          onClick: () => setActiveTab("COMPANIES"),
          children: "COMPANIES"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/app._index.jsx",
          lineNumber: 55,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
        "div",
        {
          className: `tab ${activeTab === "NEWS" ? "active" : ""}`,
          onClick: () => setActiveTab("NEWS"),
          children: "NEWS"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/app._index.jsx",
          lineNumber: 60,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/routes/app._index.jsx",
      lineNumber: 54,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("main", { children: [
      activeTab === "COMPANIES" && /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "company-list", children: companies.map(
        (company) => /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
          CompanyCard,
          {
            company,
            onDelete: handleDelete
          },
          company.id,
          !1,
          {
            fileName: "app/routes/app._index.jsx",
            lineNumber: 71,
            columnNumber: 11
          },
          this
        )
      ) }, void 0, !1, {
        fileName: "app/routes/app._index.jsx",
        lineNumber: 69,
        columnNumber: 9
      }, this),
      activeTab === "NEWS" && /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "news-container", children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "news-list", children: [
        news.map(
          (item) => /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "news-card", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("h3", { className: "news-title", children: item.title }, void 0, !1, {
              fileName: "app/routes/app._index.jsx",
              lineNumber: 85,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("p", { className: "news-date", children: new Date(item.date).toLocaleDateString() }, void 0, !1, {
              fileName: "app/routes/app._index.jsx",
              lineNumber: 86,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("p", { className: "news-summary", children: item.summary }, void 0, !1, {
              fileName: "app/routes/app._index.jsx",
              lineNumber: 87,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "news-footer", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("span", { className: "news-company", children: item.companyName }, void 0, !1, {
                fileName: "app/routes/app._index.jsx",
                lineNumber: 89,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("a", { href: item.url, target: "_blank", rel: "noopener noreferrer", className: "read-more", children: "Read More \u2192" }, void 0, !1, {
                fileName: "app/routes/app._index.jsx",
                lineNumber: 90,
                columnNumber: 21
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/app._index.jsx",
              lineNumber: 88,
              columnNumber: 19
            }, this)
          ] }, item.id, !0, {
            fileName: "app/routes/app._index.jsx",
            lineNumber: 84,
            columnNumber: 13
          }, this)
        ),
        news.length === 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "no-news", children: "No news articles found" }, void 0, !1, {
          fileName: "app/routes/app._index.jsx",
          lineNumber: 97,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/app._index.jsx",
        lineNumber: 82,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/app._index.jsx",
        lineNumber: 81,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/app._index.jsx",
      lineNumber: 67,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/app._index.jsx",
    lineNumber: 53,
    columnNumber: 5
  }, this);
}

// app/routes/_layout.jsx
var layout_exports = {};
__export(layout_exports, {
  default: () => PublicLayout,
  links: () => links6
});
var import_react21 = require("@remix-run/react"), import_react22 = require("react");
var import_jsx_dev_runtime16 = require("react/jsx-dev-runtime");
function links6() {
  return [{ rel: "stylesheet", href: "/styles/app.css" }];
}
function PublicLayout() {
  let location = (0, import_react21.useLocation)(), { isAuthenticated } = useAuth(), navigate = (0, import_react21.useNavigate)(), shouldShowHeader = ![
    "/login",
    "/signup",
    "/forgot-password"
  ].includes(location.pathname);
  return (0, import_react22.useEffect)(() => {
    isAuthenticated && (location.pathname === "/login" || location.pathname === "/signup") && navigate("/app");
  }, [isAuthenticated, navigate, location.pathname]), /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "public-container", children: [
    shouldShowHeader && /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("header", { className: "public-header", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "left-section", children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "logo", onClick: () => navigate("/"), children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("span", { style: { marginRight: "8px" }, children: "\u{1F52E}" }, void 0, !1, {
          fileName: "app/routes/_layout.jsx",
          lineNumber: 36,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("span", { children: "1stock" }, void 0, !1, {
          fileName: "app/routes/_layout.jsx",
          lineNumber: 37,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_layout.jsx",
        lineNumber: 35,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/_layout.jsx",
        lineNumber: 34,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "right-section", children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("button", { className: "login-button", onClick: () => navigate("/login"), children: "Login" }, void 0, !1, {
        fileName: "app/routes/_layout.jsx",
        lineNumber: 41,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/_layout.jsx",
        lineNumber: 40,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_layout.jsx",
      lineNumber: 33,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("main", { className: "public-content", children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_react21.Outlet, {}, void 0, !1, {
      fileName: "app/routes/_layout.jsx",
      lineNumber: 47,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/_layout.jsx",
      lineNumber: 46,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("footer", { className: "public-footer", children: [
      "\xA9 ",
      (/* @__PURE__ */ new Date()).getFullYear(),
      " 1stock. All rights reserved."
    ] }, void 0, !0, {
      fileName: "app/routes/_layout.jsx",
      lineNumber: 50,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_layout.jsx",
    lineNumber: 31,
    columnNumber: 5
  }, this);
}

// app/routes/_index.jsx
var index_exports = {};
__export(index_exports, {
  default: () => Index2
});
var import_node2 = require("@remix-run/node"), import_react23 = require("react"), import_react24 = require("@remix-run/react");
var import_jsx_dev_runtime17 = require("react/jsx-dev-runtime");
function Index2() {
  let { isAuthenticated } = useAuth(), navigate = (0, import_react24.useNavigate)();
  return (0, import_react23.useEffect)(() => {
    navigate(isAuthenticated ? "/app" : "/login");
  }, [isAuthenticated, navigate]), /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { style: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    flexDirection: "column",
    gap: "1rem"
  }, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("h1", { children: "1stock" }, void 0, !1, {
      fileName: "app/routes/_index.jsx",
      lineNumber: 28,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("p", { children: "Redirecting you to the appropriate page..." }, void 0, !1, {
      fileName: "app/routes/_index.jsx",
      lineNumber: 29,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_index.jsx",
    lineNumber: 20,
    columnNumber: 5
  }, this);
}

// app/routes/app.jsx
var app_exports = {};
__export(app_exports, {
  default: () => AppLayout,
  links: () => links7
});
var import_react25 = require("@remix-run/react");
var import_react26 = require("react"), import_jsx_dev_runtime18 = require("react/jsx-dev-runtime");
function links7() {
  return [{ rel: "stylesheet", href: "/styles/app.css" }];
}
function AppLayout() {
  let { isAuthenticated, user, logout } = useAuth(), navigate = (0, import_react25.useNavigate)(), location = (0, import_react25.useLocation)(), [showSignOut, setShowSignOut] = (0, import_react26.useState)(!1), [showMenu, setShowMenu] = (0, import_react26.useState)(!1);
  (0, import_react26.useEffect)(() => {
    isAuthenticated || navigate("/login");
  }, [isAuthenticated, navigate]), (0, import_react26.useEffect)(() => {
    let handleClickOutside = (event) => {
      showSignOut && !event.target.closest(".profile-section") && setShowSignOut(!1), showMenu && !event.target.closest(".side-menu") && !event.target.closest(".hamburger-button") && setShowMenu(!1);
    };
    return document.addEventListener("mousedown", handleClickOutside), () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showSignOut, showMenu]), (0, import_react26.useEffect)(() => {
    setShowSignOut(!1), setShowMenu(!1);
  }, [location.pathname]);
  let toggleSideMenu = () => {
    setShowMenu(!showMenu);
  }, handleSignOut = () => {
    logout(), setShowSignOut(!1), setShowMenu(!1), navigate("/login");
  };
  return isAuthenticated ? /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "container", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("header", { className: "header", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "left-section", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "menu-icon", onClick: toggleSideMenu, children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("span", { children: "\u2630" }, void 0, !1, {
          fileName: "app/routes/app.jsx",
          lineNumber: 66,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/routes/app.jsx",
          lineNumber: 65,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "logo", onClick: () => navigate("/app"), children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("span", { style: { marginRight: "8px" }, children: "\u{1F52E}" }, void 0, !1, {
            fileName: "app/routes/app.jsx",
            lineNumber: 69,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("span", { children: "1stock" }, void 0, !1, {
            fileName: "app/routes/app.jsx",
            lineNumber: 70,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/app.jsx",
          lineNumber: 68,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/app.jsx",
        lineNumber: 64,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "profile-section", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
          "div",
          {
            onClick: () => setShowSignOut(!showSignOut),
            style: {
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
              padding: "5px 10px",
              borderRadius: "4px"
            },
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "profile-avatar-small", children: user?.name ? user.name.charAt(0).toUpperCase() : "U" }, void 0, !1, {
                fileName: "app/routes/app.jsx",
                lineNumber: 84,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("span", { style: { marginLeft: "8px", color: "white" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", fill: "currentColor", viewBox: "0 0 16 16", children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("path", { d: "M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" }, void 0, !1, {
                fileName: "app/routes/app.jsx",
                lineNumber: 89,
                columnNumber: 17
              }, this) }, void 0, !1, {
                fileName: "app/routes/app.jsx",
                lineNumber: 88,
                columnNumber: 15
              }, this) }, void 0, !1, {
                fileName: "app/routes/app.jsx",
                lineNumber: 87,
                columnNumber: 13
              }, this)
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/routes/app.jsx",
            lineNumber: 74,
            columnNumber: 11
          },
          this
        ),
        showSignOut && /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "sign-out-dropdown", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { onClick: () => navigate("/app/profile"), children: "Profile" }, void 0, !1, {
            fileName: "app/routes/app.jsx",
            lineNumber: 95,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { onClick: handleSignOut, children: "Sign Out" }, void 0, !1, {
            fileName: "app/routes/app.jsx",
            lineNumber: 96,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/app.jsx",
          lineNumber: 94,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/app.jsx",
        lineNumber: 73,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/app.jsx",
      lineNumber: 63,
      columnNumber: 7
    }, this),
    showMenu && /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_jsx_dev_runtime18.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "menu-overlay", onClick: toggleSideMenu }, void 0, !1, {
        fileName: "app/routes/app.jsx",
        lineNumber: 104,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "side-menu", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "menu-header", children: "Menu" }, void 0, !1, {
          fileName: "app/routes/app.jsx",
          lineNumber: 106,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "menu-items", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "menu-item", onClick: () => {
            navigate("/app"), toggleSideMenu();
          }, children: "Dashboard" }, void 0, !1, {
            fileName: "app/routes/app.jsx",
            lineNumber: 108,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "menu-item", onClick: () => {
            navigate("/app/profile"), toggleSideMenu();
          }, children: "Profile" }, void 0, !1, {
            fileName: "app/routes/app.jsx",
            lineNumber: 111,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "menu-item", onClick: () => {
            handleSignOut(), toggleSideMenu();
          }, children: "Sign Out" }, void 0, !1, {
            fileName: "app/routes/app.jsx",
            lineNumber: 114,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/app.jsx",
          lineNumber: 107,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/app.jsx",
        lineNumber: 105,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/app.jsx",
      lineNumber: 103,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("main", { className: "main-content", children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_react25.Outlet, {}, void 0, !1, {
      fileName: "app/routes/app.jsx",
      lineNumber: 123,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/app.jsx",
      lineNumber: 122,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("footer", { className: "footer", children: [
      "\xA9 ",
      (/* @__PURE__ */ new Date()).getFullYear(),
      " 1stock. All rights reserved."
    ] }, void 0, !0, {
      fileName: "app/routes/app.jsx",
      lineNumber: 126,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/app.jsx",
    lineNumber: 62,
    columnNumber: 5
  }, this) : null;
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-V3XB7G4E.js", imports: ["/build/_shared/chunk-O4BRYNJ4.js", "/build/_shared/chunk-Q3MZRBSG.js", "/build/_shared/chunk-AP3DMMKV.js", "/build/_shared/chunk-XGOTYLZ5.js", "/build/_shared/chunk-U4FRFQSK.js", "/build/_shared/chunk-7M6SC7J5.js", "/build/_shared/chunk-UWV35TSL.js", "/build/_shared/chunk-PNG5AS42.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-E7Q4NDGV.js", imports: ["/build/_shared/chunk-6UN4L2JK.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-ZVJPQ2LP.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/_layout": { id: "routes/_layout", parentId: "root", path: void 0, index: void 0, caseSensitive: void 0, module: "/build/routes/_layout-QYINQNXP.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/_layout.forgot-password": { id: "routes/_layout.forgot-password", parentId: "routes/_layout", path: "forgot-password", index: void 0, caseSensitive: void 0, module: "/build/routes/_layout.forgot-password-JGPM4XVF.js", imports: ["/build/_shared/chunk-6UN4L2JK.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/_layout.login": { id: "routes/_layout.login", parentId: "routes/_layout", path: "login", index: void 0, caseSensitive: void 0, module: "/build/routes/_layout.login-EXUF4TM3.js", imports: ["/build/_shared/chunk-6UN4L2JK.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/_layout.signup": { id: "routes/_layout.signup", parentId: "routes/_layout", path: "signup", index: void 0, caseSensitive: void 0, module: "/build/routes/_layout.signup-3C7EVJTB.js", imports: ["/build/_shared/chunk-6UN4L2JK.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/app": { id: "routes/app", parentId: "root", path: "app", index: void 0, caseSensitive: void 0, module: "/build/routes/app-UNC6SD4N.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/app._index": { id: "routes/app._index", parentId: "routes/app", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/app._index-F7L6FO3L.js", imports: void 0, hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/app.company.$symbol.news": { id: "routes/app.company.$symbol.news", parentId: "routes/app", path: "company/:symbol/news", index: void 0, caseSensitive: void 0, module: "/build/routes/app.company.$symbol.news-LIYDMLUD.js", imports: void 0, hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/app.company.$symbol.summary": { id: "routes/app.company.$symbol.summary", parentId: "routes/app", path: "company/:symbol/summary", index: void 0, caseSensitive: void 0, module: "/build/routes/app.company.$symbol.summary-WXAVAA3D.js", imports: ["/build/_shared/chunk-HEETWZQQ.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/app.profile": { id: "routes/app.profile", parentId: "routes/app", path: "profile", index: void 0, caseSensitive: void 0, module: "/build/routes/app.profile-4PYVGR5Z.js", imports: ["/build/_shared/chunk-6UN4L2JK.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 } }, version: "5a01eaf6", hmr: { runtime: "/build/_shared/chunk-AP3DMMKV.js", timestamp: 1740967188206 }, url: "/build/manifest-5A01EAF6.js" };

// server-entry-module:@remix-run/dev/server-build
var mode = "development", assetsBuildDirectory = "public/build", future = { v3_fetcherPersist: !1, v3_relativeSplatPath: !1, v3_throwAbortReason: !1, v3_routeConfig: !1, v3_singleFetch: !1, v3_lazyRouteDiscovery: !1, unstable_optimizeDeps: !1 }, publicPath = "/build/", entry = { module: entry_server_node_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/app.company.$symbol.summary": {
    id: "routes/app.company.$symbol.summary",
    parentId: "routes/app",
    path: "company/:symbol/summary",
    index: void 0,
    caseSensitive: void 0,
    module: app_company_symbol_summary_exports
  },
  "routes/app.company.$symbol.news": {
    id: "routes/app.company.$symbol.news",
    parentId: "routes/app",
    path: "company/:symbol/news",
    index: void 0,
    caseSensitive: void 0,
    module: app_company_symbol_news_exports
  },
  "routes/_layout.forgot-password": {
    id: "routes/_layout.forgot-password",
    parentId: "routes/_layout",
    path: "forgot-password",
    index: void 0,
    caseSensitive: void 0,
    module: layout_forgot_password_exports
  },
  "routes/_layout.signup": {
    id: "routes/_layout.signup",
    parentId: "routes/_layout",
    path: "signup",
    index: void 0,
    caseSensitive: void 0,
    module: layout_signup_exports
  },
  "routes/_layout.login": {
    id: "routes/_layout.login",
    parentId: "routes/_layout",
    path: "login",
    index: void 0,
    caseSensitive: void 0,
    module: layout_login_exports
  },
  "routes/app.profile": {
    id: "routes/app.profile",
    parentId: "routes/app",
    path: "profile",
    index: void 0,
    caseSensitive: void 0,
    module: app_profile_exports
  },
  "routes/app._index": {
    id: "routes/app._index",
    parentId: "routes/app",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: app_index_exports
  },
  "routes/_layout": {
    id: "routes/_layout",
    parentId: "root",
    path: void 0,
    index: void 0,
    caseSensitive: void 0,
    module: layout_exports
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: index_exports
  },
  "routes/app": {
    id: "routes/app",
    parentId: "root",
    path: "app",
    index: void 0,
    caseSensitive: void 0,
    module: app_exports
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
//# sourceMappingURL=index.js.map

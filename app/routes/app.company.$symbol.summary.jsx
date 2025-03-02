import { useLoaderData, useParams, Link } from "@remix-run/react";
import { companySummary } from "../data/companySummary";
import ChartWrapper, { CHART_TYPES } from '../components/charts/ChartWrapper';

export async function loader({ params }) {
  const summary = companySummary[params.symbol] || null;
  if (!summary) {
    throw new Error(`No data found for company: ${params.symbol}`);
  }
  return summary;
}

export default function CompanySummary() {
  const { symbol } = useParams();
  const data = useLoaderData();

  return (
    <div className="company-summary">
      <Link to=".." className="back-link">← Back </Link>
      
      {/* Company Description */}
      <section className="summary-section">
        <h2>About {symbol}</h2>
        <p className="description">{data.description}</p>
      </section>

      {/* Key Metrics */}
      <section className="summary-section">
        <h2>Key Metrics</h2>
        <div className="metrics-grid">
          {Object.entries(data.keyMetrics).map(([key, value]) => (
            <div key={key} className="metric-item">
              <span className="metric-label">{key}</span>
              <span className="metric-value">{value}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Financial Ratios */}
      <section className="summary-section">
        <h2>Financial Ratios</h2>
        {data.financialRatios.map((group) => (
          <div key={group.category} className="ratio-group">
            <h3>{group.category}</h3>
            <table className="ratio-table">
              <tbody>
                {group.ratios.map((ratio) => (
                  <tr key={ratio.name}>
                    <td>{ratio.name}</td>
                    <td>{ratio.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </section>

      {/* Price Chart */}
      <section className="summary-section">
        <h2>Historical Prices</h2>
        <ChartWrapper 
          data={data.historicalPrices}
          type={CHART_TYPES.RECHARTS}
          height={400}
          options={{
            tooltip: true,
            grid: true,
          }}
        />
      </section>
    </div>
  );
} 
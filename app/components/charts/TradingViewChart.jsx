import { useEffect, useState } from 'react';

const TradingViewChart = ({ symbol, height, width }) => {
  const [TradingViewWidget, setTradingViewWidget] = useState(null);

  useEffect(() => {
    import('react-ts-tradingview-widgets').then((mod) => {
      setTradingViewWidget(() => mod.AdvancedRealTimeChart);
    });
  }, []);

  if (!TradingViewWidget) {
    return <div>Loading chart...</div>;
  }

  return (
    <TradingViewWidget
      symbol={symbol}
      theme="light"
      height={height}
      width={width}
      interval="D"
      timezone="Etc/UTC"
      style="1"
    />
  );
};

export default TradingViewChart; 
import { memo } from 'react';
import RechartsPriceChart from './RechartsPriceChart';
import ApexPriceChart from './ApexPriceChart';
import TradingViewChart from './TradingViewChart';

// Enum for chart types
export const CHART_TYPES = {
  RECHARTS: 'recharts',
  APEX: 'apex',
  TRADINGVIEW: 'tradingview'
};

const ChartWrapper = ({ 
  data, 
  type = CHART_TYPES.RECHARTS,  // default chart type
  height = 400,
  width = '100%',
  options = {} 
}) => {
  const renderChart = () => {
    switch (type) {
      case CHART_TYPES.RECHARTS:
        return <RechartsPriceChart data={data} height={height} width={width} options={options} />;
      case CHART_TYPES.APEX:
        return <ApexPriceChart data={data} height={height} width={width} options={options} />;
      case CHART_TYPES.TRADINGVIEW:
        return <TradingViewChart data={data} height={height} width={width} options={options} />;
      default:
        return <RechartsPriceChart data={data} height={height} width={width} options={options} />;
    }
  };

  return (
    <div className="chart-container" style={{ height, width }}>
      {renderChart()}
    </div>
  );
};

export default memo(ChartWrapper); 
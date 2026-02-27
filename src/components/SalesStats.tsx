import type { SalesStatisticsData } from '../types/api';

interface SalesStatsProps {
  stats: SalesStatisticsData;
  productTitle: string;
  onClose: () => void;
}

export function SalesStats({ stats, productTitle, onClose }: SalesStatsProps) {
  const formatNumber = (num: number) => {
    return num.toLocaleString('ru-RU');
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('ru-RU', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  const maxSales = stats.sales_trend.length > 0
    ? Math.max(...stats.sales_trend.map((e: { date: string; sales: number }) => e.sales))
    : 0;

  return (
    <div className="sales-stats-modal" onClick={onClose}>
      <div className="sales-stats-content" onClick={(e) => e.stopPropagation()}>
        <div className="stats-header">
          <h2>Статистика продаж: {productTitle}</h2>
          <button className="close-btn" onClick={onClose}>
            &times;
          </button>
        </div>

        <div className="stats-overview">
          <div className="stat-card">
            <div className="stat-label">Всего продано</div>
            <div className="stat-value">
              {formatNumber(stats.total_sales)}
            </div>
          </div>

          {stats.total_orders && (
            <div className="stat-card">
              <div className="stat-label">Количество заказов</div>
              <div className="stat-value">
                {formatNumber(stats.total_orders)}
              </div>
            </div>
          )}

          {stats.average_order_value && (
            <div className="stat-card">
              <div className="stat-label">Средний чек</div>
              <div className="stat-value">
                ¥{stats.average_order_value}
              </div>
            </div>
          )}

          {stats.repurchase_rate && (
            <div className="stat-card">
              <div className="stat-label">Повторные покупки</div>
              <div className="stat-value">
                {stats.repurchase_rate}
              </div>
            </div>
          )}
        </div>

        {stats.sales_trend && stats.sales_trend.length > 0 && (
          <div className="stats-trend">
            <h3>Тренд продаж</h3>
            <div className="trend-list">
              {stats.sales_trend.map((entry: { date: string; sales: number }, index: number) => (
                <div key={index} className="trend-item">
                  <div className="trend-date">
                    {formatDate(entry.date)}
                  </div>
                  <div className="trend-bar-container">
                    <div
                      className="trend-bar"
                      style={{
                        width: `${maxSales > 0 ? (entry.sales / maxSales) * 100 : 0}%`,
                      }}
                    />
                  </div>
                  <div className="trend-value">
                    {formatNumber(entry.sales)} шт.
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {stats.top_skus && stats.top_skus.length > 0 && (
          <div className="stats-top-skus">
            <h3>Популярные варианты</h3>
            <div className="top-sku-list">
              {stats.top_skus.map((sku: { sku_id: string; name: string; sales: number }, index: number) => (
                <div key={index} className="top-sku-item">
                  <div className="sku-rank">#{index + 1}</div>
                  <div className="sku-name">{sku.name}</div>
                  <div className="sku-sales">
                    {formatNumber(sku.sales)} продаж
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

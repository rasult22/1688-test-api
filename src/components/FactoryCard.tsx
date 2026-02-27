import type { Factory } from '../types/api';

interface FactoryCardProps {
  factory: Factory;
  onFactoryClick?: (factory: Factory) => void;
}

export function FactoryCard({ factory, onFactoryClick }: FactoryCardProps) {
  const handleClick = () => {
    if (onFactoryClick) {
      onFactoryClick(factory);
    }
  };

  return (
    <div className="factory-card" onClick={handleClick}>
      <div className="factory-header">
        <h3 className="factory-name">
          <a
            href={factory.shop_url}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
          >
            {factory.company_name}
          </a>
        </h3>
        {factory.shop_years > 0 && (
          <span className="factory-years">{factory.shop_years} лет в бизнесе</span>
        )}
      </div>

      <div className="factory-location">
        {factory.location.join(', ')}
      </div>

      {factory.service_tags && factory.service_tags.length > 0 && (
        <div className="factory-tags">
          {factory.service_tags.map((tag, index) => (
            <span key={index} className="service-tag">
              {tag}
            </span>
          ))}
        </div>
      )}

      <div className="factory-metrics">
        {factory.repurchase_rate && (
          <div className="metric">
            <span className="metric-label">Повторные покупки:</span>
            <span className="metric-value">{factory.repurchase_rate}</span>
          </div>
        )}
        {factory.response_rate && (
          <div className="metric">
            <span className="metric-label">Уровень ответов:</span>
            <span className="metric-value">{factory.response_rate}</span>
          </div>
        )}
      </div>

      <div className="factory-badges">
        {factory.is_factory && <span className="badge factory">Фабрика</span>}
        {factory.is_super_factory && <span className="badge super-factory">Супер-фабрика</span>}
        {factory.factory_inspection && <span className="badge verified">Проверен</span>}
      </div>
    </div>
  );
}

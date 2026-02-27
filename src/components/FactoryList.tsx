import type { Factory } from '../types/api';
import { FactoryCard } from './FactoryCard';

interface FactoryListProps {
  factories: Factory[];
  total: number;
  page: number;
  pageSize: number;
  onPageChange: (page: number) => void;
  onFactoryClick?: (factory: Factory) => void;
}

export function FactoryList({
  factories,
  total,
  page,
  pageSize,
  onPageChange,
  onFactoryClick,
}: FactoryListProps) {
  const totalPages = Math.ceil(total / pageSize);

  if (factories.length === 0) {
    return <div className="no-results">Фабрики не найдены</div>;
  }

  return (
    <div className="factory-list-container">
      <div className="results-info">
        Найдено фабрик: {total}
      </div>
      <div className="factory-grid">
        {factories.map((factory) => (
          <FactoryCard
            key={factory.member_id}
            factory={factory}
            onFactoryClick={onFactoryClick}
          />
        ))}
      </div>
      {totalPages > 1 && (
        <div className="pagination">
          <button
            onClick={() => onPageChange(page - 1)}
            disabled={page <= 1}
            className="page-btn"
          >
            Назад
          </button>
          <span className="page-info">
            Страница {page} из {totalPages}
          </span>
          <button
            onClick={() => onPageChange(page + 1)}
            disabled={page >= totalPages}
            className="page-btn"
          >
            Вперёд
          </button>
        </div>
      )}
    </div>
  );
}

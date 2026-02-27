import type { ProductItem } from '../types/api';
import { ProductCard } from './ProductCard';

interface ProductListProps {
  products: ProductItem[];
  total: number;
  page: number;
  pageSize: number;
  onPageChange: (page: number) => void;
}

export function ProductList({ products, total, page, pageSize, onPageChange }: ProductListProps) {
  const totalPages = Math.ceil(total / pageSize);

  if (products.length === 0) {
    return <div className="no-results">Товары не найдены</div>;
  }

  return (
    <div className="product-list-container">
      <div className="results-info">
        Найдено товаров: {total}
      </div>
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.item_id} product={product} />
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

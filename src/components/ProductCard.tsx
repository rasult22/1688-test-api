import type { ProductItem } from '../types/api';

interface ProductCardProps {
  product: ProductItem;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="product-card">
      <a href={product.product_url} target="_blank" rel="noopener noreferrer">
        <img src={product.img} alt={product.title} className="product-image" />
      </a>
      <div className="product-info">
        <h3 className="product-title">
          <a href={product.product_url} target="_blank" rel="noopener noreferrer">
            {product.title}
          </a>
        </h3>
        <div className="product-price">
          ¥{product.price}
        </div>
        <div className="product-meta">
          {product.sale_info.sale_quantity_int > 0 && (
            <span className="sales">Продано: {product.sale_info.sale_quantity}</span>
          )}
          {product.moq > 1 && (
            <span className="moq">MOQ: {product.moq}</span>
          )}
        </div>
        <div className="product-badges">
          {product.shop_info.is_factory && <span className="badge factory">Фабрика</span>}
          {product.shop_info.factory_inspection && <span className="badge verified">Проверен</span>}
          {product.is_ad && <span className="badge ad">Реклама</span>}
        </div>
        <div className="shop-meta">
          <a
            href={product.shop_info.shop_url}
            target="_blank"
            rel="noopener noreferrer"
            className="shop-link"
          >
            {product.shop_info.company_name}
          </a>
          <span className="location">{product.delivery_info.area_from.join(', ')}</span>
        </div>
      </div>
    </div>
  );
}

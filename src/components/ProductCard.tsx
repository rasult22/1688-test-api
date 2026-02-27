import type { ProductItem } from '../types/api';

interface ProductCardProps {
  product: ProductItem;
}

export function ProductCard({ product }: ProductCardProps) {
  const moq = Number(product.moq) || Number(product.quantity_begin) || 1;
  const hasDiscount = product.price_info.origin_price &&
    Number(product.price_info.origin_price) > Number(product.price);
  const salesText = product.sale_info.sale_quantity_90days || product.sale_info.sale_quantity;
  const shipIn48h = product.ship_in_48h || product.delivery_info.ship_in_48h;
  const freeShipping = product.delivery_info.free_shipping;
  const repurchaseRate = product.item_repurchase_rate;
  const shopScore = product.shop_info.score_info?.composite_score;
  const shopYears = product.shop_info.shop_years;

  return (
    <div className="product-card">
      <div className="product-image-wrapper">
        <a href={product.product_url} target="_blank" rel="noopener noreferrer">
          <img src={product.img} alt={product.title} className="product-image" />
        </a>
        {shipIn48h && <span className="image-badge ship-48h">48ч</span>}
        {freeShipping && <span className="image-badge free-ship">Бесп. дост.</span>}
      </div>
      <div className="product-info">
        <h3 className="product-title">
          <a href={product.product_url} target="_blank" rel="noopener noreferrer">
            {product.title}
          </a>
        </h3>

        <div className="product-price-row">
          <span className="product-price">¥{product.price}</span>
          {hasDiscount && (
            <span className="product-origin-price">¥{product.price_info.origin_price}</span>
          )}
        </div>

        <div className="product-stats">
          {salesText && (
            <span className="stat-item sales">
              <span className="stat-icon">📦</span>
              {salesText}
            </span>
          )}
          {repurchaseRate && repurchaseRate !== '0%' && (
            <span className="stat-item repurchase">
              <span className="stat-icon">🔄</span>
              {repurchaseRate}
            </span>
          )}
          {moq > 1 && (
            <span className="stat-item moq">MOQ: {moq}</span>
          )}
        </div>

        <div className="product-badges">
          {product.shop_info.is_super_factory && <span className="badge super-factory">Супер-фабрика</span>}
          {product.shop_info.is_factory && !product.shop_info.is_super_factory && <span className="badge factory">Фабрика</span>}
          {product.shop_info.is_powerful_seller && <span className="badge powerful">Топ продавец</span>}
          {product.shop_info.factory_inspection && <span className="badge verified">Проверен</span>}
          {product.low_refund_rate && <span className="badge low-refund">Мало возвратов</span>}
          {product.is_ad && <span className="badge ad">Реклама</span>}
        </div>

        <div className="shop-meta">
          <div className="shop-info-row">
            {product.shop_info.shop_url ? (
              <a
                href={product.shop_info.shop_url}
                target="_blank"
                rel="noopener noreferrer"
                className="shop-link"
                onClick={(e) => e.stopPropagation()}
              >
                {product.shop_info.company_name}
              </a>
            ) : (
              <span className="shop-name">{product.shop_info.company_name}</span>
            )}
            {shopScore && (
              <span className="shop-score">★ {shopScore}</span>
            )}
          </div>
          <div className="shop-details">
            {shopYears && shopYears > 0 && (
              <span className="shop-years">{shopYears} лет</span>
            )}
            <span className="location">{product.delivery_info.area_from.join(', ')}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

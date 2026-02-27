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
      </div>

      <div className="product-info">
        <h3 className="product-title">
          <a href={product.product_url} target="_blank" rel="noopener noreferrer">
            {product.title}
          </a>
        </h3>

        {/* Цена */}
        <div className="product-section price-section">
          <div className="section-label">Цена за единицу:</div>
          <div className="product-price-row">
            <span className="product-price">¥{product.price}</span>
            {hasDiscount && (
              <span className="product-origin-price">была ¥{product.price_info.origin_price}</span>
            )}
          </div>
        </div>

        {/* Минимальный заказ */}
        <div className="product-section">
          <div className="section-label">Минимальный заказ:</div>
          <div className="section-value">{moq} шт.</div>
        </div>

        {/* Продажи */}
        {salesText && (
          <div className="product-section">
            <div className="section-label">Продано за 90 дней:</div>
            <div className="section-value highlight-green">{salesText}</div>
          </div>
        )}

        {/* Повторные покупки */}
        {repurchaseRate && repurchaseRate !== '0%' && (
          <div className="product-section">
            <div className="section-label">Покупают повторно:</div>
            <div className="section-value highlight-blue">{repurchaseRate} покупателей</div>
          </div>
        )}

        {/* Доставка */}
        <div className="product-section">
          <div className="section-label">Доставка:</div>
          <div className="section-value">
            {shipIn48h && <div className="delivery-tag positive">Отправка в течение 48 часов</div>}
            {freeShipping && <div className="delivery-tag positive">Бесплатная доставка</div>}
            {!shipIn48h && !freeShipping && <div className="delivery-tag neutral">Стандартная</div>}
          </div>
        </div>

        {/* Статус продавца */}
        <div className="product-section">
          <div className="section-label">Тип продавца:</div>
          <div className="seller-tags">
            {product.shop_info.is_super_factory && <span className="seller-tag super-factory">Супер-фабрика</span>}
            {product.shop_info.is_factory && !product.shop_info.is_super_factory && <span className="seller-tag factory">Производитель (фабрика)</span>}
            {!product.shop_info.is_factory && !product.shop_info.is_super_factory && <span className="seller-tag trader">Торговая компания</span>}
            {product.shop_info.is_powerful_seller && <span className="seller-tag powerful">Топ продавец площадки</span>}
          </div>
        </div>

        {/* Надёжность */}
        {(product.shop_info.factory_inspection || product.low_refund_rate) && (
          <div className="product-section">
            <div className="section-label">Надёжность:</div>
            <div className="seller-tags">
              {product.shop_info.factory_inspection && <span className="seller-tag verified">Проверен 1688</span>}
              {product.low_refund_rate && <span className="seller-tag low-refund">Низкий процент возвратов</span>}
            </div>
          </div>
        )}

        {/* Информация о магазине */}
        <div className="product-section shop-section">
          <div className="section-label">Продавец:</div>
          <div className="shop-info-block">
            <div className="shop-name-row">
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
            </div>
            <div className="shop-stats">
              {shopScore && (
                <div className="shop-stat">
                  <span className="shop-stat-label">Рейтинг:</span>
                  <span className="shop-stat-value">★ {shopScore} из 5</span>
                </div>
              )}
              {shopYears && shopYears > 0 && (
                <div className="shop-stat">
                  <span className="shop-stat-label">На площадке:</span>
                  <span className="shop-stat-value">{shopYears} лет</span>
                </div>
              )}
              <div className="shop-stat">
                <span className="shop-stat-label">Регион:</span>
                <span className="shop-stat-value">{product.delivery_info.area_from.join(', ')}</span>
              </div>
            </div>
          </div>
        </div>

        {product.is_ad && (
          <div className="ad-notice">Рекламное размещение</div>
        )}
      </div>
    </div>
  );
}

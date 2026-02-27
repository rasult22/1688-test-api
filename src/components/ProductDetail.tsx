import { useState } from 'react';
import type { ProductDetailData } from '../types/api';

interface ProductDetailProps {
  product: ProductDetailData & {
    product_url: string;
    skus?: Array<{
      sku_id: string;
      name: string;
      price: string;
      image_url?: string;
    }>;
  };
  onClose: () => void;
  onShowReviews: (itemId: number) => void;
  onShowSalesStats: (itemId: number) => void;
}

export function ProductDetail({
  product,
  onClose,
  onShowReviews,
  onShowSalesStats,
}: ProductDetailProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? product.images.length - 1 : prev - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === product.images.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="product-detail-modal" onClick={onClose}>
      <div className="product-detail-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>
          &times;
        </button>

        <div className="product-detail-layout">
          <div className="product-gallery">
            {product.images.length > 0 && (
              <>
                <div className="gallery-main">
                  <img
                    src={product.images[currentImageIndex]}
                    alt={`${product.title} - изображение ${currentImageIndex + 1}`}
                  />
                </div>
                {product.images.length > 1 && (
                  <>
                    <button className="gallery-btn prev" onClick={handlePrevImage}>
                      ‹
                    </button>
                    <button className="gallery-btn next" onClick={handleNextImage}>
                      ›
                    </button>
                    <div className="gallery-thumbnails">
                      {product.images.map((img: string, index: number) => (
                        <img
                          key={index}
                          src={img}
                          alt={`Миниатюра ${index + 1}`}
                          className={index === currentImageIndex ? 'active' : ''}
                          onClick={() => setCurrentImageIndex(index)}
                        />
                      ))}
                    </div>
                  </>
                )}
              </>
            )}
          </div>

          <div className="product-info-section">
            <h2 className="product-detail-title">{product.title}</h2>

            <div className="product-detail-price">
              <span className="current-price">¥{product.price}</span>
              {product.price_info.origin_price !== product.price_info.sale_price && (
                <span className="original-price">¥{product.price_info.origin_price}</span>
              )}
            </div>

            {product.moq > 1 && (
              <div className="product-moq">
                Минимальный заказ: {product.moq} шт.
              </div>
            )}

            {product.skus && product.skus.length > 0 && (
              <div className="product-skus">
                <h3>Варианты:</h3>
                <div className="sku-list">
                  {product.skus.map((sku: { sku_id: string; name: string; price: string; image_url?: string }) => (
                    <div key={sku.sku_id} className="sku-item">
                      {sku.image_url && (
                        <img src={sku.image_url} alt={sku.name} className="sku-image" />
                      )}
                      <div className="sku-info">
                        <div className="sku-name">{sku.name}</div>
                        <div className="sku-price">¥{sku.price}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="shop-info-section">
              <h3>Информация о магазине</h3>
              <div className="shop-detail">
                <a
                  href={product.shop_info.shop_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shop-name"
                >
                  {product.shop_info.company_name}
                </a>
                <div className="shop-meta">
                  <span className="shop-location">
                    {product.shop_info.location.join(', ')}
                  </span>
                  {product.shop_info.shop_years > 0 && (
                    <span className="shop-years">
                      {product.shop_info.shop_years} лет
                    </span>
                  )}
                </div>
                <div className="shop-badges">
                  {product.shop_info.is_factory && (
                    <span className="badge factory">Фабрика</span>
                  )}
                  {product.shop_info.is_super_factory && (
                    <span className="badge super-factory">Супер-фабрика</span>
                  )}
                  {product.shop_info.factory_inspection && (
                    <span className="badge verified">Проверен</span>
                  )}
                </div>
              </div>
            </div>

            <div className="product-actions">
              <button
                className="action-btn"
                onClick={() => onShowReviews(product.item_id)}
              >
                Показать отзывы
              </button>
              <button
                className="action-btn"
                onClick={() => onShowSalesStats(product.item_id)}
              >
                Статистика продаж
              </button>
              <a
                href={product.product_url}
                target="_blank"
                rel="noopener noreferrer"
                className="action-btn primary"
              >
                Открыть на 1688
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

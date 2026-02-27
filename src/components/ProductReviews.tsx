import type { ProductReview } from '../types/api';

interface ProductReviewsProps {
  reviews: ProductReview[];
  productTitle: string;
  onClose: () => void;
}

export function ProductReviews({ reviews, productTitle, onClose }: ProductReviewsProps) {
  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span key={i} className={`star ${i <= rating ? 'filled' : ''}`}>
          ★
        </span>
      );
    }
    return stars;
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('ru-RU', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <div className="product-reviews-modal" onClick={onClose}>
      <div className="product-reviews-content" onClick={(e) => e.stopPropagation()}>
        <div className="reviews-header">
          <h2>Отзывы: {productTitle}</h2>
          <button className="close-btn" onClick={onClose}>
            &times;
          </button>
        </div>

        <div className="reviews-list">
          {reviews.length === 0 ? (
            <div className="no-reviews">Отзывы не найдены</div>
          ) : (
            reviews.map((review) => (
              <div key={review.review_id} className="review-item">
                <div className="review-header">
                  <div className="review-rating">
                    {renderStars(review.rating)}
                  </div>
                  <div className="review-date">
                    {formatDate(review.create_time)}
                  </div>
                </div>

                {review.content && (
                  <div className="review-content">
                    {review.content}
                  </div>
                )}

                {review.sku_info && (
                  <div className="review-sku">
                    Вариант: {review.sku_info}
                  </div>
                )}

                {review.images && review.images.length > 0 && (
                  <div className="review-images">
                    {review.images.map((img: string, index: number) => (
                      <img
                        key={index}
                        src={img}
                        alt={`Фото отзыва ${index + 1}`}
                        className="review-image"
                      />
                    ))}
                  </div>
                )}

                {review.buyer_name && (
                  <div className="review-buyer">
                    {review.buyer_name}
                  </div>
                )}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

import { useState, useEffect } from 'react';
import type { Category } from '../types/api';

interface CategoryBrowserProps {
  categories: Category[];
  onCategorySelect: (categoryId: string) => void;
  isLoading: boolean;
}

export function CategoryBrowser({ categories, onCategorySelect, isLoading }: CategoryBrowserProps) {
  const [breadcrumbs, setBreadcrumbs] = useState<Array<{ id: string; name: string }>>([]);
  const [currentCategories, setCurrentCategories] = useState<Category[]>([]);

  useEffect(() => {
    setCurrentCategories(categories);
  }, [categories]);

  const handleCategoryClick = (category: Category) => {
    if (category.children && category.children.length > 0) {
      setBreadcrumbs([...breadcrumbs, { id: category.id, name: category.name }]);
      setCurrentCategories(category.children);
    } else {
      onCategorySelect(category.id);
    }
  };

  const handleBreadcrumbClick = (index: number) => {
    if (index === -1) {
      setBreadcrumbs([]);
      setCurrentCategories(categories);
    } else {
      const newBreadcrumbs = breadcrumbs.slice(0, index + 1);
      setBreadcrumbs(newBreadcrumbs);

      let cats = categories;
      for (let i = 0; i <= index; i++) {
        const found = cats.find(c => c.id === breadcrumbs[i].id);
        if (found && found.children) {
          cats = found.children;
        }
      }
      setCurrentCategories(cats);
    }
  };

  if (isLoading) {
    return <div className="category-browser loading">Загрузка категорий...</div>;
  }

  return (
    <div className="category-browser">
      {breadcrumbs.length > 0 && (
        <div className="breadcrumbs">
          <button
            className="breadcrumb-item"
            onClick={() => handleBreadcrumbClick(-1)}
          >
            Все категории
          </button>
          {breadcrumbs.map((crumb, index) => (
            <span key={crumb.id}>
              <span className="breadcrumb-separator">/</span>
              <button
                className="breadcrumb-item"
                onClick={() => handleBreadcrumbClick(index)}
              >
                {crumb.name}
              </button>
            </span>
          ))}
        </div>
      )}

      <div className="category-grid">
        {currentCategories.length === 0 ? (
          <div className="no-categories">Категории не найдены</div>
        ) : (
          currentCategories.map((category) => (
            <div
              key={category.id}
              className="category-item"
              onClick={() => handleCategoryClick(category)}
            >
              {category.image_url && (
                <img src={category.image_url} alt={category.name} className="category-image" />
              )}
              <div className="category-name">{category.name}</div>
              {category.children && category.children.length > 0 && (
                <div className="category-count">
                  {category.children.length} подкатегорий
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
}

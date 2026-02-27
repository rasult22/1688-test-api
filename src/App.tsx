import { useState } from 'react';
import { Navigation } from './components/Navigation';
import { SearchForm } from './components/SearchForm';
import { KeywordSearchForm } from './components/KeywordSearchForm';
import { CategoryBrowser } from './components/CategoryBrowser';
import { FactorySearchForm } from './components/FactorySearchForm';
import { ProductList } from './components/ProductList';
import { FactoryList } from './components/FactoryList';
import {
  searchByImageUrl,
  searchByKeyword,
  searchFactories,
  getCategoryInfo,
  getCategoryItems,
  convertImageUrl,
  isAlibabaUrl,
} from './services/api';
import type {
  SearchParams,
  KeywordSearchParams,
  FactorySearchParams,
  ProductItem,
  Factory,
  Category,
} from './types/api';
import './App.css';

type Section = 'image-search' | 'keyword-search' | 'categories' | 'factories';

function App() {
  const [activeSection, setActiveSection] = useState<Section>('image-search');

  // Products state
  const [products, setProducts] = useState<ProductItem[]>([]);
  const [totalProducts, setTotalProducts] = useState(0);
  const [productPage, setProductPage] = useState(1);
  const [pageSize] = useState(20);

  // Factories state
  const [factories, setFactories] = useState<Factory[]>([]);
  const [totalFactories, setTotalFactories] = useState(0);
  const [factoryPage, setFactoryPage] = useState(1);

  // Categories state
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>(null);

  // Loading & error states
  const [isLoading, setIsLoading] = useState(false);
  const [isConverting, setIsConverting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [hasSearched, setHasSearched] = useState(false);

  // Last search params for pagination
  const [lastImageParams, setLastImageParams] = useState<SearchParams | null>(null);
  const [lastKeywordParams, setLastKeywordParams] = useState<KeywordSearchParams | null>(null);
  const [lastFactoryParams, setLastFactoryParams] = useState<FactorySearchParams | null>(null);

  const handleSectionChange = (section: Section) => {
    setActiveSection(section);
    setError(null);
    setHasSearched(false);
    setProducts([]);
    setFactories([]);

    if (section === 'categories' && categories.length === 0) {
      loadCategories();
    }
  };

  const loadCategories = async () => {
    setIsLoading(true);
    setError(null);
    const apiToken = localStorage.getItem('apiToken') || '';

    if (!apiToken) {
      setError('Пожалуйста, введите API токен в любой форме поиска');
      setIsLoading(false);
      return;
    }

    try {
      const response = await getCategoryInfo({ apiToken });
      if (response.code === 200) {
        const data = response.data;
        setCategories(Array.isArray(data) ? data : [data]);
      } else {
        setError(response.msg || 'Ошибка загрузки категорий');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Произошла ошибка');
    } finally {
      setIsLoading(false);
    }
  };

  // Image search
  const handleImageSearch = async (params: SearchParams, pageNum = 1, skipConvert = false) => {
    setIsLoading(true);
    setError(null);

    let imgUrl = params.img_url;

    try {
      if (!skipConvert && !isAlibabaUrl(imgUrl)) {
        setIsConverting(true);
        const convertResponse = await convertImageUrl({
          url: imgUrl,
          apiToken: params.apiToken,
        });
        setIsConverting(false);

        if (convertResponse.code === 200) {
          imgUrl = convertResponse.data.image_url;
        } else {
          throw new Error(convertResponse.msg || 'Ошибка конвертации URL изображения');
        }
      }

      const searchParams = { ...params, img_url: imgUrl };
      if (!skipConvert) {
        setLastImageParams(searchParams);
      }

      const response = await searchByImageUrl({
        ...searchParams,
        page: pageNum,
        page_size: pageSize,
      });

      if (response.code === 200) {
        setProducts(response.data.items || []);
        setTotalProducts(response.data.total_count || 0);
        setProductPage(response.data.page || pageNum);
      } else {
        setError(response.msg || 'Произошла ошибка при поиске');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Произошла ошибка');
    } finally {
      setIsLoading(false);
      setIsConverting(false);
      setHasSearched(true);
    }
  };

  // Keyword search
  const handleKeywordSearch = async (params: KeywordSearchParams, pageNum = 1) => {
    setIsLoading(true);
    setError(null);

    try {
      if (pageNum === 1) {
        setLastKeywordParams(params);
      }

      const response = await searchByKeyword({
        ...params,
        page: pageNum,
        page_size: pageSize,
      });

      if (response.code === 200) {
        setProducts(response.data.items || []);
        setTotalProducts(response.data.total_count || 0);
        setProductPage(response.data.page || pageNum);
      } else {
        setError(response.msg || 'Произошла ошибка при поиске');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Произошла ошибка');
    } finally {
      setIsLoading(false);
      setHasSearched(true);
    }
  };

  // Factory search
  const handleFactorySearch = async (params: FactorySearchParams, pageNum = 1) => {
    setIsLoading(true);
    setError(null);

    try {
      if (pageNum === 1) {
        setLastFactoryParams(params);
      }

      const response = await searchFactories({
        ...params,
        page: pageNum,
        page_size: pageSize,
      });

      if (response.code === 200) {
        setFactories(response.data.items || []);
        setTotalFactories(response.data.total_count || 0);
        setFactoryPage(response.data.page || pageNum);
      } else {
        setError(response.msg || 'Произошла ошибка при поиске');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Произошла ошибка');
    } finally {
      setIsLoading(false);
      setHasSearched(true);
    }
  };

  // Category select - load products for category
  const handleCategorySelect = async (categoryId: string) => {
    setIsLoading(true);
    setError(null);
    setSelectedCategoryId(categoryId);
    const apiToken = localStorage.getItem('apiToken') || '';

    try {
      const response = await getCategoryItems({
        cat_id: categoryId,
        apiToken,
        page: 1,
      });

      if (response.code === 200) {
        setProducts(response.data.items || []);
        setTotalProducts(response.data.total_count || 0);
        setProductPage(1);
        setHasSearched(true);
      } else {
        setError(response.msg || 'Ошибка загрузки товаров категории');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Произошла ошибка');
    } finally {
      setIsLoading(false);
    }
  };

  // Pagination handlers
  const handleImagePageChange = (newPage: number) => {
    if (lastImageParams) {
      handleImageSearch(lastImageParams, newPage, true);
    }
  };

  const handleKeywordPageChange = (newPage: number) => {
    if (lastKeywordParams) {
      handleKeywordSearch(lastKeywordParams, newPage);
    }
  };

  const handleFactoryPageChange = (newPage: number) => {
    if (lastFactoryParams) {
      handleFactorySearch(lastFactoryParams, newPage);
    }
  };

  const handleCategoryPageChange = async (newPage: number) => {
    if (!selectedCategoryId) return;
    setIsLoading(true);
    const apiToken = localStorage.getItem('apiToken') || '';

    try {
      const response = await getCategoryItems({
        cat_id: selectedCategoryId,
        apiToken,
        page: newPage,
      });

      if (response.code === 200) {
        setProducts(response.data.items || []);
        setTotalProducts(response.data.total_count || 0);
        setProductPage(newPage);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Произошла ошибка');
    } finally {
      setIsLoading(false);
    }
  };

  const getSectionTitle = () => {
    switch (activeSection) {
      case 'image-search':
        return { title: '1688 Поиск по изображению', subtitle: 'Найдите похожие товары на 1688.com по URL изображения' };
      case 'keyword-search':
        return { title: '1688 Поиск по ключевым словам', subtitle: 'Найдите товары по названию или описанию' };
      case 'categories':
        return { title: '1688 Категории', subtitle: 'Просмотрите товары по категориям' };
      case 'factories':
        return { title: '1688 Поиск фабрик', subtitle: 'Найдите производителей и поставщиков' };
    }
  };

  const { title, subtitle } = getSectionTitle();

  return (
    <div className="app">
      <header className="header">
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </header>

      <Navigation activeSection={activeSection} onSectionChange={handleSectionChange} />

      <main className="main">
        {activeSection === 'image-search' && (
          <SearchForm onSearch={handleImageSearch} isLoading={isLoading} />
        )}

        {activeSection === 'keyword-search' && (
          <KeywordSearchForm onSearch={handleKeywordSearch} isLoading={isLoading} />
        )}

        {activeSection === 'categories' && (
          <CategoryBrowser
            categories={categories}
            onCategorySelect={handleCategorySelect}
            isLoading={isLoading && !hasSearched}
          />
        )}

        {activeSection === 'factories' && (
          <FactorySearchForm onSearch={handleFactorySearch} isLoading={isLoading} />
        )}

        {error && <div className="error-message">{error}</div>}

        {isLoading && (
          <div className="loading">
            <div className="spinner"></div>
            <p>{isConverting ? 'Конвертация изображения...' : 'Загрузка...'}</p>
          </div>
        )}

        {!isLoading && hasSearched && activeSection !== 'factories' && (
          <ProductList
            products={products}
            total={totalProducts}
            page={productPage}
            pageSize={pageSize}
            onPageChange={
              activeSection === 'image-search'
                ? handleImagePageChange
                : activeSection === 'keyword-search'
                ? handleKeywordPageChange
                : handleCategoryPageChange
            }
          />
        )}

        {!isLoading && hasSearched && activeSection === 'factories' && (
          <FactoryList
            factories={factories}
            total={totalFactories}
            page={factoryPage}
            pageSize={pageSize}
            onPageChange={handleFactoryPageChange}
          />
        )}
      </main>

      <footer className="footer">
        <p>
          API: <a href="https://tmapi.top" target="_blank" rel="noopener noreferrer">tmapi.top</a>
        </p>
      </footer>
    </div>
  );
}

export default App;

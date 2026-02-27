import { useState } from 'react';
import { SearchForm } from './components/SearchForm';
import { ProductList } from './components/ProductList';
import { searchByImageUrl, convertImageUrl, isAlibabaUrl } from './services/api';
import type { SearchParams, ProductItem } from './types/api';
import './App.css';

function App() {
  const [products, setProducts] = useState<ProductItem[]>([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [pageSize] = useState(20);
  const [isLoading, setIsLoading] = useState(false);
  const [isConverting, setIsConverting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [lastParams, setLastParams] = useState<SearchParams | null>(null);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = async (params: SearchParams, pageNum = 1) => {
    setIsLoading(true);
    setError(null);

    let imgUrl = params.img_url;

    try {
      // Конвертируем URL если это не Alibaba-ссылка
      if (!isAlibabaUrl(imgUrl)) {
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
      setLastParams(searchParams);

      const response = await searchByImageUrl({
        ...searchParams,
        page: pageNum,
        page_size: pageSize,
      });

      if (response.code === 200) {
        setProducts(response.data.items || []);
        setTotal(response.data.total_count || 0);
        setPage(response.data.page || pageNum);
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

  const handlePageChange = (newPage: number) => {
    if (lastParams) {
      handleSearch(lastParams, newPage);
    }
  };

  return (
    <div className="app">
      <header className="header">
        <h1>1688 Поиск по изображению</h1>
        <p>Найдите похожие товары на 1688.com по URL изображения</p>
      </header>

      <main className="main">
        <SearchForm onSearch={handleSearch} isLoading={isLoading} />

        {error && <div className="error-message">{error}</div>}

        {isLoading && (
          <div className="loading">
            <div className="spinner"></div>
            <p>{isConverting ? 'Конвертация изображения...' : 'Поиск товаров...'}</p>
          </div>
        )}

        {!isLoading && hasSearched && (
          <ProductList
            products={products}
            total={total}
            page={page}
            pageSize={pageSize}
            onPageChange={handlePageChange}
          />
        )}
      </main>

      <footer className="footer">
        <p>API: <a href="https://tmapi.top" target="_blank" rel="noopener noreferrer">tmapi.top</a></p>
      </footer>
    </div>
  );
}

export default App;

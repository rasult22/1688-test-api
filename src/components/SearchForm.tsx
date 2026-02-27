import { useState } from 'react';
import type { SearchParams } from '../types/api';

interface SearchFormProps {
  onSearch: (params: SearchParams) => void;
  isLoading: boolean;
}

export function SearchForm({ onSearch, isLoading }: SearchFormProps) {
  const [imgUrl, setImgUrl] = useState('');
  const [apiToken, setApiToken] = useState(() => localStorage.getItem('apiToken') || '');
  const [showFilters, setShowFilters] = useState(false);
  const [sort, setSort] = useState<SearchParams['sort']>('default');
  const [priceStart, setPriceStart] = useState('');
  const [priceEnd, setPriceEnd] = useState('');
  const [supportDropshipping, setSupportDropshipping] = useState(false);
  const [isFactory, setIsFactory] = useState(false);
  const [verifiedSupplier, setVerifiedSupplier] = useState(false);
  const [freeShipping, setFreeShipping] = useState(false);
  const [newArrival, setNewArrival] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem('apiToken', apiToken);

    const params: SearchParams = {
      img_url: imgUrl,
      apiToken,
      sort,
      ...(priceStart && { price_start: priceStart }),
      ...(priceEnd && { price_end: priceEnd }),
      ...(supportDropshipping && { support_dropshipping: true }),
      ...(isFactory && { is_factory: true }),
      ...(verifiedSupplier && { verified_supplier: true }),
      ...(freeShipping && { free_shipping: true }),
      ...(newArrival && { new_arrival: true }),
    };

    onSearch(params);
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="apiToken">API Token</label>
        <input
          id="apiToken"
          type="password"
          value={apiToken}
          onChange={(e) => setApiToken(e.target.value)}
          placeholder="Введите API токен"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="imgUrl">URL изображения</label>
        <input
          id="imgUrl"
          type="url"
          value={imgUrl}
          onChange={(e) => setImgUrl(e.target.value)}
          placeholder="https://example.com/image.jpg"
          required
        />
        <small>Любые изображения (не-Alibaba ссылки будут автоматически конвертированы)</small>
      </div>

      <button
        type="button"
        className="toggle-filters"
        onClick={() => setShowFilters(!showFilters)}
      >
        {showFilters ? 'Скрыть фильтры' : 'Показать фильтры'}
      </button>

      {showFilters && (
        <div className="filters">
          <div className="form-group">
            <label htmlFor="sort">Сортировка</label>
            <select
              id="sort"
              value={sort}
              onChange={(e) => setSort(e.target.value as SearchParams['sort'])}
            >
              <option value="default">По умолчанию</option>
              <option value="sales">По продажам</option>
              <option value="price_up">Цена: по возрастанию</option>
              <option value="price_down">Цена: по убыванию</option>
            </select>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="priceStart">Цена от</label>
              <input
                id="priceStart"
                type="number"
                value={priceStart}
                onChange={(e) => setPriceStart(e.target.value)}
                placeholder="Мин. цена"
              />
            </div>
            <div className="form-group">
              <label htmlFor="priceEnd">Цена до</label>
              <input
                id="priceEnd"
                type="number"
                value={priceEnd}
                onChange={(e) => setPriceEnd(e.target.value)}
                placeholder="Макс. цена"
              />
            </div>
          </div>

          <div className="checkboxes">
            <label className="checkbox-label">
              <input
                type="checkbox"
                checked={supportDropshipping}
                onChange={(e) => setSupportDropshipping(e.target.checked)}
              />
              Дропшиппинг
            </label>
            <label className="checkbox-label">
              <input
                type="checkbox"
                checked={isFactory}
                onChange={(e) => setIsFactory(e.target.checked)}
              />
              Фабрика
            </label>
            <label className="checkbox-label">
              <input
                type="checkbox"
                checked={verifiedSupplier}
                onChange={(e) => setVerifiedSupplier(e.target.checked)}
              />
              Проверенный поставщик
            </label>
            <label className="checkbox-label">
              <input
                type="checkbox"
                checked={freeShipping}
                onChange={(e) => setFreeShipping(e.target.checked)}
              />
              Бесплатная доставка
            </label>
            <label className="checkbox-label">
              <input
                type="checkbox"
                checked={newArrival}
                onChange={(e) => setNewArrival(e.target.checked)}
              />
              Новинки
            </label>
          </div>
        </div>
      )}

      <button type="submit" className="submit-btn" disabled={isLoading}>
        {isLoading ? 'Поиск...' : 'Найти похожие товары'}
      </button>
    </form>
  );
}

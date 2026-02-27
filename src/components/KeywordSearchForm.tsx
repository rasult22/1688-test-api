import { useState } from 'react';
import { ApiTokenInput } from './ApiTokenInput';
import type { KeywordSearchParams } from '../types/api';

interface KeywordSearchFormProps {
  onSearch: (params: KeywordSearchParams) => void;
  isLoading: boolean;
}

export function KeywordSearchForm({ onSearch, isLoading }: KeywordSearchFormProps) {
  const [apiToken, setApiToken] = useState(() => localStorage.getItem('apiToken') || '');
  const [keyword, setKeyword] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [sort, setSort] = useState<KeywordSearchParams['sort']>('default');
  const [priceStart, setPriceStart] = useState('');
  const [priceEnd, setPriceEnd] = useState('');
  const [moq, setMoq] = useState('');
  const [newArrival, setNewArrival] = useState(false);
  const [supportDropshipping, setSupportDropshipping] = useState(false);
  const [freeShipping, setFreeShipping] = useState(false);
  const [isSuperFactory, setIsSuperFactory] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const params: KeywordSearchParams = {
      keyword,
      apiToken,
      sort,
      ...(priceStart && { price_start: priceStart }),
      ...(priceEnd && { price_end: priceEnd }),
      ...(moq && { moq: parseInt(moq) }),
      ...(newArrival && { new_arrival: true }),
      ...(supportDropshipping && { support_dropshipping: true }),
      ...(freeShipping && { free_shipping: true }),
      ...(isSuperFactory && { is_super_factory: true }),
    };

    onSearch(params);
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <ApiTokenInput value={apiToken} onChange={setApiToken} />

      <div className="form-group">
        <label htmlFor="keyword">Ключевое слово</label>
        <input
          id="keyword"
          type="text"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          placeholder="Введите ключевое слово для поиска"
          required
        />
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
              onChange={(e) => setSort(e.target.value as KeywordSearchParams['sort'])}
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

          <div className="form-group">
            <label htmlFor="moq">Минимальный заказ (MOQ)</label>
            <input
              id="moq"
              type="number"
              value={moq}
              onChange={(e) => setMoq(e.target.value)}
              placeholder="Минимальное количество"
            />
          </div>

          <div className="checkboxes">
            <label className="checkbox-label">
              <input
                type="checkbox"
                checked={newArrival}
                onChange={(e) => setNewArrival(e.target.checked)}
              />
              Новинки
            </label>
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
                checked={freeShipping}
                onChange={(e) => setFreeShipping(e.target.checked)}
              />
              Бесплатная доставка
            </label>
            <label className="checkbox-label">
              <input
                type="checkbox"
                checked={isSuperFactory}
                onChange={(e) => setIsSuperFactory(e.target.checked)}
              />
              Супер-фабрика
            </label>
          </div>
        </div>
      )}

      <button type="submit" className="submit-btn" disabled={isLoading}>
        {isLoading ? 'Поиск...' : 'Найти товары'}
      </button>
    </form>
  );
}

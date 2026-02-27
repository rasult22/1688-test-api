import { useState } from 'react';
import { ApiTokenInput } from './ApiTokenInput';
import type { FactorySearchParams } from '../types/api';

interface FactorySearchFormProps {
  onSearch: (params: FactorySearchParams) => void;
  isLoading: boolean;
}

export function FactorySearchForm({ onSearch, isLoading }: FactorySearchFormProps) {
  const [apiToken, setApiToken] = useState(() => localStorage.getItem('apiToken') || '');
  const [keywords, setKeywords] = useState('');
  const [sort, setSort] = useState<FactorySearchParams['sort']>('default');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const params: FactorySearchParams = {
      keywords,
      apiToken,
      sort,
    };

    onSearch(params);
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <ApiTokenInput value={apiToken} onChange={setApiToken} />

      <div className="form-group">
        <label htmlFor="keywords">Ключевые слова</label>
        <input
          id="keywords"
          type="text"
          value={keywords}
          onChange={(e) => setKeywords(e.target.value)}
          placeholder="Введите ключевые слова для поиска фабрик"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="sort">Сортировка</label>
        <select
          id="sort"
          value={sort}
          onChange={(e) => setSort(e.target.value as FactorySearchParams['sort'])}
        >
          <option value="default">По умолчанию</option>
          <option value="repurchase_rate">По уровню повторных покупок</option>
        </select>
      </div>

      <button type="submit" className="submit-btn" disabled={isLoading}>
        {isLoading ? 'Поиск...' : 'Найти фабрики'}
      </button>
    </form>
  );
}

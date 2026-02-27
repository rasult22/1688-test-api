import { useEffect } from 'react';

interface ApiTokenInputProps {
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
}

export function ApiTokenInput({ value, onChange, required = true }: ApiTokenInputProps) {
  useEffect(() => {
    const savedToken = localStorage.getItem('apiToken');
    if (savedToken && !value) {
      onChange(savedToken);
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    onChange(newValue);
    localStorage.setItem('apiToken', newValue);
  };

  return (
    <div className="form-group">
      <label htmlFor="apiToken">API Token</label>
      <input
        id="apiToken"
        type="password"
        value={value}
        onChange={handleChange}
        placeholder="Введите API токен"
        required={required}
      />
    </div>
  );
}

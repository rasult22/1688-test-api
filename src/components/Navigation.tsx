interface NavigationProps {
  activeSection: 'image-search' | 'keyword-search' | 'categories' | 'factories';
  onSectionChange: (section: 'image-search' | 'keyword-search' | 'categories' | 'factories') => void;
}

export function Navigation({ activeSection, onSectionChange }: NavigationProps) {
  return (
    <nav className="navigation">
      <button
        className={`nav-item ${activeSection === 'image-search' ? 'active' : ''}`}
        onClick={() => onSectionChange('image-search')}
      >
        Поиск по изображению
      </button>
      <button
        className={`nav-item ${activeSection === 'keyword-search' ? 'active' : ''}`}
        onClick={() => onSectionChange('keyword-search')}
      >
        Поиск по ключевым словам
      </button>
      <button
        className={`nav-item ${activeSection === 'categories' ? 'active' : ''}`}
        onClick={() => onSectionChange('categories')}
      >
        Просмотр категорий
      </button>
      <button
        className={`nav-item ${activeSection === 'factories' ? 'active' : ''}`}
        onClick={() => onSectionChange('factories')}
      >
        Поиск фабрик
      </button>
    </nav>
  );
}

import React from 'react';
import './Tabs.scss';

interface TabsProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const Tabs: React.FC<TabsProps> = ({ activeTab, onTabChange }) => {
  return (
    <div className="tabs">
      <button
        className={activeTab === 'all' ? 'active' : ''}
        onClick={() => onTabChange('all')}
      >
        Всі новини
      </button>
      <button
        className={activeTab === 'saved' ? 'active' : ''}
        onClick={() => onTabChange('saved')}
      >
        Збережене
      </button>
    </div>
  );
};

export default Tabs;

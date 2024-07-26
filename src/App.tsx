import React, { useState } from 'react';
import Tabs from './components/Tabs/Tabs';
import NewsList from './components/NewsList/NewsList';
import SavedNews from './components/SavedNews/SavedNews';
import SearchBar from './components/SearchBar/SearchBar'
import './App.scss';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="App">
      <Tabs activeTab={activeTab} onTabChange={setActiveTab} />
      <SearchBar onSearch={setSearchQuery} />
      {activeTab === 'all' ? (
        <NewsList searchQuery={searchQuery} />
      ) : (
        <SavedNews searchQuery={searchQuery} />
      )}
    </div>
  );
};

export default App;

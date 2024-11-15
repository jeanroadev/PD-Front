// src/App.tsx
import React, { useEffect, useState } from 'react';
import AutoComplete from './components/AutoComplete';
import './styles/loading.css';
import './styles/globals.css'

const App: React.FC = () => {
  const [isLoadingInitial, setIsLoadingInitial] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoadingInitial(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="app">
      {isLoadingInitial ? (
        <div className="loading-screen">Loading...</div>
      ) : (
        <AutoComplete />
      )}
    </div>
  );
};

export default App;

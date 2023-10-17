import React from 'react';
import Header from './components/Header/Header';
import MainPage from './components/MainPage/MainPage';
import { AuthProvider } from './service/AuthContext';
import Loader from './components/Loader.js/Loader';
function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Header />
        <MainPage />
      </AuthProvider>

    </div>
  );
}

export default App;

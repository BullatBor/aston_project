import React, { useEffect } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import './App.css';
import { Header } from './ui/components/Header/Header';
import { BrowserRouter } from 'react-router-dom';
import { useAuth } from './hooks/useAuth';
import { ThemeProvider } from './context/ThemeProvider';
import { Main } from './ui/components/Main/Main';
import { ErrorText } from './ui/components/ErrorBoundary/ErrorBoundary';

function App() {
  const { reAuth } = useAuth();

  useEffect(() => {
    const auth = reAuth();
    return () => {
      auth();
    };
  }, [reAuth]);

  return (
    <div className='App'>
      <ThemeProvider>
        <BrowserRouter>
          <ErrorBoundary fallbackRender={ErrorText}>
            <Header />
            <Main />
          </ErrorBoundary>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;

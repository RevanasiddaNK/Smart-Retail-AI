import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { Toaster } from './components/ui/sonner.jsx';
import { Provider } from 'react-redux';
import store from './redux/store.js';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import { WalletProvider } from './components/WalletContext'; // Import WalletProvider

const persistor = persistStore(store);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <WalletProvider> {/* Wrap App with WalletProvider */}
          <App />
          <Toaster />
        </WalletProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
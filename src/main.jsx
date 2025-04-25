import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { ProductProvider } from './context/ProductContext.jsx';
import { HashRouter } from 'react-router-dom';
import { CartProvider } from './context/CartContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider>
    <ProductProvider>
      <HashRouter>
        <App />
      </HashRouter>
    </ProductProvider>
    </CartProvider>
  </StrictMode>
);

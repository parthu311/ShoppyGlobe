import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ProductList from './components/Products/ProductList.jsx';
import ProductDetail from './components/Products/ProductDetail.jsx';
import { Provider } from 'react-redux';
import store from './utilits/Store/store.js';
import Cart from './components/Cart/Cart.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <ProductList />,
      },
      {
        path : '/products/:id',
        element : <ProductDetail/>
      },
      {
        path : '/Cart',
        element : <Cart/>
      }

      
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
     <RouterProvider router={router} />
     </Provider>
  </StrictMode>,
)

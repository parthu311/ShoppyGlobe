import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./utilits/Store/store.js";
import React, { Suspense, lazy } from "react";
import Loading from "./utilits/Loading.jsx"; 
import Error from "./utilits/Error.jsx";


// Lazy load the components
const ProductList = lazy(() => import("./components/Products/ProductList.jsx"));
const ProductDetail = lazy(() => import("./components/Products/ProductDetail.jsx"));
const Cart = lazy(() => import("./components/Cart/Cart.jsx"));
const AllProducts = lazy(() => import('./components/Header/AllProducts.jsx'))

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement : <Error/>,
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<Loading />}>
            <ProductList />
          </Suspense>
        ),
        
      },
      {
        path: "/products/:id",
        element: (
          <Suspense fallback={<Loading />}>
            <ProductDetail />
          </Suspense>
        ),
      },
      {
        path : '/allproducts',
        element:(
          <Suspense fallback={<Loading/>}>
            <AllProducts/>
          </Suspense>
        )
      },
      {
        path: "/cart",
        element: (
          <Suspense fallback={<Loading />}>
            <Cart />
          </Suspense>
        ),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);

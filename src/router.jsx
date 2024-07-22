import {createBrowserRouter} from "react-router-dom";
import App from './App.jsx';
import Product from './components/product.jsx'

export const router = createBrowserRouter ([
    {path: "/", element: <App />},
    {path: "/product", element: <Product />}
  ]);
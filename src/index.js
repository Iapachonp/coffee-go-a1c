import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './pages/main';
import ErrorPage from './pages/ErrorPage';
import reportWebVitals from './reportWebVitals';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Login from './components/login';
import Home from './pages/home';
import Coffees from './pages/coffees';
import Coffee from './pages/coffee';
import Cart from './components/Cart';
import Us from './pages/us';
import AdminPage from './pages/admin';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AppContextProvider, AppContext } from './context/app-context';
import WhatsAppContact from './components/WpContact';
import { CartProvider, useCart } from './context/cart-context';
import ContactUs from './pages/contactUs';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {index: true, element: <Home /> }, 
      {
        path: "/coffees",
        element: <Coffees />,
      },
      {
        path: "/admin",
        element: <AdminPage />,
      }, 
      {
        path: "/contacto",
        element: <WhatsAppContact/>,
      },
      {
        path: "/us",
        element: <Us/>,
      },
      {
        path: "/contactus",
        element: <ContactUs/>,
      },
      {
        path: "/coffees/:id",
        element: <Coffee />,
      },
    ], 
  },
  {path: "/cart", element: <Cart />},
  { path: "/login",
    element: <Login />,
    errorElement: <ErrorPage />,
    children: [
      {index: true, element: <Login /> }
    ],
  }
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CartProvider>
    <AppContextProvider> 
    <div className='container-fluid'>
    <Navbar />
    <RouterProvider router={router} />
    <Footer />
    </div>
    </AppContextProvider>
    </CartProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

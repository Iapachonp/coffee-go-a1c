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
import AdminPage from './pages/admin';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AppContextProvider, AppContext } from './context/app-context';
import WhatsAppContact from './components/WpContact';


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
        path: "/coffees/:id",
        element: <Coffee />,
      },
    ], 
  },
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
    <AppContextProvider> 
    <Navbar />
    <div className='container-fluid'>
    <RouterProvider router={router} />
    </div>
    <Footer />
    </AppContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

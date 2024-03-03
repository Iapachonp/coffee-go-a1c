import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './pages/main';
import ErrorPage from './pages/ErrorPage';
import reportWebVitals from './reportWebVitals';
import Navbar from './components/navbar';
import Login from './components/login';
import Home from './components/home';
import Coffees from './components/coffees';
import Coffee from './components/coffee';
import Choices from './components/choices';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AppContextProvider, AppContext } from './context/app-context';

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
    <div className= "App"> 
   <RouterProvider router={router} /> 
    </div>
    </AppContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

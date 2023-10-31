import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './routes/root.jsx';
import ErrorPage from "./error-page";
import People from './routes/people.jsx';
import Planets from './routes/planets.jsx';
import StartShip from './routes/startships.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "people",
        element: <People />,
      },
      {
        path: "planets",
        element: <Planets />,
      },
      {
        path: "starships",
        element: <StartShip />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

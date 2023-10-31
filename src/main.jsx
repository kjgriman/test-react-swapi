import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from "./error-page";
import People from './routes/people.jsx';
import PeopleDetails from './routes/peopleDetails.jsx';
import Planets from './routes/planets.jsx';
import StartShip from './routes/startships.jsx';
import Salutes from './pages/salutes.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <Salutes/>,
      },
      {
        path: "people/:id",
        element: <PeopleDetails />,
      },
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

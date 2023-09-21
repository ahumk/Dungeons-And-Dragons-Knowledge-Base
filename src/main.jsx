//Module imports
import React from 'react';
import ReactDOM from 'react-dom/client';
import{
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

//Style imports
import "normalize.css";
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";
import './styles/index.scss'//(needs to overwrite what is above - so place below)

//Route imports
import Layout from './routes/Layout';
import ErrorPage from './error_page';
import Home from './routes/Home';

import AbilityScoresPage from './routes/AbilityScoresPage';
import AbilityScorePage from './routes/AbilityScorePage';

import ClassesPage from './routes/ClassesPage';
import ClassPage from './routes/ClassPage';

import RacesPage from './routes/RacesPage';
import RacePage from './routes/RacePage';

//Router
const router = createBrowserRouter([
  {
    path: "/", //what is written after the / in the URL
    element: <Layout />, //components loaded
    errorElement: <ErrorPage />, //error message
    children:[ //the children that is loaded in Outlet (Layout loaded in all the children)
      {
        path: "home",
        element: <Home />
      },
      {
        path: "abilityScores",
        element: <AbilityScoresPage />
      },
      {
        path:'abilityScore/:abilityScoreName',
        element: <AbilityScorePage />
      },
      {
        path:'classes',
        element: <ClassesPage />
      },
      {
        path:'class/:className',
        element: <ClassPage />
      },
      {
        path:'races',
        element: <RacesPage />
      },
      {
        path:'race/:raceName',
        element: <RacePage />
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
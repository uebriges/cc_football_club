import './index.css';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ClubDetails from './components/routes/ClubDetails';
import Home from './components/routes/Home';
import getClubs from './helpers/getClubs';
import reportWebVitals from './reportWebVitals';
import { TClub } from './types/TClub';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    loader: async ({ params }): Promise<TClub[]> => {
      return await getClubs();
    },
  },
  {
    path: '/detailsview/:clubId',
    element: <ClubDetails />,
    loader: async ({ params }): Promise<TClub | undefined> => {
      const { clubId } = params;
      if (clubId) {
        const clubs = await getClubs();
        return clubs[parseInt(clubId)];
      }
      return;
    },
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  // <React.StrictMode>
  <RouterProvider router={router} />,
  // {/* <App /> */}
  // </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import DashboardPage from './pages/dashboard/DashboardPage.tsx';
import Tournaments from './pages//tournaments/TournamentsPage.tsx';
import WalletPage from './pages/wallet/WalletPage.tsx';
import NotFoundPage from './pages/NotFoundPage.tsx';
import TournamentDetails from './pages/tournaments/tournament-details/TournamentDetailsPage.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Navigate to="/dashboard" replace />
      },
      {
        path: "dashboard",
        element: <DashboardPage />,
      },
      {
        path: "tournaments",
        element: <Tournaments />,
      },
      {
        path: "tournaments/:tournamentId",
        element: <TournamentDetails />
      },
      {
        path: "wallet",
        element: <WalletPage />
      },
    ]
  },
  {
    path: "*",
    element: <NotFoundPage />
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

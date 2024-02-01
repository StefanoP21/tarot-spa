import { Route, Routes } from 'react-router-dom';
import { LoginPage } from '../auth/pages/LoginPage';
import { TarotRoutes } from '../tarot/routes/TarotRoutes';
import { PrivateRoute, PublicRoute } from './';

export const AppRouter = () => {
  return (
    <Routes>
      <Route
        path="/login"
        element={
          <PublicRoute>
            <LoginPage />
          </PublicRoute>
        }
      />

      <Route
        path="/*"
        element={
          <PrivateRoute>
            <TarotRoutes />
          </PrivateRoute>
        }
      />
    </Routes>
  );
};

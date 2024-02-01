import { Route, Routes } from 'react-router-dom';
import { LoginPage } from '../auth/pages/LoginPage';
import { TarotRoutes } from '../tarot/routes/TarotRoutes';
import { PrivateRoute } from './PrivateRoute';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="login" element={<LoginPage />} />

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

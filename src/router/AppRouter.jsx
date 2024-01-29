import { Route, Routes } from 'react-router-dom';
import { LoginPage } from '../auth/pages/LoginPage';
import { TarotRoutes } from '../tarot/routes/TarotRoutes';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="login" element={<LoginPage />} />

      <Route path="/*" element={<TarotRoutes />} />
    </Routes>
  );
};

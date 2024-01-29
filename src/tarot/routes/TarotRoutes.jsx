import { Navigate, Route, Routes } from 'react-router-dom';
import { NavBar, Footer } from '../../ui/components';
import { MajorPage, MinorPage, TarotPage } from '../pages';

export const TarotRoutes = () => {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path="major" element={<MajorPage />} />
        <Route path="minor" element={<MinorPage />} />

        <Route path="tarot/:id" element={<TarotPage />} />

        <Route path="/" element={<Navigate to="/major" />} />
      </Routes>

      <Footer />
    </>
  );
};

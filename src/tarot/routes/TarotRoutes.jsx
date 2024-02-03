import { Navigate, Route, Routes } from 'react-router-dom';
import { NavBar, Footer } from '../../ui/components';
import { MajorPage, MinorPage, SearchPage, TarotPage } from '../pages';

export const TarotRoutes = () => {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path="major" element={<MajorPage />} />
        <Route path="minor" element={<MinorPage />} />

        <Route path="search" element={<SearchPage />} />
        <Route path="card/:id" element={<TarotPage />} />

        <Route path="/*" element={<Navigate to="/major" />} />
      </Routes>

      <Footer />
    </>
  );
};

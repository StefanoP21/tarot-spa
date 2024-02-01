import { AuthProvider } from './auth/context';
import { AppRouter } from './router/AppRouter';

export const TarotApp = () => {
  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  );
};

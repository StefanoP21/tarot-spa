import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { AppRouter } from '../../src/router';
import { AuthContext } from '../../src/auth/context';

describe('Pruebas en <AppRouter />', () => {
  test('debe de mostrar el login si no está autenticado', () => {
    const contextValue = {
      logged: false,
    };

    render(
      <MemoryRouter initialEntries={['/major']}>
        <AuthContext.Provider value={contextValue}>
          <AppRouter />
        </AuthContext.Provider>
      </MemoryRouter>
    );

    // screen.debug();
    expect(screen.getByText('Sign in to your account')).toBeTruthy();
  });

  test('debe de mostrar la página de major si está autenticado', () => {
    const contextValue = {
      logged: true,
      user: {
        id: 1,
        name: 'Stefano',
        email: 'stefanop21@outlook.es',
        password: '12345678',
      },
    };

    render(
      <MemoryRouter initialEntries={['/major']}>
        <AuthContext.Provider value={contextValue}>
          <AppRouter />
        </AuthContext.Provider>
      </MemoryRouter>
    );

    // screen.debug();
    const img = screen.getAllByRole('img');
    expect(img).toBeTruthy();
  });
});

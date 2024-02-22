import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { AuthContext } from '../../src/auth/context';
import { PrivateRoute } from '../../src/router/PrivateRoute';

describe('Pruebas en <PrivateRputer />', () => {
  test('debe de mostrar el children si esta auenticado', () => {
    Storage.prototype.setItem = jest.fn();

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
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={['/major']}>
          <PrivateRoute>
            <h1>Ruta Privada</h1>
          </PrivateRoute>
        </MemoryRouter>
      </AuthContext.Provider>
    );

    // screen.debug();
    const h1 = screen.getByRole('heading');
    expect(h1).toBeTruthy();
    expect(localStorage.setItem).toHaveBeenCalledWith('lastPath', '/major');
  });

  test('debe de navegar si no está autenticado', () => {
    const contextValue = {
      logged: false,
    };

    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={['/major']}>
          <Routes>
            <Route
              path="major"
              element={
                <PrivateRoute>
                  <h1>Ruta Privada</h1>
                </PrivateRoute>
              }
            />
            <Route path="login" element={<h1>Login</h1>} />
          </Routes>
        </MemoryRouter>
      </AuthContext.Provider>
    );

    expect(screen.getByText('Login')).toBeTruthy();
  });
});

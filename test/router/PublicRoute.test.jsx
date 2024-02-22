import { render, screen } from '@testing-library/react';
import { AuthContext } from '../../src/auth/context';
import { PublicRoute } from '../../src/router/PublicRoute';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

describe('Pruebas en <PublicRouter />', () => {
  test('debe de mostrar el children si no está auténticado', () => {
    const contextValue = {
      logged: false,
    };

    render(
      <AuthContext.Provider value={contextValue}>
        <PublicRoute>
          <h1>Ruta Pública</h1>
        </PublicRoute>
      </AuthContext.Provider>
    );

    // screen.debug();
    expect(screen.getByText('Ruta Pública')).toBeTruthy();
  });

  test('debe de navegar si esta autenticado', () => {
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
        <MemoryRouter initialEntries={['/login']}>
          <Routes>
            <Route
              path="login"
              element={
                <PublicRoute>
                  <h1>Ruta Pública</h1>
                </PublicRoute>
              }
            />
            <Route path="/major" element={<h1>Ruta Privada</h1>} />
          </Routes>
        </MemoryRouter>
      </AuthContext.Provider>
    );

    expect(screen.queryByText('Ruta Pública')).toBeNull();
    expect(screen.getByText('Ruta Privada')).toBeTruthy();
  });
});

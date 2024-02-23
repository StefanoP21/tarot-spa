import { fireEvent, render, screen } from '@testing-library/react';
import { AuthContext } from '../../../src/auth/context';
import { MemoryRouter } from 'react-router-dom';
import { NavBar } from '../../../src/ui/components/NavBar';

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}));

describe('Pruebas en <NavBar />', () => {
  const contextValue = {
    logged: true,
    user: {
      id: 1,
      name: 'Stefano',
      email: 'stefanop21@outlook.es',
      password: '12345678',
    },
    logout: jest.fn(),
  };

  beforeEach(() => jest.clearAllMocks());

  test('debe de mostrar el nombre del usuario', () => {
    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter>
          <NavBar />
        </MemoryRouter>
      </AuthContext.Provider>
    );

    // screen.debug();
    expect(screen.getByText(contextValue.user.name)).toBeTruthy();
  });

  test('debe de llamar al logout y navigate cuadno se hace click en el botón', () => {
    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter>
          <NavBar />
        </MemoryRouter>
      </AuthContext.Provider>
    );

    const AvatarBtn = screen.getByLabelText('btn-avatar');
    fireEvent.click(AvatarBtn);
    // screen.debug();

    const LogoutBtn = screen.getByLabelText('btn-logout');
    fireEvent.click(LogoutBtn);

    expect(contextValue.logout).toHaveBeenCalled();
    expect(mockedUsedNavigate).toHaveBeenCalledWith('/login', {
      replace: true,
    });
  });
});

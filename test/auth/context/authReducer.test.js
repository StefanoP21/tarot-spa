import { authReducer } from '../../../src/auth/context';
import { types } from '../../../src/auth/types/types';

describe('Pruebas en authReducer.js', () => {
  const initialState = {
    logged: false,
  };

  const user = {
    id: 1,
    name: 'Stefano',
    email: 'stefanop21@outlook.es',
    password: '12345678',
  };

  test('debe de retornar el estado por defecto', () => {
    const state = authReducer(initialState, {});
    expect(state).toEqual(initialState);
  });

  test('debe la acción de (login) llamar el login autenticar y establecer al user', () => {
    const actionLogin = {
      type: types.login,
      payload: user,
    };

    const state = authReducer(initialState, actionLogin);
    expect(state).toEqual({ logged: true, user: actionLogin.payload });
  });

  test('debe la acción de (logout) borrar el user y logged en false ', () => {
    const actionLogin = {
      type: types.login,
      payload: user,
    };

    const actionLogout = {
      type: types.logout,
    };

    let state = authReducer(initialState, actionLogin);
    state = authReducer(state, actionLogout);
    expect(state).toEqual(initialState);
  });
});

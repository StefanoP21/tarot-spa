import { types } from '../../../src/auth/types/types';

describe('Pruebas en types.js', () => {
  test('debe de regresar los types definidos', () => {
    expect(types).toEqual({
      login: '[auth] login',
      logout: '[auth] logout',
    });
  });
});

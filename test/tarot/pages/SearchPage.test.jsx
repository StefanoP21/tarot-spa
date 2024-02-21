import { fireEvent, render, screen } from '@testing-library/react';
import { SearchPage } from '../../../src/tarot/pages/SearchPage';
import { MemoryRouter } from 'react-router-dom';

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),

  useNavigate: () => mockedUsedNavigate,
}));

describe('Pruebas en <SearchPage />', () => {
  beforeEach(() => jest.clearAllMocks());

  test('debe de mostrarse correctamente con valores por defecto', () => {
    const { container } = render(
      <MemoryRouter>
        <SearchPage />
      </MemoryRouter>
    );

    // screen.debug();
    expect(container).toMatchSnapshot();
  });

  test('debe de mostrar la imagen de "fool" y el input con el valor del queryString', () => {
    render(
      <MemoryRouter initialEntries={['/search?q=fool']}>
        <SearchPage />
      </MemoryRouter>
    );

    // screen.debug();
    const img = screen.getByRole('img');
    expect(img.src).toContain('the-fool.webp');

    const input = screen.getByRole('textbox');
    expect(input.value).toBe('fool');
  });

  test('debe de mostrar el componente con el mensaje de busqueda', () => {
    render(
      <MemoryRouter>
        <SearchPage />
      </MemoryRouter>
    );

    // screen.debug();
    const message = screen.getByText('Search for a Tarot Card');
    expect(message).toBeTruthy();
  });

  test('debe de mostrar el componente con el mensaje de error', () => {
    render(
      <MemoryRouter initialEntries={['/search?q=xyz']}>
        <SearchPage />
      </MemoryRouter>
    );

    // screen.debug();
    const message = screen.getByRole('heading', { name: 'No Results Found' });
    expect(message).toBeTruthy();
  });

  test('debe de llamar el navigate a la pantalla nueva', () => {
    const inputValue = 'fool';

    render(
      <MemoryRouter initialEntries={['/search']}>
        <SearchPage />
      </MemoryRouter>
    );

    const input = screen.getByRole('textbox');
    fireEvent.change(input, {
      target: { name: 'searchText', value: inputValue },
    });

    const searchButton = screen.getByRole('button');
    fireEvent.click(searchButton);

    expect(mockedUsedNavigate).toHaveBeenCalledWith(`?q=${inputValue}`);
  });
});

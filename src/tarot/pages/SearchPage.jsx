import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string';

import { getTarotByName } from '../helpers/getTarotByName';
import { useForm } from '../../hooks/useForm';
import { TarotList } from '../components/TarotList';
import { TarotCard } from '../components/TarotCard';

export const SearchPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { q = '' } = queryString.parse(location.search);

  const tarot = getTarotByName(q);

  const showSearch = q.length === 0;
  const showError = q.length > 0 && tarot.length === 0;

  const { searchText, onInputChange } = useForm({
    searchText: q,
  });

  const onSearchSubmit = (e) => {
    e.preventDefault();

    navigate(`?q=${searchText}`);
  };

  return (
    <div className="bg-gray-700">
      <div className="mx-auto max-w-xl px-4 py-10 sm:px-6 sm:py-10 lg:max-w-7xl lg:px-8">
        <form onSubmit={onSearchSubmit}>
          <div className="sm:col-span-4">
            <label
              htmlFor="searchText"
              className="block text-sm font-bold leading-6 text-white"
            >
              Card Name
            </label>
            <div className="mt-2">
              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-purple-600 sm:max-w-md">
                <input
                  type="text"
                  name="searchText"
                  id="searchText"
                  value={searchText}
                  onChange={onInputChange}
                  className="block flex-1 border-0 bg-transparent py-1.5 pl-2 text-gray-200 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  placeholder="The Fool"
                />
              </div>
            </div>
          </div>
        </form>

        <div className="mt-10 mb-20 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {tarot.map((card) => (
            <TarotCard key={card.id} {...card} />
          ))}
        </div>
      </div>
    </div>
  );
};

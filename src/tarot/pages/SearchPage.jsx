import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string';

import { getTarotByName } from '../helpers/getTarotByName';
import { useForm } from '../../hooks/useForm';
import { TarotCard, TarotMessage } from '../components';

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

            <div>
              <button
                type="submit"
                className="mt-4 bg-purple-600 border border-transparent rounded-md py-2 px-4 inline-flex justify-center text-sm font-bold text-white hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
              >
                Search
              </button>
            </div>
          </div>
        </form>

        {showSearch && (
          <TarotMessage
            title="Search for a Tarot Card"
            message='Use the search bar above to find a tarot card by name. For example,
            try searching for "The Fool" or "The Magician".'
            color="bg-purple-900"
          />
        )}

        {showError && (
          <TarotMessage
            title="No Results Found"
            message="We couldn't find any tarot cards that matched your search. Please try again."
            color="bg-red-900"
          />
        )}

        <div className="mt-10 mb-20 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {tarot.map((card) => (
            <TarotCard key={card.id} {...card} />
          ))}
        </div>
      </div>
    </div>
  );
};

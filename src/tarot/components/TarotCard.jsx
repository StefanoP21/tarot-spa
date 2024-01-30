import { Link } from 'react-router-dom';

export const TarotCard = ({ id, name, type }) => {
  const cardImageUrl = `/assets/tarot/${id}.webp`;

  return (
    <div className="max-w-sm bg-gray-800 border border-gray-700 rounded-sm shadow">
      <Link to={`/card/${id}`}>
        <img className="rounded-t-sm" src={cardImageUrl} alt={name} />
      </Link>

      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
          {name}
        </h5>

        <p className="mb-3 font-normal text-gray-400">{type}</p>
        <Link
          to={`/card/${id}`}
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-purple-700 rounded-lg hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-600"
        >
          Read more
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

import { useMemo } from 'react';
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom';
import { getTarotbyId } from '../helpers/getTarotbyId';

export const TarotPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const tarot = useMemo(() => getTarotbyId(id), [id]);

  const onNavigateBack = () => {
    navigate(-1);
  };

  if (!tarot) {
    return <Navigate to="/major" />;
  }

  return (
    <div className="bg-gray-700">
      <div className="pt-6">
        <nav aria-label="Breadcrumb">
          <ol
            role="list"
            className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8"
          >
            <li>
              <div className="flex items-center">
                <Link
                  to={`/${tarot.path}`}
                  className="mr-2 text-sm font-medium text-white"
                >
                  {tarot.type}
                </Link>
                <svg
                  width={16}
                  height={20}
                  viewBox="0 0 16 20"
                  fill="currentColor"
                  aria-hidden="true"
                  className="h-5 w-4 text-gray-300"
                >
                  <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                </svg>
              </div>
            </li>

            <li className="text-sm">
              <a
                href={tarot.id}
                aria-current="page"
                className="font-medium text-gray-400 hover:text-gray-200"
              >
                {tarot.name}
              </a>
            </li>
          </ol>
        </nav>

        {/* Image */}
        <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
          <div className="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
            <img
              src={`/public/assets/tarot/${tarot.id}.webp`}
              alt={tarot.name}
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>

        {/* Card info */}
        <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
          <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            <h1 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
              {tarot.name}
            </h1>
          </div>

          {/* Location */}
          <div className="mt-4 lg:row-span-3 lg:mt-0">
            <h2 className="sr-only">Product information</h2>
            <p className="text-xl tracking-tight text-gray-200">
              {tarot.location}
            </p>

            <button
              className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-purple-700 px-8 py-3 text-base font-medium text-white hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-600 focus:ring-offset-2"
              onClick={onNavigateBack}
            >
              Back
            </button>
          </div>

          <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
            {/* Journal and Description */}
            <div>
              <h2 className="text-md font-bold text-gray-100">Journal</h2>
              <div className="mt-4 space-y-6">
                <p className="text-base text-gray-300">{tarot.journal}</p>
              </div>
            </div>

            <div className="mt-10">
              <h2 className="text-sm font-bold text-gray-200">Description</h2>
              <div className="mt-4 space-y-6">
                <p className="text-sm text-gray-400">{tarot.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

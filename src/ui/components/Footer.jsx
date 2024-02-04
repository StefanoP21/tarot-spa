import { NavLink } from 'react-router-dom';

const navigation = [
  { name: 'Major', to: '/major' },
  { name: 'Minor', to: '/minor' },
  { name: 'Search', to: '/search' },
];

export const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 z-20 w-full bg-gray-800 py-2">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2024{' '}
          <a
            href="https://stefano.vercel.app/"
            className="hover:underline"
            target="_blank"
          >
            Stefano Palomino
          </a>
          . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          {navigation.map((item) => (
            <NavLink
              key={item.name}
              to={item.to}
              className="hover:underline me-4 md:me-6"
            >
              {item.name}
            </NavLink>
          ))}
        </ul>
      </div>
    </footer>
  );
};

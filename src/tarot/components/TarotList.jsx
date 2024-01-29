import { useMemo } from 'react';
import { getTarotByType } from '../helpers/getTarotByType';
import { TarotCard } from './TarotCard';

export const TarotList = ({ type }) => {
  const tarot = useMemo(() => getTarotByType(type), [type]);

  return (
    <div className="bg-gray-700">
      <div className="mx-auto max-w-xl px-4 py-10 sm:px-6 sm:py-10 lg:max-w-7xl lg:px-8">
        <div className="my-4 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {tarot.map((card) => (
            <TarotCard key={card.id} {...card} />
          ))}
        </div>
      </div>
    </div>
  );
};

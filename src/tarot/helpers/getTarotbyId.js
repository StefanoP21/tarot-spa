import { tarot } from '../data/tarot';

export const getTarotbyId = (id) => {
  return tarot.find((card) => card.id === id);
};

import { tarot } from '../data/tarot';

export const getTarotByName = (name = '') => {
  name = name.toLowerCase().trim();

  if (!name) return [];

  return tarot.filter((card) => card.name.toLowerCase().includes(name));
};

import { tarot } from '../data/tarot';

export const getTarotByType = (type) => {
  const validTypes = ['Major Arcana', 'Minor Arcana'];
  if (!validTypes.includes(type)) {
    throw new Error(`Invalid type: ${type}`);
  }

  return tarot.filter((card) => card.type === type);
};

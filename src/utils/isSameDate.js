export const isSameDate = (lastTime, now) => {
  return lastTime?.toLocaleDateString() === now?.toLocaleDateString();
};

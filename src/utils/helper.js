const generateId = () => {
  return Math.ceil(Math.random(9) * 10000000);
};

export { generateId };

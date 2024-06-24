// Only for testing purposes
export const useClass = (classObj, className) => {
  const classes = Object.values(classObj).filter((cls) =>
    cls.includes(className)
  )[0];

  return classes;
};

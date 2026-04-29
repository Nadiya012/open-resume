export const cx = (...classes: Array<string | boolean | undefined>) => {
  return classes.filter(Boolean).join(" ");
};

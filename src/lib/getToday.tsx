const fromOneToTwo = (arg: number) => {
  if (arg.toString().length < 2) {
    return "0" + arg.toString();
  }
  return arg.toString();
};

export const today = () => {
  let year = new Date().getFullYear();
  let month = fromOneToTwo(new Date().getMonth() + 1);
  let day = fromOneToTwo(new Date().getDate());
  let td = `${year}年${month}月${day}`;
  return td;
};

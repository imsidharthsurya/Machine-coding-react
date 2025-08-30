export const formatDate = (date) => {
  let ind = date.indexOf("GMT");
  let newDate = date.slice(0, ind);
  return newDate;
};

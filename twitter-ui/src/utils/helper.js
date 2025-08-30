export const formatDate = (date) => {
  let ind = date.toString().indexOf("GMT");
  let newDate = date.slice(0, ind);
  return newDate;
};

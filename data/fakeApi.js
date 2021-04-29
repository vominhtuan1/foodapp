export function getFoodByName(name) {
  if (!name) return Foods;
  return Foods.filter((x) => {
    return x.name.toUpperCase().includes(name.toUpperCase());
  });
}
export function getFoodByCategory(categoryId) {
  let food = Foods.filter((item) => item.categoryId == categoryId);

  return food;
}

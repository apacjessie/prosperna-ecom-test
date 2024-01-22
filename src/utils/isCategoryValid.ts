function isCategoryValid(category: string | undefined) {
  const validCategory = [
    "tshirts",
    "shirts",
    "dress",
    "jackets",
    "sweaters",
    undefined,
  ];

  return validCategory.includes(category);
}

export default isCategoryValid;

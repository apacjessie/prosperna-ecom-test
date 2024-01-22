function getCategoryDescription(category: string | undefined): string {
  switch (category) {
    case undefined:
      return "Browse Our Products";
    case "tshirts":
      return "T-shirts For you!";
    case "shirts":
      return "Shirts For you!";
    case "jackets":
      return "Jackets For you!";
    case "sweaters":
      return "Sweaters For you!";
    case "dress":
      return "Dress For you!";
    default:
      return "";
  }
}

export default getCategoryDescription;

function getCategoryDescription(category: string | undefined): string {
  switch (category) {
    case undefined:
      return "Browse our products";
    case "tshirts":
      return "T-shirts for you!";
    case "shirts":
      return "Shirts for you!";
    case "jackets":
      return "Jackets for you!";
    case "sweaters":
      return "Sweaters for you!";
    case "dress":
      return "Dress for you!";
    default:
      return "";
  }
}

export default getCategoryDescription;

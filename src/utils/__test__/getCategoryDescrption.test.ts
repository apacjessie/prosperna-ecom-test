import getCategoryDescription from "../getCategoryDescription";

describe("Category Description", () => {
  it("Correct description", () => {
    const testValue = [
      { value: undefined, description: "Browse our products" },
      {
        value: "tshirts",
        description: "T-shirts for you!",
      },
      {
        value: "shirts",
        description: "Shirts for you!",
      },
      {
        value: "jackets",
        description: "Jackets for you!",
      },
      {
        value: "sweaters",
        description: "Sweaters for you!",
      },
      {
        value: "dress",
        description: "Dress for you!",
      },
    ];

    for (const object of testValue) {
      expect(getCategoryDescription(object.value)).toBe(object.description);
    }
  });

  it("Incorrect Description", () => {
    expect(getCategoryDescription("wrong_value")).toBe("");
  });
});

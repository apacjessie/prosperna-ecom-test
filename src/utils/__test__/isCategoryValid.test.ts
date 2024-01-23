import isCategoryValid from "@/utils/isCategoryValid";

describe("Category", () => {
  it("Correct category", () => {
    expect(isCategoryValid("tshirts")).toBe(true);
    expect(isCategoryValid("shirts")).toBe(true);
    expect(isCategoryValid("dress")).toBe(true);
    expect(isCategoryValid("jackets")).toBe(true);
    expect(isCategoryValid("sweaters")).toBe(true);
    expect(isCategoryValid(undefined)).toBe(true);
  });
  it("Wrong category", () => {
    expect(isCategoryValid("wrong")).toBe(false);
    expect(isCategoryValid("category")).toBe(false);
  });
});

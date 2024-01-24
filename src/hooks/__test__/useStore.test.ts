import useStore from "../useStore";
import { Category, Gender, Size } from "@/lib/types";
import { renderHook, act } from "@testing-library/react";

const products = [
  {
    id: "123",
    name: "Product 1",
    price: 100,
    category: Category.SHIRTS,
    gender: Gender.MEN as Gender.MEN,
    quantity: 1,
    rating: 0,
    image: "",
    size: Size.MEDIUM,
  },
  {
    id: "456",
    name: "Product 1",
    price: 100,
    category: Category.SHIRTS,
    gender: Gender.MEN as Gender.MEN,
    quantity: 1,
    rating: 0,
    image: "",
    size: Size.MEDIUM,
  },
];

describe("useStore", () => {
  it("Add product to cart", () => {
    const { result } = renderHook(() => useStore());

    act(() => result.current.addToCart(products[0]));

    assert.equal(result.current.cart.length, 1);
    assert.equal(result.current.cart[0], products[0]);
  });

  it("Remove product to cart", () => {
    const { result } = renderHook(() => useStore());

    act(() => {
      result.current.addToCart(products[0]);
      result.current.addToCart(products[1]);
      result.current.removeToCart(products[0].id);
    });

    assert.equal(result.current.cart.length, 1);
    assert.equal(result.current.cart[0], products[1]);
  });

  it("Change product quantity", () => {
    const { result } = renderHook(() => useStore());

    act(() => {
      result.current.addToCart(products[0]);
      result.current.changeProductQuantity(products[0].id, 10);
    });

    assert.equal(result.current.cart[0].quantity, 10);
  });
});

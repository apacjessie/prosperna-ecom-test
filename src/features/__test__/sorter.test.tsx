import Sorter from "../sorter";
import { render, cleanup, screen, renderHook } from "@testing-library/react";
import { PriceSort } from "@/lib/types";
import userEvent from "@testing-library/user-event";
import { useState } from "react";

window.HTMLElement.prototype.scrollIntoView = vi.fn();
window.HTMLElement.prototype.hasPointerCapture = vi.fn();
window.HTMLElement.prototype.releasePointerCapture = vi.fn();

describe("Sorter", () => {
  afterEach(() => {
    cleanup();
  });

  it("Render with default value", () => {
    render(<Sorter value={PriceSort.ASCENDING} setValue={() => {}} />);

    assert.exists(screen.getByText("Sort by:"));
    assert.exists(screen.getByText("Price: Ascending"));
  });

  it("Correct Option", async () => {
    render(<Sorter value={PriceSort.ASCENDING} setValue={() => {}} />);

    await userEvent.click(screen.getByTestId("select-trigger"));

    assert.exists(screen.getByTestId("select-dropdown"));
    assert.exists(screen.getByTestId("select-option-ascending"));
    assert.exists(screen.getByTestId("select-option-descending"));
  });

  it("Can change option to ascending and descending", async () => {
    const { result } = renderHook(() =>
      useState<PriceSort>(PriceSort.ASCENDING)
    );

    render(<Sorter value={result.current[0]} setValue={result.current[1]} />);

    await userEvent.click(screen.getByTestId("select-trigger"));
    await userEvent.click(screen.getByTestId("select-option-descending"));

    expect(result.current[0]).toBe(PriceSort.DESCENDING);

    await userEvent.click(screen.getByTestId("select-trigger"));
    await userEvent.click(screen.getByTestId("select-option-ascending"));

    expect(result.current[0]).toBe(PriceSort.ASCENDING);
  });
});

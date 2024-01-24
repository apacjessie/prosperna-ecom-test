import { render, renderHook, screen } from "@testing-library/react";
import Filter from "../filter";
import { Gender } from "@/lib/types";
import userEvent from "@testing-library/user-event";
import { useState } from "react";

window.HTMLElement.prototype.scrollIntoView = vi.fn();
window.HTMLElement.prototype.hasPointerCapture = vi.fn();
window.HTMLElement.prototype.releasePointerCapture = vi.fn();

describe("Filter", () => {
  it("Correct Default Value", () => {
    render(<Filter value={Gender.ALL} setValue={() => {}} />);

    assert.exists(screen.getByText("Filter: (A)"));
  });

  it("All Options Available", async () => {
    render(<Filter value={Gender.ALL} setValue={() => {}} />);

    await userEvent.click(screen.getByTestId("dropdown-trigger"));
    assert.exists(screen.getByTestId("dropdown-content"));
    assert.exists(screen.getByTestId("filter-all"));
    assert.exists(screen.getByTestId("filter-men"));
    assert.exists(screen.getByTestId("filter-women"));
  });
  it("Can change filter to MEN", async () => {
    const { result } = renderHook(() => useState<Gender>(Gender.ALL));

    render(<Filter value={result.current[0]} setValue={result.current[1]} />);

    await userEvent.click(screen.getByTestId("dropdown-trigger"));
    await userEvent.click(screen.getByTestId("filter-men"));

    expect(result.current[0]).toBe(Gender.MEN);
  });
  it("Can change filter to all option", async () => {
    const { result } = renderHook(() => useState<Gender>(Gender.ALL));

    render(<Filter value={result.current[0]} setValue={result.current[1]} />);

    await userEvent.click(screen.getByTestId("dropdown-trigger"));
    await userEvent.click(screen.getByTestId("filter-men"));

    expect(result.current[0]).toBe(Gender.MEN);

    await userEvent.click(screen.getByTestId("dropdown-trigger"));
    await userEvent.click(screen.getByTestId("filter-women"));

    expect(result.current[0]).toBe(Gender.WOMEN);

    await userEvent.click(screen.getByTestId("dropdown-trigger"));
    await userEvent.click(screen.getByTestId("filter-all"));

    expect(result.current[0]).toBe(Gender.ALL);
  });
});

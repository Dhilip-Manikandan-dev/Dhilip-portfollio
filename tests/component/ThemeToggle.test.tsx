import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

const mockSetTheme = vi.fn();

vi.mock("next-themes", () => ({
  useTheme: () => ({
    resolvedTheme: "dark",
    setTheme: mockSetTheme,
  }),
}));

describe("ThemeToggle Component", () => {
  it("renders the toggle button with accessible aria-label", () => {
    render(<ThemeToggle />);
    const button = screen.getByRole("button", { name: /switch to light theme/i });
    expect(button).toBeInTheDocument();
  });

  it("calls setTheme when clicked", () => {
    render(<ThemeToggle />);
    const button = screen.getByRole("button", { name: /switch to light theme/i });
    fireEvent.click(button);
    expect(mockSetTheme).toHaveBeenCalledWith("light");
  });
});

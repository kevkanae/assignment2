import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Home from "../pages/Home";

describe("do my inputs and btn", () => {
  test("exist", () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );

    // let inputName = screen.getByRole("Name-inp") as HTMLInputElement;
    let btn = screen.getByRole("sub-button") as HTMLButtonElement;
    expect(btn).toBeInTheDocument();
  });
});

import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Quiz from "../pages/Quiz";

describe("do my inputs", () => {
  test("exist", () => {
    render(
      <BrowserRouter>
        <Quiz />
      </BrowserRouter>
    );

    let btnPrev = screen.getByRole("prev-q") as HTMLButtonElement;
    let btnNext = screen.getByRole("next-q") as HTMLButtonElement;

    expect(btnNext).toBeInTheDocument();
    expect(btnPrev).toBeInTheDocument();
  });
});

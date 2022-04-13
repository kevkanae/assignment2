import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Score from "../pages/Score";

describe("do my inputs", () => {
  test("exist", () => {
    render(
      <BrowserRouter>
        <Score />
      </BrowserRouter>
    );

    let pie = screen.getByRole("score-piechart");

    expect(pie).toBeInTheDocument();
  });
});

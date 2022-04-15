import React from "react";
import renderer from "react-test-renderer";
import TestRenderer from "react-test-renderer";
import "@testing-library/jest-dom/extend-expect";
import {screen, render} from "@testing-library/react";
import {BrowserRouter} from "react-router-dom";
import Quiz from "../pages/Quiz";
import Question from "../components/Question";

test("Snapshot of Quiz component", () => {
  const comp = renderer.create(
      <BrowserRouter>
        <Quiz/>
      </BrowserRouter>
  );
  let tree = comp.toJSON();
  expect(tree).toMatchSnapshot();
});

describe("In Quiz,", () => {
  test("are the next and previous buttons present", () => {
    render(<BrowserRouter>
      <Quiz/>
    </BrowserRouter>);

    let btnPrev = screen.getByRole("prev-q")
    let btnNext = screen.getByRole("next-q")

    expect(btnNext).toBeInTheDocument();
    expect(btnPrev).toBeInTheDocument();
  });

  test("is the save button present", () => {
    render(<BrowserRouter>
      <Quiz/>
    </BrowserRouter>);

    let btnSave = screen.getByRole("save-button")
    expect(btnSave).toBeInTheDocument();
  });

  test("is the Question component present", () => {
    TestRenderer.create(
        <BrowserRouter>
          <Question q={"Question"} index={7}/>
        </BrowserRouter>
    );
  });

  test("does the sub components of question work", () => {
    render(<BrowserRouter>
    <Question q={"Question"} index={4}/>
  </BrowserRouter>);

    let matchqa = screen.getByRole("match-qa")
    // let normalq = screen.getByRole("normal-q")
    // let heading = screen.getByText(/Match the Following (eg: 1: a, 2: b)/i)
    expect(matchqa).toBeInTheDocument();
    // expect(normalq).toBeInTheDocument();
    // expect(heading).toBeInTheDocument();
  });
});
import renderer from "react-test-renderer";
import TestRenderer from "react-test-renderer";
import "@testing-library/jest-dom/extend-expect";
import { screen, render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Quiz from "../pages/Quiz";
import Question from "../components/Question";
import NumberNav from "../components/NumberNav";
import GridOptions from "../components/GridOptions";
import FinalSubmitButton from "../components/FinalSubmitButton";

test("Snapshot of Quiz component", () => {
  const comp = renderer.create(
    <BrowserRouter>
      <Quiz lang={"English"} name={"XYZ"} />
    </BrowserRouter>
  );
  let tree = comp.toJSON();
  expect(tree).toMatchSnapshot();
});

describe("In Quiz,", () => {
  test("are the next and previous buttons present", () => {
    render(
      <BrowserRouter>
        <Quiz lang={"English"} name={"XYZ"} />
      </BrowserRouter>
    );

    let btnPrev = screen.getByRole("prev-q");
    let btnNext = screen.getByRole("next-q");

    expect(btnNext).toBeInTheDocument();
    expect(btnPrev).toBeInTheDocument();
  });

  test("is the save button present", () => {
    render(
      <BrowserRouter>
        <Quiz lang={"English"} name={"XYZ"} />
      </BrowserRouter>
    );

    let btnSave = screen.getByRole("save-button");
    expect(btnSave).toBeInTheDocument();
  });

  test("is the Question component present", () => {
    TestRenderer.create(
      <BrowserRouter>
        <Question q={"Question"} index={7} />
      </BrowserRouter>
    );
  });

  test("does the sub components of question work", () => {
    render(
      <BrowserRouter>
        <Question q={"Question"} index={4} />
      </BrowserRouter>
    );

    let matchqa = screen.getByRole("match-qa");
    expect(matchqa).toBeInTheDocument();
  });

  test("does the sub components of numbernav work", () => {
    render(
      <BrowserRouter>
        <NumberNav
          qNumber={4}
          setCurrentIndex={() => {}}
          status={false}
          currIndex={4}
          mapIndex={3}
        />
      </BrowserRouter>
    );

    let matchqa = screen.getByRole("number-nav");
    expect(matchqa).toBeInTheDocument();
  });
  test("does the sub components of finalSubmit work", () => {
    render(
      <BrowserRouter>
        <FinalSubmitButton data={[]} matchData={[]} />
      </BrowserRouter>
    );

    let a = screen.getByRole("fsub");
    let b = screen.getByRole("fsubHolder");
    expect(a).toBeInTheDocument();
    expect(b).toBeInTheDocument();
  });
  test("does the sub components of gridOptions work at index !=4", () => {
    render(
      <BrowserRouter>
        <GridOptions
          ans={{}}
          options={"A"}
          ansIndex={0}
          clickedAns={() => {}}
          currIndex={1}
          mapIndex={1}
          setMatchData={() => {}}
        />
      </BrowserRouter>
    );

    let a = screen.getByRole("gridOpt");
    let b = screen.getByRole("optopt");
    let c = screen.getByRole("optBtn");
    expect(a).toBeInTheDocument();
    expect(b).toBeInTheDocument();
    expect(c).toBeInTheDocument();
  });

  test("does the sub components of gridOptions work at index ===4", () => {
    render(
      <BrowserRouter>
        <GridOptions
          ans={{}}
          options={"A"}
          ansIndex={0}
          clickedAns={() => {}}
          currIndex={4}
          mapIndex={3}
          setMatchData={() => {}}
        />
      </BrowserRouter>
    );

    let a = screen.getByRole("gridOpt4");
    let b = screen.getByRole("matchinp");
    expect(a).toBeInTheDocument();
    expect(b).toBeInTheDocument();
  });
});

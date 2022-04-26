import renderer from "react-test-renderer";
import "@testing-library/jest-dom/extend-expect";

import { BrowserRouter } from "react-router-dom";
import FinalSubmitButton from "../components/FinalSubmitButton";

test("Snapshot of Home component", () => {
  const comp = renderer.create(
    <BrowserRouter>
      <FinalSubmitButton data={[]} matchData={[{}]} />
    </BrowserRouter>
  );
  let tree = comp.toJSON();
  expect(tree).toMatchSnapshot();
});

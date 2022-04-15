import React from "react";
import renderer from "react-test-renderer";
import "@testing-library/jest-dom/extend-expect";
import {screen, render} from "@testing-library/react";
import Home from "../pages/Home"
import {BrowserRouter} from "react-router-dom";

test("Snapshot of Home component", () => {
    const comp = renderer.create(
        <BrowserRouter>
            <Home/>
        </BrowserRouter>
    );
    let tree = comp.toJSON();
    expect(tree).toMatchSnapshot();
});

describe("In Home,", () => {
    test("is the header present", () => {
        render(<BrowserRouter>
            <Home/>
        </BrowserRouter>);
        const heading = screen.getByText(/Enter Your Details/i);
        expect(heading).toBeInTheDocument();
    });

    test("is the name input present", () => {
        render(<BrowserRouter>
            <Home/>
        </BrowserRouter>);
        const nameInput = screen.getByLabelText(/Name/i);
        expect(nameInput).toBeInTheDocument();
    });

    test("is the language input present", () => {
        render(<BrowserRouter>
            <Home/>
        </BrowserRouter>);
        const languageInput = screen.getByLabelText(/Language-Select/i);
        expect(languageInput).toBeInTheDocument();
    });

    test("is the submit button present", () => {
        render(<BrowserRouter>
            <Home/>
        </BrowserRouter>);
        const submitButton = screen.getByRole(/sub-button/i);
        expect(submitButton).toBeInTheDocument();
    });
});
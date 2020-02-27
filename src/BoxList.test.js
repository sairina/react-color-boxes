import React from "react";
import { render, fireEvent } from "@testing-library/react";
import BoxList from "./BoxList";

it("renders without crashing", function () {
  render(<BoxList />);
});

it("matches snapshot - new BoxList", function() {
  const { asFragment } = render(<BoxList />);
  expect(asFragment()).toMatchSnapshot();
});

it("it can add a new box", function() {
  const {getByLabelText, queryByText } = render(<BoxList />);

  expect(queryByText("X")).not.toBeInTheDocument();

  const backgroundColorInput = getByLabelText("Background Color:");
  const widthInput = getByLabelText("Width:");
  const heightInput = getByLabelText("Height:");
  const submitButton = queryByText("Add new box");

  fireEvent.change(backgroundColorInput, { target: { value: "blue"}});
  fireEvent.change(widthInput, { target: { value: 50}});
  fireEvent.change(heightInput, { target: { value: 50}});
  fireEvent.click(submitButton);

  expect(queryByText("X")).toBeInTheDocument();
});

it("it can delete a box", function() {
  const {getByLabelText, queryByText } = render(<BoxList />);

  const backgroundColorInput = getByLabelText("Background Color:");
  const widthInput = getByLabelText("Width:");
  const heightInput = getByLabelText("Height:");
  const submitButton = queryByText("Add new box");

  fireEvent.change(backgroundColorInput, { target: { value: "blue"}});
  fireEvent.change(widthInput, { target: { value: 50}});
  fireEvent.change(heightInput, { target: { value: 50}});
  fireEvent.click(submitButton);

  expect(queryByText("X")).toBeInTheDocument();

  const removeButton = queryByText("X");

  fireEvent.click(removeButton);

  expect(queryByText("X")).not.toBeInTheDocument();
});

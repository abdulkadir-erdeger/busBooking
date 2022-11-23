import React from "react";
import { render, screen, fireEvent } from "@testing-library/react-native";
import SeatSelectionScreen from "../../src/screen/SeatSelectionScreen";

test("render correctly", () => {
  render(<SeatSelectionScreen />);
  expect(screen.toJSON()).toMatchSnapshot();
});

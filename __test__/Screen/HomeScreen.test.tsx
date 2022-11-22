import React from "react";
import { render, screen } from "@testing-library/react-native";
import HomeScreen from "../../src/screen/HomeScreen";

const mockedDispatch = jest.fn();

jest.mock("@react-navigation/native", () => {
  const actualNav = jest.requireActual("@react-navigation/native");
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: jest.fn(),
      dispatch: mockedDispatch,
    }),
  };
});

test("render correctly", () => {
  render(<HomeScreen />);
  expect(screen.toJSON()).toMatchSnapshot();
});

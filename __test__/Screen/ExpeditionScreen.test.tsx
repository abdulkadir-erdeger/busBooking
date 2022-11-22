import React from "react";
import { render, screen } from "@testing-library/react-native";
import ExpeditionScreen from "../../src/screen/ExpeditionScreen";

const mockedDispatch = jest.fn();

jest.mock("@react-navigation/native", () => {
  const actualNav = jest.requireActual("@react-navigation/native");
  return {
    ...actualNav,
    useRoute: () => ({
      route: jest.fn(),
      dispatch: mockedDispatch,
    }),
    useNavigation: () => ({
      navigation: jest.fn(),
      dispatch: mockedDispatch,
    }),
  };
});

test("render correctly", () => {
  render(<ExpeditionScreen />);
  expect(screen.toJSON()).toMatchSnapshot();
});

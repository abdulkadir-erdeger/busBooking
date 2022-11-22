import React from "react";
import { render, screen } from "@testing-library/react-native";
import ExpeditionScreen from "../../src/screen/ExpeditionScreen";

const mockedNavigate = jest.fn();
const mockedRoute = jest.fn();

jest.mock("@react-navigation/native", () => {
  const actualNav = jest.requireActual("@react-navigation/native");
  return {
    ...actualNav,
    useRoute: () => ({
      route: mockedRoute,
    }),
    useNavigation: () => ({
      navigation: mockedNavigate,
    }),
  };
});

test("render correctly", () => {
  render(<ExpeditionScreen />);
  expect(screen.toJSON()).toMatchSnapshot();
});

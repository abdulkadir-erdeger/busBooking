import React from "react";
import { render, screen, fireEvent } from "@testing-library/react-native";
import HomeScreen from "../../src/screen/HomeScreen";

const mockedNavigate = jest.fn();

jest.mock("@react-navigation/native", () => {
  const actualNav = jest.requireActual("@react-navigation/native");
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: mockedNavigate,
    }),
  };
});

test("render correctly", () => {
  render(<HomeScreen />);
  expect(screen.toJSON()).toMatchSnapshot();
});

test("uses useNavigation when pressed", async () => {
  const { getAllByTestId } = render(<HomeScreen />);
  const button = getAllByTestId("buttonNavigate");
  const route = {
    ay: "Kasım",
    biletTürü: "tekYon",
    gun: 22,
    haftaninGunu: "Salı",
    kalkıs: "istanbul",
    varis: "ankara",
    yasDurum: "yetiskin",
  };
  await fireEvent.press(button[0]);
  expect(mockedNavigate).toHaveBeenCalledWith("Expedition", route);
});

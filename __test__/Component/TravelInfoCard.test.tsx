import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import TravelInfoCard from "../../src/component/TravelInfoCard";

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

const testData = {
  id: 1,
  kalkisSaati: "7:15",
  inisSaati: "13:00",
  kalkisYeri: "Istanbul/Ümraniye Dudulu",
  inisYeri: "Ankara/Otogarı",
  seferBilgileri: "5:45",
  fiyat: "110,00",
  ozellikler: "",
};

test("should render kalkisSaati data correctly", () => {
  const { getByTestId } = render(<TravelInfoCard x={testData} />);
  const kalkisSaatiText = getByTestId("kalkisSaati").children[0];
  expect(kalkisSaatiText).toBe(testData.kalkisSaati);
});

test("should render inisSaati data correctly", () => {
  const { getByTestId } = render(<TravelInfoCard x={testData} />);
  const inisSaatiText = getByTestId("inisSaati").children[0];
  expect(inisSaatiText).toBe(testData.inisSaati);
});

test("should render kalkisYeri data correctly", () => {
  const { getByTestId } = render(<TravelInfoCard x={testData} />);
  const kalkisYeriText = getByTestId("kalkisYeri").children[0];
  expect(kalkisYeriText).toBe(testData.kalkisYeri);
});

test("should render inisYeri data correctly", () => {
  const { getByTestId } = render(<TravelInfoCard x={testData} />);
  const inisYeriText = getByTestId("inisYeri").children[0];
  expect(inisYeriText).toBe(testData.inisYeri);
});

test("should render fiyat data correctly", () => {
  const fiyat = `₺ ${testData.fiyat}`;
  const { getByTestId } = render(<TravelInfoCard x={testData} />);
  const fiyatText = getByTestId("fiyat").children;
  let text = "";
  for (const item of fiyatText) {
    text += item;
  }
  expect(text).toBe(fiyat);
});

test("uses useNavigation when pressed", async () => {
  const { getAllByTestId } = render(<TravelInfoCard x={testData} />);
  const button = getAllByTestId("buttonNavigate");
  await fireEvent.press(button[0]);
  expect(mockedNavigate).toHaveBeenCalledWith("SeatSection");
});

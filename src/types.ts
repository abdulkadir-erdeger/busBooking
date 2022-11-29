import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";

export type RootStackParamList = {
  Home: undefined;
  Expedition: Info;
  SeatSection: travelID;
};
export type homeScreenProp = NativeStackNavigationProp<
  RootStackParamList,
  "Expedition"
>;

type Props = NativeStackScreenProps<RootStackParamList, "Expedition">;
export type ProfileScreenRouteProp = Props["route"];

type Props2 = NativeStackScreenProps<RootStackParamList, "SeatSection">;
export type ProfileScreenRouteProp2 = Props2["route"];

export type Info = {
  biletTürü?: string;
  kalkıs?: string;
  varis?: string;
  haftaninGunu?: string;
  gun?: number;
  ay?: string;
  yasDurum?: string;
};

export type travelInfo = {
  id: number;
  kalkisSaati: string;
  inisSaati: string;
  kalkisYeri: string;
  inisYeri: string;
  seferBilgileri: string;
  fiyat: string;
  ozellikler: string;
};

export type travelID = {
  id: number;
};

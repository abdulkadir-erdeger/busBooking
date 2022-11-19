import { View, Text, FlatList } from "react-native";
import { useRoute } from "@react-navigation/native";
import { FontAwesome5 } from "@expo/vector-icons";
import styles from "./ExpeditionScreen.styles";
import TravelInfoCard from "../../component/TravelInfoCard";
import { ProfileScreenRouteProp } from "../../types";
import React from "react";

const ExpeditionScreen = () => {
  const route = useRoute<ProfileScreenRouteProp>();
  const data: any = route?.params;

  const traveldata = [
    {
      id: 1,
      kalkisSaati: "7:15",
      inisSaati: "13:00",
      kalkisYeri: "Istanbul/Ümraniye Dudulu",
      inisYeri: "Ankara/Otogarı",
      seferBilgileri: "5:45",
      fiyat: 110,
      ozellikler: "",
    },
    {
      id: 1,
      kalkisSaati: "8:00",
      inisSaati: "15:00",
      kalkisYeri: "Istanbul/Esenler Otogarı",
      inisYeri: "Ankara/Otogarı",
      seferBilgileri: "7:00",
      fiyat: 110,
      ozellikler: "",
    },
  ];
  return (
    <View style={styles.container}>
      <View style={styles.travelInfoCard}>
        <View style={styles.infoCitys}>
          <Text style={styles.cityText}>{data?.kalkıs.toUpperCase()}</Text>
          <FontAwesome5
            style={styles.cityText}
            name="long-arrow-alt-right"
            size={24}
            color="black"
          />
          <Text style={styles.cityText}>{data?.varis.toUpperCase()}</Text>
        </View>
        <View style={styles.infoCitys}>
          <Text>{data?.haftaninGunu}, </Text>
          <Text>{data?.gun} </Text>
          <Text>{data?.ay} </Text>
          <Text style={{ textTransform: "capitalize" }}>{data?.yasDurum}</Text>
        </View>
      </View>
      <FlatList
        data={traveldata}
        renderItem={({ item }) => <TravelInfoCard x={item} />}
        keyExtractor={(_, index) => index.toString()}
      />
    </View>
  );
};

export default ExpeditionScreen;

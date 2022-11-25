import { View, Text, FlatList } from "react-native";
import { useRoute } from "@react-navigation/native";
import { FontAwesome5 } from "@expo/vector-icons";
import styles from "./ExpeditionScreen.styles";
import TravelInfoCard from "../../component/TravelInfoCard";
import axios from "axios";
import { ProfileScreenRouteProp } from "../../types";
import React, { useEffect, useState } from "react";

const ExpeditionScreen = () => {
  const route = useRoute<ProfileScreenRouteProp>();
  const data: any = route?.params;
  const [travelData, setTravelData] = useState();

  useEffect(() => {
    axios
      .get("http://10.0.2.2:5000/travelData/")
      .then((res) => setTravelData(res.data))
      .catch((err) => console.log(err));
  }, []);

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
        data={travelData}
        renderItem={({ item }) => <TravelInfoCard x={item} />}
        keyExtractor={(_, index) => index.toString()}
      />
    </View>
  );
};

export default ExpeditionScreen;

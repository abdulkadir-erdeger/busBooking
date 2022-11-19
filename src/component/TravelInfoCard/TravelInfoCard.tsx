import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import {
  Entypo,
  FontAwesome,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { RootStackParamList } from "../../types";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import styles from "./TravelInfoCard.style";
import { travelInfo } from "../../types";

interface Props {
  x: travelInfo;
}

const TravelInfoCard: React.FC<Props> = ({ x }) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text>{x.kalkisSaati}</Text>
          <Text>{x.inisSaati}</Text>
        </View>
        <Entypo name="dots-two-vertical" size={30} color="black" />
        <View>
          <Text>{x.kalkisYeri}</Text>
          <Text>{x.inisYeri}</Text>
        </View>
      </View>
      <View style={styles.divider} />
      <View>
        <View style={styles.body}>
          <View style={{ flex: 1 }}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <FontAwesome name="bus" size={24} color="#CC3636" />
              <Text style={styles.leftSpace}>
                Sefer Bilgileri | {x.seferBilgileri} saat
              </Text>
            </View>
            <View style={styles.footer}>
              <Ionicons name="person" size={20} color="black" />
              <Ionicons name="person-outline" size={20} color="black" />
              <Ionicons name="person-outline" size={20} color="black" />
              <View style={styles.divider2} />
              <Ionicons
                style={styles.leftSpace}
                name="wifi"
                size={20}
                color="black"
              />
              <Ionicons
                style={styles.leftSpace}
                name="md-battery-charging"
                size={20}
                color="black"
              />
              <MaterialCommunityIcons
                style={styles.leftSpace}
                name="shield-sun-outline"
                size={20}
                color="black"
              />
            </View>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate("SeatSection")}
            style={styles.buttonContainer}
          >
            <Text style={styles.buttonText}>₺ {x.fiyat},00</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default TravelInfoCard;

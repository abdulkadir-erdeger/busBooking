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
          <Text testID="kalkisSaati">{x.kalkisSaati}</Text>
          <Text testID="inisSaati">{x.inisSaati}</Text>
        </View>
        <Entypo name="dots-two-vertical" size={30} color="black" />
        <View>
          <Text testID="kalkisYeri">{x.kalkisYeri}</Text>
          <Text testID="inisYeri">{x.inisYeri}</Text>
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
            testID="buttonNavigate"
            onPress={() => navigation.navigate("SeatSection", { id: x.id })}
            style={styles.buttonContainer}
          >
            <Text testID="fiyat" style={styles.buttonText}>
              ₺ {x.fiyat}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default TravelInfoCard;

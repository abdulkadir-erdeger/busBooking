import { View, Text, FlatList } from "react-native";
import React from "react";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";

const SeatSelectionScreen = () => {
  const Seat = ({ item, index }: any) => {
    return (
      <View
        style={{
          width: 60,
          height: 60,
          borderWidth: 1,
          margin: 5,
          alignItems: "center",
          borderRadius: 8,
        }}
      >
        <MaterialIcons
          style={{ flex: 1 }}
          name="event-seat"
          size={30}
          color="black"
        />
        <Text
          style={{
            width: "100%",
            bottom: -1,
            borderWidth: 1,
            borderRadius: 8,
            textAlign: "center",
            backgroundColor: "lightgrey",
          }}
        >
          {item}
        </Text>
      </View>
    );
  };
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <View
        style={{ width: "80%", height: "80%", borderWidth: 1, padding: 10 }}
      >
        <MaterialCommunityIcons
          style={{ left: 15 }}
          name="steering"
          size={35}
          color="black"
        />
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <FlatList
            data={[1, 4, 7, 10, 13, 16, 19]}
            renderItem={({ item, index }) => <Seat item={item} index={index} />}
            keyExtractor={(index) => index.toString()}
            numColumns={1}
          />
          <FlatList
            data={[2, 3, 5, 6, 8, 9, 11, 12, 14, 15, 17, 18, 20, 21]}
            renderItem={({ item, index }) => <Seat item={item} index={index} />}
            keyExtractor={(index) => index.toString()}
            numColumns={2}
            scrollEnabled={false}
            style={{ width: 60 }}
          />
        </View>
      </View>
      <MaterialCommunityIcons name="face-woman" size={30} color="black" />
      <MaterialCommunityIcons name="face-man" size={30} color="black" />
    </View>
  );
};

export default SeatSelectionScreen;

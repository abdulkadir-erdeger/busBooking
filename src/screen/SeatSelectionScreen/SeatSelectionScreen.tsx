import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Pressable,
  Modal,
} from "react-native";
import React, { useState, useEffect } from "react";
import styles from "./SeatSelectionScreen.style";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import axios from "axios";

const SeatSelectionScreen = () => {
  const [row, setRow] = useState<any>("");
  const [modalVisible, setModalVisible] = useState(false);
  const [selectItem, setSelectItem] = useState<any>("");
  const [selectSource, setSelectSource] = useState<any>("");

  useEffect(() => {
    axios
      .get("http://10.0.2.2:5000/travelData/1")
      .then((res) => setRow(res.data.koltuklar))
      .catch((err) => console.log(err));
  }, []);

  const Seat = ({ item, source }: any) => {
    return (
      <TouchableOpacity
        onPress={() => {
          setSelectItem(item),
            setSelectSource(source),
            item.selected ? seatSelect("") : setModalVisible(true);
        }}
        disabled={!item.empty}
      >
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
          {item.gender === "" ? (
            <MaterialIcons
              style={{ flex: 1, top: 3 }}
              name="event-seat"
              size={30}
              color="black"
            />
          ) : item.gender === "woman" ? (
            <MaterialCommunityIcons
              style={{ flex: 1, top: 3 }}
              name="face-woman"
              size={30}
              color="#863A6F"
            />
          ) : (
            <MaterialCommunityIcons
              style={{ flex: 1, top: 3 }}
              name="face-man"
              size={30}
              color="#3A8891"
            />
          )}
          <Text
            style={{
              width: "100%",
              bottom: -1,
              fontWeight: "500",
              borderWidth: 1,
              borderRadius: 8,
              textAlign: "center",
              backgroundColor:
                item.gender === ""
                  ? "lightgrey"
                  : item.gender === "woman"
                  ? "#863A6F"
                  : "#3A8891",
            }}
          >
            {item.id}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  const seatSelect = (x: string) => {
    if (selectSource) {
      let data = row[0][selectSource];
      const i = data.findIndex((item: any) => {
        return item.id === selectItem.id;
      });

      if (selectItem.selected === false) {
        data[i].gender = x;
        data[i].selected = true;
      } else {
        data[i].gender = x;
        data[i].selected = false;
      }
      setRow((oldArray: any) => [...oldArray, data]);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1, alignItems: "center" }}>
        <View style={{ marginVertical: 10, marginHorizontal: 8 }}>
          <Text style={{ justifyContent: "center" }}>
            <MaterialIcons name="info" size={20} color="#66BFBF" />
            Çiftli koltuklar ailelere ayrılmıştır. Yanınıza yabancı bir yolcunun
            oturmasını istemiyorsanız tekli koltukları tercih ediniz.
          </Text>
        </View>

        <View
          style={{ width: "80%", height: "85%", borderWidth: 1, padding: 10 }}
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
            {row && (
              <>
                <FlatList
                  data={row.row1}
                  renderItem={({ item }) => (
                    <Seat source={"row1"} item={item} />
                  )}
                  keyExtractor={(item) => item.id}
                  scrollEnabled={false}
                  numColumns={1}
                  style={{ width: 0 }}
                />
                <View style={{ flex: 1 }} />
                <FlatList
                  data={row.row2}
                  renderItem={({ item }) => (
                    <Seat source={"row2"} item={item} />
                  )}
                  keyExtractor={(item) => item.id}
                  numColumns={2}
                  scrollEnabled={false}
                  style={{ width: 60 }}
                />
              </>
            )}
          </View>
        </View>
        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <View
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "black",
              opacity: 0.8,
            }}
          >
            <View
              style={{
                alignItems: "center",
                padding: 15,
                height: 150,
                width: 250,
                backgroundColor: "white",
                borderRadius: 8,
              }}
            >
              <Text style={{ fontSize: 18, fontWeight: "600" }}>
                Cinsiyet Seçiniz..
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  flex: 1,
                  alignItems: "center",
                }}
              >
                <Pressable
                  onPress={() => {
                    setModalVisible(false);
                    seatSelect("woman");
                  }}
                >
                  <MaterialCommunityIcons
                    style={{ margin: 10 }}
                    name="face-woman"
                    size={50}
                    color="#863A6F"
                  />
                </Pressable>
                <Pressable
                  onPress={() => {
                    setModalVisible(false);
                    seatSelect("man");
                  }}
                >
                  <MaterialCommunityIcons
                    style={{ margin: 10 }}
                    name="face-man"
                    size={50}
                    color="#3A8891"
                  />
                </Pressable>
              </View>
            </View>
          </View>
        </Modal>
      </View>
      <Pressable onPress={() => console.warn("tık")} style={styles.button}>
        <Text style={styles.buttonText}>Tamamla</Text>
      </Pressable>
    </View>
  );
};

export default SeatSelectionScreen;

import React, { useState } from "react";
import { View, Text, StatusBar, Image, Pressable, LogBox } from "react-native";
import { RadioButton } from "react-native-paper";
import { Picker } from "@react-native-picker/picker";
import DateTimePicker, {
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import styles from "./HomeScreen.style";
import { RootStackParamList } from "../../types";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

LogBox.ignoreLogs(["new NativeEventEmitter"]);
LogBox.ignoreAllLogs();

const HomeScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [checked, setChecked] = useState<string>("tekYon");
  const [departureCity, setDepartureCity] = useState<string>("istanbul");
  const [destinationCity, setDestinationCity] = useState<string>("ankara");
  const [maturityStatus, setMaturityStatus] = useState<string>("yetiskin");
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState<Boolean>(false);

  const onChange = (event: DateTimePickerEvent, selectedDate: any) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
  };

  const months = [
    "Ocak",
    "Şubat",
    "Mart",
    "Nisan",
    "Mayıs",
    "Haziran",
    "Temmuz",
    "Ağustos",
    "Eylül",
    "Ekim",
    "Kasım",
    "Aralık",
  ];
  const days = [
    "Pazar",
    "Pazartesi",
    "Salı",
    "Çarşamba",
    "Perşembe",
    "Cuma",
    "Cumartesi",
  ];

  function info() {
    const obj = {
      biletTürü: checked,
      kalkıs: departureCity,
      varis: destinationCity,
      haftaninGunu: days[date.getDay()],
      gun: date.getDate(),
      ay: months[date.getMonth()],
      yasDurum: maturityStatus,
    };
    return obj;
  }

  const navigateToDetail = (): void => {
    navigation.navigate("Expedition", info());
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle={"light-content"} />
      <View style={styles.slideBar}>
        <Image
          style={styles.slidePicture}
          source={require("../../../assets/bus.png")}
        />
        <Text style={styles.slideText}>
          En Uygun Fiyatlı Otobüs Biletleri Yolcudur Abbas da
        </Text>
      </View>
      <View style={styles.travelContainer}>
        <View style={styles.radioButtonContainer}>
          <RadioButton
            value="tekYon"
            status={checked === "tekYon" ? "checked" : "unchecked"}
            onPress={() => setChecked("tekYon")}
          />
          <Text>Tek Yön</Text>
          <RadioButton
            value="gidisDonus"
            status={checked === "gidisDonus" ? "checked" : "unchecked"}
            onPress={() => setChecked("gidisDonus")}
          />
          <Text>Gidiş Dönüş</Text>
        </View>

        <View style={styles.cityInput}>
          <MaterialCommunityIcons
            name="map-marker-outline"
            size={24}
            color="black"
          />
          <Picker
            style={{ flex: 1 }}
            selectedValue={departureCity}
            onValueChange={(itemValue, itemIndex) =>
              setDepartureCity(itemValue)
            }
          >
            <Picker.Item label="İstanbul" value="istanbul" />
            <Picker.Item label="Ankara" value="ankara" />
          </Picker>
        </View>

        <View style={styles.cityInput}>
          <MaterialCommunityIcons
            name="map-marker-outline"
            size={24}
            color="black"
          />
          <Picker
            style={{ flex: 1 }}
            selectedValue={destinationCity}
            onValueChange={(itemValue, itemIndex) =>
              setDestinationCity(itemValue)
            }
          >
            <Picker.Item label="Ankara" value="ankara" />
            <Picker.Item label="İstanbul" value="istanbul" />
          </Picker>
        </View>

        <Pressable onPress={() => setShow(true)}>
          <View style={styles.Input}>
            <Ionicons
              style={{ marginEnd: 10 }}
              name="calendar-outline"
              size={24}
              color="black"
            />
            <Text>{date.toLocaleDateString()}</Text>
          </View>
        </Pressable>

        <View style={styles.cityInput}>
          <Picker
            style={{ flex: 1 }}
            selectedValue={maturityStatus}
            onValueChange={(itemValue, itemIndex) =>
              setMaturityStatus(itemValue)
            }
          >
            <Picker.Item label="Yetişkin" value="yetiskin" />
            <Picker.Item label="Çocuk" value="cocuk" />
          </Picker>
        </View>
      </View>

      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode="date"
          is24Hour={true}
          onChange={onChange}
        />
      )}

      <Pressable
        testID="buttonNavigate"
        onPress={() => navigateToDetail()}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Seferleri Göster</Text>
      </Pressable>
    </View>
  );
};

export default HomeScreen;

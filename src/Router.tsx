import React from "react";
import { Image, Pressable } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screen/HomeScreen";
import ExpeditionScreen from "./screen/ExpeditionScreen";
import SeatSelectionScreen from "./screen/SeatSelectionScreen";
import { Ionicons } from "@expo/vector-icons";
import { RootStackParamList } from "./types";

const Stack = createNativeStackNavigator<RootStackParamList>();

const Router = () => {
  const CustomTabBarButton = ({ onPress }: any) => (
    <Pressable onPress={onPress}>
      <Ionicons name="arrow-back-circle" size={35} color="white" />
    </Pressable>
  );
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: "#f9a825",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerTitleAlign: "center",
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerTitle: (props) => (
              <Image
                style={{ width: 250, height: 55 }}
                source={require("../assets/logo.png")}
              />
            ),
          }}
        />
        <Stack.Screen
          name="Expedition"
          component={ExpeditionScreen}
          options={({ navigation }) => ({
            headerTitle: () => (
              <Image
                style={{ width: 250, height: 55 }}
                source={require("../assets/logo.png")}
              />
            ),
            /* headerLeft: () => (
              <CustomTabBarButton onPress={() => navigation.goBack()} />
            ),*/
          })}
        />
        <Stack.Screen
          name="SeatSection"
          component={SeatSelectionScreen}
          options={({ navigation }) => ({
            headerTitle: () => (
              <Image
                style={{ width: 250, height: 55 }}
                source={require("../assets/logo.png")}
              />
            ),
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;

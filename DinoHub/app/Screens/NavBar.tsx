import React from "react";
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  SafeAreaView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../RootStackParamList";

import Dumbell from "../assets/NavBarAssets/Dumbell.svg";
import Nut from "../assets/NavBarAssets/Nutrition.svg";
import Sleep from "../assets/NavBarAssets/Sleep.svg";
import Resources from "../assets/NavBarAssets/Resources.svg";

import DumbLabel from "../assets/NavBarAssets/LabelDumb.svg";
import NutLabel from "../assets/NavBarAssets/LabelNutrition.svg";
import SleepLabel from "../assets/NavBarAssets/LabelSleep.svg";
import ResourcesLabel from "../assets/NavBarAssets/LabelResources.svg";

const { height, width } = Dimensions.get("window");

export default function NavBar() {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <SafeAreaView style={styles.navBarContainer}>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.Buttons}
          onPress={() => navigation.navigate("Home")}
        >
          <Dumbell />
          <DumbLabel />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.Buttons}
          onPress={() => navigation.navigate("Nutrition")}
        >
          <Nut />
          <NutLabel />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.Buttons}
          onPress={() => navigation.navigate("Sleep")}
        >
          <Sleep />
          <SleepLabel />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.Buttons}
          onPress={() => navigation.navigate('ActiveLivingResources')}
        >
          <Resources />
          <ResourcesLabel />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  navBarContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#D6001C",
    height: height * 0.1151,
    zIndex: 10,
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100%",
    paddingHorizontal: 20,
  },
  Buttons: {
    flexDirection: "column",
    alignItems: "center",
    padding: 10,
  },
});

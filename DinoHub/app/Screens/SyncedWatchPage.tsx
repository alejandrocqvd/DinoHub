import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  TextInput,
} from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../RootStackParamList";
import Header from "./Header";
import NavBar from "./NavBar";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { useState } from "react";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import Icon from "react-native-vector-icons/FontAwesome";

type Props = NativeStackScreenProps<RootStackParamList, "SyncedWatchPage">;
const { height, width } = Dimensions.get("window");
export default function SyncedWatchPage({ navigation }: Props) {
  const navigationTool =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.Main}>
        <View style={styles.watchButton}>
          <TouchableOpacity
            style={styles.AddBtnBox}
            onPress={() => navigationTool.navigate("Sleep")}
          >
            <View style={styles.watchSyncButton}>
              <Icon name="arrow-left" size={36} color="#333" />
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.secondContainer}>
          <View style={styles.resultsContainer}>
            <Text style={styles.header}>Currently Under Development</Text>
            <Text style={styles.content}>
              This page is currently being developed. The user will be able to
              view the watch that is synced to the app as well as any
              configuration information the user would need to operate the
              watch. For now we assume that the user has already synced their
              watch to the app for the purposes of this demo.
            </Text>
          </View>
        </View>
      </View>

      <NavBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f8f8f8",
    display: "flex",
    //justifyContent: "space-between",
    alignItems: "center",
    flex: 1,
    width: "100%",
  },

  Main: {
    display: "flex",
    // flexDirection:'column',
    // marginTop:-116,
    flex: 1,
    //justifyContent: "space-between",
    height: height * (670 / 851),
    width: "100%",
  },
  header: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  resultsContainer: {
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    maxWidth: "50%",
  },
  secondContainer: {
    marginTop: 100,
    padding: 20,
    backgroundColor: "#f8f8f8",
    alignItems: "center",
    width: "100%",
  },
  content: {
    padding: 50,
    fontWeight: "bold",
  },
  watchButton: {
    position: "absolute",
    left: "5%",
    marginTop: 20,
  },
  syncText: {
    fontSize: 18,
    fontWeight: "bold",
    paddingRight: 20,
  },
  watchSyncButton: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  AddBtnBox: {
    backgroundColor: "#D6001C",
    borderRadius: 25,
    padding: 10,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
});

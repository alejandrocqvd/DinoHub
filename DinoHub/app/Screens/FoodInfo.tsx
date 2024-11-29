import React from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, FlatList } from "react-native";
import Header from "./Header";
import NavBar from "./NavBar";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../RootStackParamList";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export default function FoodInfo() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <View style={styles.container}>
      {/* Header */}
      <Header />

      <View style={styles.foodInfoContent}>
        {/* Header and Back Arrow */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.navigate("Nutrition")}>
            <Ionicons name="arrow-back" size={24} color="#000" />   
          </TouchableOpacity>
          <Text style={styles.headerText}>Eggs</Text>
        </View>

        {/* Food Data Component */}
        <View style={styles.foodData}>
          <View style={styles.servingData}>
            <View style={styles.servingRow}>
              <Text>Serving Size</Text>
              <TextInput style={styles.textInput}></TextInput>
            </View>
            <View style={styles.servingRow}>
              <Text>Number of Servings</Text>
              <TextInput style={styles.textInput}></TextInput>
            </View>
          </View>

          <View style={styles.horizontalLine} />

          <View>
            <View>
              <Text>Calories</Text>
              <TextInput></TextInput>
            </View>
            <View>
              <Text>Carbs</Text>
              <TextInput></TextInput>
            </View>
            <View>
              <Text>Fat</Text>
              <TextInput></TextInput>
            </View>
            <View>
              <Text>Protein</Text>
              <TextInput></TextInput>
            </View>
          </View>
        </View>

        <TouchableOpacity>
          <Text>ADD FOOD</Text>
        </TouchableOpacity>
      </View>

      {/* Navigation Bar */}
      <NavBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 20,
    backgroundColor: "#f8f8f8",
  },
  foodInfoContent: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    width: '100%',
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingVertical: 25,
  },
  headerText: {
    fontSize: 20,
    marginLeft: 10,
    fontWeight: "bold",
  },
  foodData: {
    flexDirection: "column",
    justifyContent: "center",
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  servingData: {
    padding: 10,
    flexDirection: "column",
  },
  servingRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 10,
  },
  textInput: {
    borderWidth: 1,
    borderRadius: 5,
    width: 100,
    padding: 5,
  },
  horizontalLine: {
    height: 1,
    backgroundColor: "#D3D3D3",
    marginBottom: 15,
    width: "100%",
  },
});


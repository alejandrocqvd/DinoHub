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
          <TouchableOpacity onPress={() => navigation.navigate("SearchFood")}>
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

          <View style={styles.macrosData}>
            <View style={styles.macroData}>
              <Text style={styles.macroText}>Calories</Text>
              <TextInput style={styles.textInput2}></TextInput>
            </View>
            <View style={styles.macroData}>
              <Text style={styles.macroText}>Carbs</Text>
              <TextInput style={styles.textInput2}></TextInput>
            </View>
            <View style={styles.macroData}>
              <Text style={styles.macroText}>Fat</Text>
              <TextInput style={styles.textInput2}></TextInput>
            </View>
            <View style={styles.macroData}>
              <Text style={styles.macroText}>Protein</Text>
              <TextInput style={styles.textInput2}></TextInput>
            </View>
          </View>
        </View>

        <TouchableOpacity
          style={styles.addButton}
          onPress={() => navigation.navigate('Nutrition')}
        >
          <Text style={styles.addButtonText}>ADD FOOD</Text>
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
    backgroundColor: "#f8f8f8",
  },
  horizontalLine: {
    height: 1,
    backgroundColor: "#D3D3D3",
    marginBottom: 15,
    width: "100%",
  },
  macrosData: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  macroData: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  macroText: {
    textAlign: "center",
    margin: "auto",
    marginBottom: 10,
  },
  textInput2: {
    borderWidth: 1,
    borderRadius: 5,
    width: 70,
    padding: 5,
    marginBottom: 20,
    backgroundColor: "#f8f8f8",
  },
  addButton: {
    backgroundColor: "#D6001C",
    alignItems: "center",
    justifyContent: "center",
    padding: 15,
    borderRadius: 10,
    marginTop: 10,
    width: "100%"
  },
  addButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});


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
          <Ionicons name="arrow-back" size={24} color="#000" /> 
          <Text>Eggs</Text>
        </View>

        {/* Food Data Component */}
        <View>
          <View>
            <View>
              <Text>Serving Size</Text>
              <TextInput></TextInput>
            </View>
            <View>
              <Text>Number of Servings</Text>
              <TextInput></TextInput>
            </View>
          </View>

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
    backgroundColor: '#fff',
  },
  foodInfoContent: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
});

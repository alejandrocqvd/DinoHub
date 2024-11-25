import React from "react";
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, FlatList } from "react-native";
import Header from "./Header";
import NavBar from "./NavBar";
import { ScrollView } from "react-native";

const { height, width } = Dimensions.get("window");

export default function Nutrition() {
    // Sample meal data
    const meals = [
        {
          time: "Breakfast",
          items: [
            { id: 1, name: "Oikos Vanilla Yoghurt", calories: 240, serving: "10.6 Ounce" },
            { id: 2, name: "Eggs", calories: 166, serving: "3 Large" },
          ],
        },
        {
          time: "Lunch",
          items: [
            { id: 3, name: "Grilled Chicken Salad", calories: 350 },
            { id: 4, name: "Apple", calories: 95, serving: "3 Large" },
          ],
        },
        {
          time: "Dinner",
          items: [],
        },
    ];

    // Macronutrient data
    const macros = [
        { name: "Calories", goal: 2550, left: 1540 },
        { name: "Protein", goal: 140, left: 75 },
        { name: "Carbohydrates", goal: 216, left: 108 },
        { name: "Fats", goal: 80, left: 25 },
    ];

    return (
        <View style={styles.container}>
          {/* Header */}
          <Header />
    
          {/* Scrollable Content */}
          <ScrollView contentContainerStyle={styles.scrollViewContent}>
            {/* Date Navigation */}
            <View style={styles.dateNav}>
              <TouchableOpacity>
                <Text style={styles.dateNavText}>{"<"}</Text>
              </TouchableOpacity>
              <Text style={styles.dateNavTitle}>Today</Text>
              <TouchableOpacity>
                <Text style={styles.dateNavText}>{">"}</Text>
              </TouchableOpacity>
            </View>
    
            {/* Daily Goals */}
            <View style={styles.dailyGoals}>
              <Text style={styles.sectionTitle}>Daily Goals</Text>
              <View style={styles.macros}>
                {/* Macronutrient Data */}
                <View style={styles.macroHeader}>
                  <Text style={styles.macroHeaderTitle}>Macronutrient</Text>
                  <View style={styles.macroColumns}>
                    <Text style={styles.macroColumnText}>Goal</Text>
                    <Text style={styles.macroColumnText}>Left</Text>
                  </View>
                </View>
                <View style={styles.horizontalLine} />
                {macros.map((macro, index) => (
                  <View key={index} style={styles.macroRow}>
                    <View style={styles.macroInfo}>
                      <Text style={styles.macroName}>{macro.name}</Text>
                      <View style={styles.macroData}>
                        <Text style={styles.macroValue}>{macro.goal}</Text>
                        <Text style={styles.macroValue}>{macro.left}</Text>
                      </View>
                    </View>
                    <View style={styles.progressBar}>
                      <View
                        style={[
                          styles.progressFill,
                          { width: `${(macro.left / macro.goal) * 100}%` },
                        ]}
                      />
                    </View>
                  </View>
                ))}
              </View>
            </View>
    
            {/* Meals */}
            <View style={styles.dailyGoals}>
              {meals.map((meal, index) => (
                <View key={index}>
                  <Text style={styles.mealTime}>{meal.time}</Text>
                  {meal.items.map((item) => (
                    <View key={item.id} style={styles.foodItem}>
                      {/* Name and Serving */}
                      <View style={styles.nameAndServing}>
                        <Text style={styles.foodName}>{item.name}</Text>
                        <Text style={styles.foodServing}>{item.serving}</Text>
                      </View>
                      {/* Calories and Delete Icon */}
                      <View style={styles.caloriesAndDelete}>
                        <Text style={styles.foodCalories}>{item.calories}</Text>
                        <TouchableOpacity style={styles.deleteButton}>
                          <Text style={styles.deleteText}>X</Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  ))}
                  {/* Add Food Button */}
                  <TouchableOpacity style={styles.addButton}>
                    <Text style={styles.addButtonText}>ADD FOOD</Text>
                  </TouchableOpacity>
                </View>
              ))}
            </View>
          </ScrollView>
    
          {/* Navigation Bar */}
          <NavBar />
        </View>
      );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f8f8f8",
    },
    scrollViewContent: {
        paddingBottom: 100,
    },
    dateNav: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 20,
        marginTop: 10,
    },
    dateNavText: {
        fontSize: 24,
        fontWeight: "bold",
        marginHorizontal: 20,
    },
    dateNavTitle: {
        fontSize: 20,
        fontWeight: "bold",
    },
    dailyGoals: {
        marginTop: 20,
        paddingHorizontal: 20,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 10,
        marginHorizontal: 10,
    },
    horizontalLine: {
        height: 1,
        backgroundColor: "#D3D3D3",
        marginTop: 5,
        marginBottom: 15,
        width: "100%",
    },
    macroHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 10,
    },
    macroHeaderTitle: {
        fontSize: 16,
        fontWeight: "bold",
        flex: 2,
    },
    macroColumns: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: 100,
    },
    macroColumnText: {
        fontSize: 16,
        fontWeight: "bold",
        textAlign: "center",
    },
    macros: {
        backgroundColor: "#fff",
        borderRadius: 10,
        padding: 20,
        elevation: 2,
    },
    macroRow: {
        marginBottom: 10,
    },
    macroInfo: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    macroName: {
        fontSize: 16,
        fontWeight: "bold",
        flex: 2,
    },
    macroData: {
        flexDirection: "row",
        justifyContent: "space-between",
        flex: 1,
    },
    macroValue: {
        fontSize: 14,
        color: "#555",
        textAlign: "right",
        width: 50,
    },
    progressBar: {
        height: 6,
        backgroundColor: "#e0e0e0",
        borderRadius: 3,
        marginTop: 5,
        overflow: "hidden",
    },
    progressFill: {
        height: "100%",
        backgroundColor: "#007AFF",
    },
    mealTime: {
        fontSize: 18,
        fontWeight: "bold",
        marginVertical: 10,
    },
    foodItem: {
        backgroundColor: "#fff",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginBottom: 5,
        borderRadius: 10,
    },
    nameAndServing: {
        flexDirection: "column",
        alignItems: "flex-start",
    },
    foodName: {
        fontSize: 16,
        fontWeight: "bold",
    },
    foodServing: {
        fontSize: 14,
        color: "#555",
    },
    caloriesAndDelete: {
        flexDirection: "row",
        alignItems: "center",
    },
    foodCalories: {
        fontSize: 14,
        marginRight: 10,
    },
    deleteButton: {
        padding: 5,
        width: 30,
        alignItems: "center",
        backgroundColor: "#D6001C",
        borderRadius: 5,
    },
    deleteText: {
        color: "#fff",
        fontWeight: "bold",
    },
    meals: {
        marginTop: 20,
        paddingHorizontal: 20,
    },
    mealItem: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 10,
        backgroundColor: "#fff",
        borderRadius: 5,
        marginBottom: 10,
        elevation: 1,
    },
    mealName: {
        fontSize: 16,
    },
    mealRight: {
        flexDirection: "row",
        alignItems: "center",
    },
    mealCalories: {
        fontSize: 16,
        marginRight: 10,
    },
    addButton: {
        backgroundColor: "#D6001C",
        alignItems: "center",
        justifyContent: "center",
        padding: 15,
        borderRadius: 10,
        marginBottom: 30,
    },
    addButtonText: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold",
    },
});

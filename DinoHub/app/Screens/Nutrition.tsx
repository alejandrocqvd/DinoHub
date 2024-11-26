import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Header from "./Header";
import NavBar from "./NavBar";
import DateTimePickerModal from "react-native-modal-datetime-picker";

// Interfaces
interface FoodItemType {
  id: React.Key;
  name: string;
  serving?: string;
  calories: number;
}

interface MealType {
  time: string;
  totalCalories: number;
  items: FoodItemType[];
}

interface MacroRowProps {
  name: string;
  goal: number;
  left: number;
}

// Components
const MacroRow: React.FC<MacroRowProps> = ({ name, goal, left }) => (
  <View style={styles.macroRow}>
    <View style={styles.macroInfo}>
      <Text style={styles.macroName}>{name}</Text>
      <View style={styles.macroData}>
        <Text style={styles.macroValue}>{goal}g</Text>
        <Text style={styles.macroValue}>{left}g</Text>
      </View>
    </View>
    <View style={styles.progressBar}>
      <View
        style={[
          styles.progressFill,
          { width: `${((goal - left) / goal) * 100}%` },
        ]}
      />
    </View>
  </View>
);

const FoodItem: React.FC<FoodItemType> = ({ name, serving, calories }) => (
  <View style={styles.foodItem}>
    <View style={styles.nameAndServing}>
      <Text style={styles.foodName}>{name}</Text>
      {serving && <Text style={styles.foodServing}>{serving}</Text>}
    </View>
    <View style={styles.caloriesAndDelete}>
      <Text style={styles.foodCalories}>{calories}</Text>
      <TouchableOpacity style={styles.deleteButton}>
        <Text style={styles.deleteText}>X</Text>
      </TouchableOpacity>
    </View>
  </View>
);

const MealSection: React.FC<{ meal: MealType }> = ({ meal }) => (
  <View style={styles.mealSection}>
    <View style={styles.foodColumns}>
      <Text style={styles.mealTime}>{meal.time}</Text>
      <Text style={styles.totalCalories}>{meal.totalCalories} kcal</Text>
    </View>
    {meal.items.map((item) => (
      <FoodItem
        key={item.id}
        id={item.id}
        name={item.name}
        serving={item.serving}
        calories={item.calories}
      />
    ))}
    <TouchableOpacity style={styles.addButton}>
      <Text style={styles.addButtonText}>ADD FOOD</Text>
    </TouchableOpacity>
  </View>
);

const Nutrition = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  // Handlers for date navigation
  const handlePreviousDate = () => {
    const previousDate = new Date(currentDate);
    previousDate.setDate(previousDate.getDate() - 1);
    setCurrentDate(previousDate);
  };

  const handleNextDate = () => {
    const nextDate = new Date(currentDate);
    nextDate.setDate(nextDate.getDate() + 1);
    setCurrentDate(nextDate);
  };

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date: Date) => {
    setCurrentDate(date);
    hideDatePicker();
  };

  // Sample meal data
  const meals: MealType[] = [
    {
      time: "Breakfast",
      totalCalories: 406,
      items: [
        {
          id: 1,
          name: "Oikos Vanilla Yoghurt",
          calories: 240,
          serving: "10.6 oz",
        },
        { id: 2, name: "Eggs", calories: 166, serving: "3 Large" },
      ],
    },
    {
      time: "Lunch",
      totalCalories: 445,
      items: [
        { id: 3, name: "Grilled Chicken Salad", calories: 350, serving: "1 Large" },
        { id: 4, name: "Apple", calories: 95, serving: "1 Large" },
      ],
    },
    {
      time: "Dinner",
      totalCalories: 0,
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
          <TouchableOpacity onPress={handlePreviousDate}>
            <Text style={styles.dateNavText}>{"<"}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={showDatePicker}>
            <Text style={styles.dateNavTitle}>
              {currentDate.toDateString() === new Date().toDateString()
                ? "Today"
                : currentDate.toDateString()}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleNextDate}>
            <Text style={styles.dateNavText}>{">"}</Text>
          </TouchableOpacity>
        </View>

        {/* Date Picker Modal */}
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
          date={currentDate}
        />

        {/* Daily Goals */}
        <View style={styles.dailyGoals}>
          <Text style={styles.sectionTitle}>Daily Goals</Text>
          <View style={styles.macros}>
            <View style={styles.macroHeader}>
              <Text style={styles.macroHeaderTitle}>Macronutrient</Text>
              <View style={styles.macroColumns}>
                <Text style={styles.macroColumnText}>Goal</Text>
                <Text style={styles.macroColumnText}>Left</Text>
              </View>
            </View>
            <View style={styles.horizontalLine} />
            {macros.map((macro, index) => (
              <MacroRow
                key={index}
                name={macro.name}
                goal={macro.goal}
                left={macro.left}
              />
            ))}
          </View>
        </View>

        {/* Meals */}
        {meals.map((meal, index) => (
          <MealSection key={index} meal={meal} />
        ))}
      </ScrollView>

      {/* Navigation Bar */}
      <NavBar />
    </View>
  );
};

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
  mealSection: {
    marginBottom: 0,
  },
  foodColumns: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    marginTop: 20,
  },
  mealTime: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 10,
  },
  totalCalories: {
    fontSize: 16,
    fontWeight: "bold",
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
    marginHorizontal: 20,
    height: 60,
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
  addButton: {
    backgroundColor: "#D6001C",
    alignItems: "center",
    justifyContent: "center",
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    marginHorizontal: 20,
  },
  addButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default Nutrition;

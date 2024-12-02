import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Header from "./Header";
import NavBar from "./NavBar";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../RootStackParamList";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

// Interfaces
interface FoodItemType {
  id: React.Key;
  name: string;
  calories: number;
  carbs: number;
  fats: number;
  protein: number;
  serving?: string;
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

// Helper Function to Check if a Date is Today
const isToday = (date: Date): boolean => {
  const today = new Date();
  return (
    date.getDate() === today.getDate() &&
    date.getMonth() === today.getMonth() &&
    date.getFullYear() === today.getFullYear()
  );
};

// Components

// MacroRow Component
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

// FoodItem Component with Delete Functionality
const FoodItem: React.FC<
  FoodItemType & { onDelete: (id: React.Key) => void }
> = ({ id, name, serving, calories, onDelete }) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <TouchableOpacity
      style={styles.foodItem}
      onPress={() => navigation.navigate("FoodEditInfo")}
    >
      <View style={styles.nameAndServing}>
        <Text style={styles.foodName}>{name}</Text>
        {serving && <Text style={styles.foodServing}>{serving}</Text>}
      </View>
      <View style={styles.caloriesAndDelete}>
        <Text style={styles.foodCalories}>{calories} kcal</Text>
        <TouchableOpacity
          style={styles.deleteButton}
          onPress={() => onDelete(id)}
        >
          <Text style={styles.deleteText}>X</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

// MealSection Component
const MealSection: React.FC<{
  meal: MealType;
  onDeleteFood: (mealTime: string, foodId: React.Key) => void;
}> = ({ meal, onDeleteFood }) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
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
          carbs={item.carbs}
          fats={item.fats}
          protein={item.protein}
          onDelete={(id) => onDeleteFood(meal.time, id)}
        />
      ))}
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate("SearchFood")}
      >
        <Text style={styles.addButtonText}>ADD FOOD</Text>
      </TouchableOpacity>
    </View>
  );
};

// Nutrition Component
const Nutrition = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  // Initial Meals Data
  const initialMeals: MealType[] = [
    {
      time: "Breakfast",
      totalCalories: 406,
      items: [
        {
          id: 1,
          name: "Oikos Vanilla Yoghurt",
          calories: 240,
          carbs: 38,
          fats: 0,
          protein: 24,
          serving: "2 Cups",
        },
        {
          id: 5,
          name: "Banana",
          calories: 105,
          carbs: 27,
          fats: 0.4,
          protein: 1.3,
          serving: "1 Medium",
        },
        {
          id: 2,
          name: "Eggs",
          calories: 214,
          carbs: 1.4,
          fats: 14.9,
          protein: 18.6,
          serving: "3 Large",
        },
      ],
    },
    {
      time: "Lunch",
      totalCalories: 445,
      items: [
        {
          id: 3,
          name: "Grilled Chicken Salad",
          calories: 350,
          carbs: 35,
          fats: 5,
          protein: 30,
          serving: "1 Large",
        },
        {
          id: 4,
          name: "Orange Juice",
          calories: 95,
          carbs: 30,
          fats: 0,
          protein: 0,
          serving: "1 Cup",
        },
      ],
    },
    {
      time: "Dinner",
      totalCalories: 0,
      items: [],
    },
  ];

  // State for meals
  const [meals, setMeals] = useState<MealType[]>(initialMeals);

  // Macronutrient goals and left
  const [macros, setMacros] = useState([
    { name: "Calories", goal: 2550, left: 2550 },
    { name: "Protein", goal: 140, left: 140 },
    { name: "Carbohydrates", goal: 216, left: 216 },
    { name: "Fats", goal: 80, left: 80 },
  ]);

  // useEffect to calculate left macros whenever meals change
  useEffect(() => {
    let totalCalories = 0;
    let totalProtein = 0;
    let totalCarbs = 0;
    let totalFats = 0;

    meals.forEach((meal) => {
      meal.items.forEach((item) => {
        totalCalories += item.calories;
        totalProtein += item.protein;
        totalCarbs += item.carbs;
        totalFats += item.fats;
      });
    });

    setMacros([
      { name: "Calories", goal: 2550, left: 2550 - totalCalories },
      { name: "Protein", goal: 140, left: 140 - totalProtein },
      { name: "Carbohydrates", goal: 216, left: 216 - totalCarbs },
      { name: "Fats", goal: 80, left: 80 - totalFats },
    ]);
  }, [meals]);

  // useEffect to clear meals if selected date is not today
  useEffect(() => {
    if (!isToday(currentDate)) {
      setMeals([
        {
          time: "Breakfast",
          totalCalories: 0,
          items: [],
        },
        {
          time: "Lunch",
          totalCalories: 0,
          items: [],
        },
        {
          time: "Dinner",
          totalCalories: 0,
          items: [],
        },
      ]);

      // Reset macros to initial goals since no food is consumed
      setMacros([
        { name: "Calories", goal: 2550, left: 2550 },
        { name: "Protein", goal: 140, left: 140 },
        { name: "Carbohydrates", goal: 216, left: 216 },
        { name: "Fats", goal: 80, left: 80 },
      ]);
    } else {
      setMeals(initialMeals);
    }
  }, [currentDate]);

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

  // Delete Food Handler
  const handleDeleteFood = (mealTime: string, foodId: React.Key) => {
    setMeals((prevMeals) =>
      prevMeals.map((meal) =>
        meal.time === mealTime
          ? {
              ...meal,
              items: meal.items.filter((item) => item.id !== foodId),
              totalCalories: meal.items
                .filter((item) => item.id !== foodId)
                .reduce((sum, item) => sum + item.calories, 0),
            }
          : meal
      )
    );
  };

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
              {isToday(currentDate) ? "Today" : currentDate.toDateString()}
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
          <MealSection
            key={index}
            meal={meal}
            onDeleteFood={handleDeleteFood}
          />
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
    flex: 1,
  },
  macroColumnText: {
    fontSize: 16,
    width: 50,
    fontWeight: "bold",
    textAlign: "right",
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
    marginBottom: 20,
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

import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, FlatList } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Header from "./Header";
import NavBar from "./NavBar";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../RootStackParamList";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

const SearchFood = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const foodHistory = [
    { id: "1", name: "Oikos Vanilla Yoghurt", serving: "10.6 Ounce" },
    { id: "2", name: "Eggs", serving: "3 large" },
    { id: "3", name: "Cheeseburger", serving: "1 serving, Moxies" },
    { id: "4", name: "2% Milk", serving: "1 cup, Beatrice" },
    { id: "5", name: "Grilled Chicken Breast", serving: "6 Ounce" },
    { id: "6", name: "Brown Rice", serving: "1 cup, cooked" },
    { id: "7", name: "Broccoli", serving: "1 cup, steamed" },
    { id: "8", name: "Banana", serving: "1 medium" },
    { id: "9", name: "Peanut Butter", serving: "2 Tablespoons" },
    { id: "10", name: "Whole Wheat Bread", serving: "2 slices" },
    { id: "11", name: "Avocado", serving: "1/2 medium" },
    { id: "12", name: "Sweet Potato", serving: "1 medium, baked" },
    { id: "13", name: "Salmon Fillet", serving: "5 Ounce" },
    { id: "14", name: "Apple", serving: "1 medium" },
    { id: "15", name: "Almonds", serving: "1 Ounce (about 23 nuts)" },
    { id: "16", name: "Greek Salad", serving: "1 cup" },
    { id: "17", name: "Turkey Sandwich", serving: "1 serving" },
    { id: "18", name: "Spaghetti with Marinara", serving: "1 cup, cooked" },
    { id: "19", name: "Mixed Nuts", serving: "1/4 cup" },
    { id: "20", name: "Blueberries", serving: "1 cup, fresh" },
  ];

  // State for search query, filtered results, and sorting order
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredFoods, setFilteredFoods] = useState(foodHistory);
  const [sortOrder, setSortOrder] = useState("Most Recent"); // Default sorting order

  // Handle search query updates
  const handleSearch = (query: string) => {
    setSearchQuery(query);

    // Filter the food history based on the search query
    const filtered = foodHistory.filter((item) =>
      item.name.toLowerCase().includes(query.toLowerCase())
    );

    setFilteredFoods(filtered);
  };

  // Toggle sorting order and rearrange data
  const toggleSortOrder = () => {
    const newSortOrder = sortOrder === "Most Recent" ? "Oldest" : "Most Recent";
    setSortOrder(newSortOrder);

    const sortedList = [...filteredFoods].reverse(); // Reverse the current list
    setFilteredFoods(sortedList);
  };

  const renderFoodItem = ({ item }: { item: { id: string; name: string; serving: string } }) => (
    <TouchableOpacity onPress={() => navigation.navigate("FoodInfo")} style={styles.foodItem}>
      <View style={styles.foodDetails}>
        <Text style={styles.foodName}>{item.name}</Text>
        <Text style={styles.foodServing}>{item.serving}</Text>
      </View>
      <TouchableOpacity style={styles.addButton}>
        <Ionicons name="add" size={24} color="#007AFF" />
      </TouchableOpacity>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <Header />

      {/* Header with Search */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate("Nutrition")}>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <TextInput
          style={styles.searchInput}
          placeholder="Search Food"
          placeholderTextColor="#999"
          value={searchQuery}
          onChangeText={handleSearch} // Handle search input
        />
        <TouchableOpacity onPress={() => handleSearch("")}>
          <Ionicons name="close" size={24} color="#999" />
        </TouchableOpacity>
      </View>

      {/* History Section */}
      <View style={styles.historyHeader}>
        <Text style={styles.historyTitle}>History</Text>
        <TouchableOpacity style={styles.filterButton} onPress={toggleSortOrder}>
          <Text style={styles.filterText}>{sortOrder}</Text>
        </TouchableOpacity>
      </View>

      {/* Food List */}
      <FlatList
        data={filteredFoods} // Use filtered and sorted results
        keyExtractor={(item) => item.id}
        renderItem={renderFoodItem}
        contentContainerStyle={styles.foodList}
        ListEmptyComponent={<Text style={styles.emptyText}>No results found.</Text>} // Show message if no results
      />

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
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 16,
    marginBottom: 16,
    marginHorizontal: 20,
  },
  searchInput: {
    flex: 1,
    height: 40,
    backgroundColor: "#F5F5F5",
    borderRadius: 8,
    marginHorizontal: 10,
    paddingHorizontal: 12,
    fontSize: 16,
    color: "#000",
  },
  historyHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
    marginHorizontal: 20,
  },
  historyTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
  filterButton: {
    backgroundColor: "#F5F5F5",
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  filterText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#007AFF",
  },
  foodList: {
    marginHorizontal: 20,
    paddingBottom: 120,
  },
  foodItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 10,
    marginBottom: 10,
    paddingHorizontal: 20,
    paddingVertical: 12,
  },
  foodDetails: {
    flexDirection: "column",
  },
  foodName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },
  foodServing: {
    fontSize: 14,
    color: "#666",
  },
  addButton: {
    padding: 8,
  },
  emptyText: {
    textAlign: "center",
    fontSize: 16,
    color: "#666",
    marginTop: 20,
  },
});

export default SearchFood;

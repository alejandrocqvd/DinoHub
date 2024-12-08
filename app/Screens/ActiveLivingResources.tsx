import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
  Dimensions,
  Linking,
} from "react-native";
import Header from "./Header";
import NavBar from "./NavBar";

const { height, width } = Dimensions.get("window");

export default function MyComponent() {
  const [searchText, setSearchText] = useState("");

  const resources = [
    {
      name: "Squash Courts",
      url: "https://active-living.ucalgary.ca/facilities/racquet-centre",
    },
    {
      name: "Ice Skating Rink",
      url: "https://oval.ucalgary.ca/recreational-skating-running/skating",
    },
    {
      name: "Climbing Wall",
      url: "https://outdoor-centre.ucalgary.ca/climbingbouldering-wall",
    },
    {
      name: "Gym",
      url: "https://active-living.ucalgary.ca/facilities/fitness-centre",
    },
    {
      name: "Aquatic Centre",
      url: "https://active-living.ucalgary.ca/facilities/aquatic-centre",
    },
    {
      name: "Mental Health Resources",
      url: "https://www.ucalgary.ca/wellness-services/home",
    },
  ];

  // Function to handle resource click
  const handleResourcePress = (url: string) => {
    Linking.openURL(url).catch((err) =>
      console.error("Failed to open URL:", err)
    );
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.innerContainer}>
          {/* Header Section */}
          <Header />

          {/* Main Content */}
          <View style={styles.content}>
            {/* Title */}
            <Text style={styles.title}>Active Living Resources</Text>

            {/* Search Bar */}
            <View style={styles.searchBar}>
              <TextInput
                style={styles.searchInput}
                placeholder="Search resources"
                placeholderTextColor="#555"
                value={searchText}
                onChangeText={(text) => setSearchText(text)}
              />
              <TouchableOpacity
                onPress={() => setSearchText("")}
                style={styles.clearButton}
              >
                <Text style={styles.clearButtonText}>✖</Text>
              </TouchableOpacity>
            </View>

            {/* Resource Links */}
            <ScrollView style={styles.resourcesList}>
              {resources
                .filter((resource) =>
                  resource.name.toLowerCase().includes(searchText.toLowerCase())
                )
                .map((resource, index) => (
                  <TouchableOpacity
                    key={index}
                    style={styles.resourceItem}
                    onPress={() => handleResourcePress(resource.url)}
                  >
                    <Text style={styles.resourceText}>{resource.name}</Text>
                    <Text style={styles.arrow}>➡️</Text>
                  </TouchableOpacity>
                ))}
            </ScrollView>
          </View>

          {/* Bottom Navigation Bar */}
          <NavBar />
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f8f8",
  },
  innerContainer: {
    flex: 1,
  },
  content: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 10,
    color: "#333",
    backgroundColor: "#fff",
  },
  searchInput: {
    flex: 1,
    height: 40,
    fontSize: 16,
    color: "#333",
  },
  clearButton: {
    marginLeft: 10,
  },
  clearButtonText: {
    fontSize: 18,
    color: "#333",
  },
  resourcesList: {
    flex: 1,
  },
  resourceItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 15,
    marginBottom: 10,
    borderRadius: 5,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 2,
  },
  resourceText: {
    fontSize: 16,
    fontWeight: "500",
  },
  arrow: {
    fontSize: 18,
    color: "#d32f2f",
  },
});

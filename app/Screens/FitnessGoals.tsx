import React from "react";
import { View, Text, TextInput, StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Back from "../assets/ProfileAssets/arrow_back.svg";

const { width } = Dimensions.get("window");

export default function FitnessGoals({ navigation }: { navigation: any }) {
  const progress = 0.72; // Example: 72% progress

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Back />
        </TouchableOpacity>
        <Text style={styles.title}>Goals</Text>
      </View>

      {/* Progress Section */}
      <View style={styles.progressSection}>
        <Text style={styles.progressLabel}> Training 10/12           Nutrition 2/3           Recovery 2/3</Text>
        <View style={styles.progressBarContainer}>
          <View style={[styles.progressBar, { width: `${progress * 100}%` }]} />
        </View>
        <Text style={styles.progressPercentage}>{Math.round(progress * 100)}%</Text>
      </View>

      {/* Input Fields */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Goal Type</Text>
        <TextInput style={styles.input} placeholder="I want to ..." placeholderTextColor="#999" />

        <Text style={styles.label}>Current Weight</Text>
        <TextInput style={styles.input} placeholder="Weight" placeholderTextColor="#999" />

        <Text style={styles.label}>Weight Goal</Text>
        <TextInput style={styles.input} placeholder="Goal" placeholderTextColor="#999" />

        <Text style={styles.label}>Calorie Intake</Text>
        <TextInput style={styles.input} placeholder="Calories" placeholderTextColor="#999" />

        <Text style={styles.label}>Experience Level</Text>
        <TextInput
          style={styles.input}
          placeholder="Beginner, Intermediate, Advanced ..."
          placeholderTextColor="#999"
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f8f8",
  },
  header: {
    display: "flex",
    backgroundColor: "#D6001C",
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  title: {
    color: "white",
    fontSize: 32,
    marginLeft: 120,
  },
  progressSection: {
    margin: 20,
  },
  progressLabel: {
    fontSize: 16,
    marginBottom: 10,
    color: "#333",
  },
  progressBarContainer: {
    height: 20,
    backgroundColor: "#e0e0e0",
    borderRadius: 10,
    overflow: "hidden",
    marginBottom: 8,
  },
  progressBar: {
    height: "100%",
    backgroundColor: "#d32f2f",
    borderRadius: 10,
  },
  progressPercentage: {
    fontSize: 16,
    color: "#333",
    textAlign: "right",
  },
  inputContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
  label: {
    fontSize: 16,
    color: "#333",
    marginBottom: 5,
  },
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
    backgroundColor: "#fff",
  },
});

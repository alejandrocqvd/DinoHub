import React from "react";
import { View, Text, TextInput, StyleSheet, Dimensions, TouchableOpacity } from "react-native";

const { height, width } = Dimensions.get("window");

export default function FitnessGoals({ navigation }: { navigation: any }) {
  const progress = 0.722; // Example: 72.2% progress

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backButton}>Back</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Set Goals</Text>
      </View>

      {/* Progress Section */}
      <View style={styles.progressContainer}>
        <View>
          <Text style={styles.progressText}>Training 10/12</Text>
          <Text style={styles.progressText}>Nutrition 2/3</Text>
          <Text style={styles.progressText}>Recovery 2/3</Text>
        </View>

        {/* Progress Circle */}
        <View style={styles.progressCircle}>
          <View style={[styles.circle, { transform: [{ rotate: `${progress * 360}deg` }] }]} />
          <Text style={styles.percentageText}>{(progress * 100).toFixed(1)}%</Text>
        </View>
      </View>

      {/* Input Fields */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Goal Type</Text>
        <TextInput style={styles.input} placeholder="I want to ..." placeholderTextColor="#999" />

        <Text style={styles.label}>Current Weight</Text>
        <TextInput style={styles.input} placeholder="Weight" placeholderTextColor="#999" />

        <Text style={styles.label}>Weight Goal</Text>
        <TextInput style={styles.input} placeholder="Weight Goal" placeholderTextColor="#999" />

        <Text style={styles.label}>Calorie Intake</Text>
        <TextInput style={styles.input} placeholder="Calories" placeholderTextColor="#999" />

        <Text style={styles.label}>Experience Level</Text>
        <TextInput
          style={styles.input}
          placeholder="Beginner, Intermediate, Advanced ..."
          placeholderTextColor="#999"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
    marginTop: 10,
  },
  backButton: {
    color: "#007AFF",
    fontSize: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
    textAlign: "center",
  },
  progressContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  progressText: {
    fontSize: 16,
    color: "#333",
    marginBottom: 5,
  },
  progressCircle: {
    width: width * 0.3,
    height: width * 0.3,
    borderRadius: (width * 0.3) / 2,
    borderWidth: 10,
    borderColor: "#d32f2f",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    position: "relative",
  },
  circle: {
    width: "100%",
    height: "100%",
    borderWidth: 10,
    borderColor: "rgba(211, 47, 47, 0.3)",
    borderRadius: 1000,
    position: "absolute",
  },
  percentageText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#d32f2f",
  },
  inputContainer: {
    marginTop: 20,
  },
  label: {
    fontSize: 16,
    color: "#333",
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
    fontSize: 16,
    color: "#333",
    backgroundColor: "#f9f9f9",
  },
});

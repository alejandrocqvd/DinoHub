import { View, Text, TouchableOpacity, TextInput, StyleSheet } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../RootStackParamList";
import { Picker } from "@react-native-picker/picker";

import Back from "../assets/ProfileAssets/arrow_back.svg";
import Avatar from "../assets/ProfileAssets/Generic avatar (1).svg";

import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

type Props = NativeStackScreenProps<RootStackParamList, "Profile">;

export default function Profile({ navigation }: Props) {
  const [drop, setDrop] = useState<string>("BodyBuilding");

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.Header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Back />
        </TouchableOpacity>
        <Text style={styles.HeaderText}>Profile</Text>
      </View>

      {/* Avatar Section */}
      <View style={styles.AvatarSection}>
        <Avatar style={styles.Avatar} />
        <Text style={styles.AvatarName}>Yousif Coleman</Text>
      </View>

      {/* Info Section */}
      <View style={styles.InfoSection}>
        <Text style={styles.InfoHeader}>Name</Text>
        <TextInput placeholder="Name" style={styles.input} />

        <Text style={styles.InfoHeader}>Email</Text>
        <TextInput placeholder="Email" style={styles.input} />

        <Text style={styles.InfoHeader}>Password</Text>
        <TextInput placeholder="Password" style={styles.input} />

        <Text style={styles.InfoHeader}>Goals</Text>
        <Picker selectedValue={drop} onValueChange={(item) => setDrop(item)}>
          <Picker.Item label="BodyBuilding" value="BodyBuilding" />
          <Picker.Item label="Power Lifting" value="Power Lifting" />
          <Picker.Item label="General Health" value="General Health" />
        </Picker>

        {/* Fitness Goals Navigation */}
        <TouchableOpacity onPress={() => navigation.navigate("FitnessGoals")}>
          <Text style={{ color: "blue", textAlign: "center", marginTop: 10 }}>Set Fitness Goals</Text>
        </TouchableOpacity>

        {/* Save Profile */}
        <TouchableOpacity onPress={()=> navigation.goBack()}style={styles.SaveProfileBtn}>
          <Text style={{ color: "white", textAlign: "center", padding: 10 }}>Save Profile</Text>
        </TouchableOpacity>
      </View>

      {/* Delete Button Section */}
      <View style={styles.DeleteButtonSection}>
        <TouchableOpacity>
          <Text style={{ color: "red", textAlign: "center", marginTop: 20 }}>Delete Account</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f8f8",
  },
  Header: {
    display: "flex",
    backgroundColor: "#D6001C",
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    // marginTop: 50,
  },
  HeaderText: {
    color: "white",
    fontSize: 32,
    marginLeft: 100,
  },
  AvatarSection: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 30,
    flex: 1,
  },
  Avatar: {
    marginLeft: 60,
    marginRight: 20,
  },
  AvatarName: {
    fontSize: 24,
    fontWeight: "bold",
  },
  InfoSection: {
    flex: 8,
    paddingHorizontal: 20,
  },
  InfoHeader: {
    textAlign: "center",
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
    backgroundColor: "#fff",
  },
  SaveProfileBtn: {
    backgroundColor: "#D6001C",
    borderRadius: 5,
    marginTop: 10,
  },
  DeleteButtonSection: {
    flex: 1,
  },
});

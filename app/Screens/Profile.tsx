import { View, Text, TouchableOpacity, TextInput, StyleSheet, Modal } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../RootStackParamList";
import { Picker } from "@react-native-picker/picker";
import Back from "../assets/ProfileAssets/arrow_back.svg";
import Avatar from "../assets/ProfileAssets/Generic avatar (1).svg";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from 'react-native-vector-icons/Ionicons';

type Props = NativeStackScreenProps<RootStackParamList, "Profile">;

export default function Profile({ navigation }: Props) {
  const [drop, setDrop] = useState<string>("BodyBuilding");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [password, setPassword] = useState('password123');
  const [email, setEmail] = useState('yousif.coleman@ucalgary.ca');
  const [name, setName] = useState('Yousif Coleman');
  
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const handleDeleteAccount = () => {
    setShowDeleteModal(true);
  };

  const confirmDelete = () => {
    navigation.navigate("Init");
    setShowDeleteModal(false);
  };

  // Cancel Deletion
  const cancelDelete = () => {
    setShowDeleteModal(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.Header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Back />
        </TouchableOpacity>
        <Text style={styles.HeaderText}>Profile</Text>
      </View>

      <View style={styles.AvatarSection}>
        <Avatar style={styles.Avatar} />
        <Text style={styles.AvatarName}>{name}</Text>
      </View>

      <View style={styles.InfoSection}>
        <Text style={styles.InfoHeader}>Name</Text>
        <TextInput 
          placeholder="Name" 
          style={styles.input} 
          value={name}
          onChangeText={setName}
        />

        <Text style={styles.InfoHeader}>Email</Text>
        <TextInput 
          placeholder="Email" 
          style={styles.input} 
          value={email}
          onChangeText={setEmail}
        />

        <Text style={styles.InfoHeader}>Password</Text>
        <View style={styles.passwordContainer}>
          <TextInput
            placeholder="Password"
            secureTextEntry={!passwordVisible}
            style={styles.input}
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity
            style={styles.eyeIcon}
            onPress={() => setPasswordVisible(!passwordVisible)}
          >
            <Ionicons name={passwordVisible ? 'eye' : 'eye-off'} size={24} color="gray" />
          </TouchableOpacity>
        </View>

        <Text style={styles.InfoHeader}>Goals</Text>
        <Picker style={styles.picker} itemStyle={{ color: 'black' }} selectedValue={drop} onValueChange={(item) => setDrop(item)}>
          <Picker.Item label="BodyBuilding" value="Body Building" />
          <Picker.Item label="Power Lifting" value="Power Lifting" />
          <Picker.Item label="General Health" value="General Health" />
        </Picker>

        <TouchableOpacity onPress={() => navigation.navigate("FitnessGoals")}>
          <Text style={{ color: "blue", textAlign: "center", marginTop: 10 }}>Set Fitness Goals</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=> navigation.goBack()} style={styles.SaveProfileBtn}>
          <Text style={{ color: "white", textAlign: "center", padding: 10 }}>Save Profile</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.DeleteButtonSection}>
        <TouchableOpacity onPress={handleDeleteAccount}>
          <Text style={{ color: "red", textAlign: "center", marginTop: 20 }}>Delete Account</Text>
        </TouchableOpacity>
      </View>

      {/* Confirmation Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={showDeleteModal}
        onRequestClose={cancelDelete}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalText}>Are you sure you want to delete your account?</Text>
            <View style={styles.modalButtons}>
              <TouchableOpacity
                onPress={confirmDelete}
                style={styles.modalButton}
              >
                <Text style={styles.modalButtonText}>Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={cancelDelete}
                style={styles.modalButton}
              >
                <Text style={styles.modalButtonText}>No</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
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
  picker: {
    marginTop: 5,
    marginBottom: 15,
    borderColor: "#000",
    borderRadius: 10,
    borderWidth: 1,
  },
  input: {
    width: '100%',
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
  passwordContainer: {
    position: 'relative',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  eyeIcon: {
    position: 'absolute',
    right: 10,
    top: -2,
    padding: 10,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContainer: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    width: '80%',
    alignItems: "center",
  },
  modalText: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
  },
  modalButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  modalButton: {
    backgroundColor: "#D6001C",
    padding: 10,
    borderRadius: 5,
    width: "48%",
    alignItems: "center",
  },
  modalButtonText: {
    color: "white",
    fontWeight: "bold",
  },
});

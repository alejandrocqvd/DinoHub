import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, ScrollView, TextInput, Modal } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../RootStackParamList';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { getCurrentID, getCurrentData } from './WorkoutSessionData';
import Header from './Header';
import NavBar from './NavBar';
import { Ionicons } from "@expo/vector-icons";
import DoneButton from '../assets/CurrentWorkOutAssests/DoneButton.svg';

type Props = NativeStackScreenProps<RootStackParamList, 'CurrentWorkoutPage'>;
const { height, width } = Dimensions.get('window');

export default function CurrentWorkoutPage({ navigation }: Props) {
  const [sets, setSets] = useState<any[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [isWorkoutFinished, setIsWorkoutFinished] = useState(false);

  useEffect(() => {
    const filteredSets = getCurrentData()
      .filter((item) => item.TemplateID === getCurrentID())
      .map((item) => item.TemplateSets)
      .flat();
    setSets(filteredSets || []);
  }, []);

  const data = getCurrentData()
    .filter((item) => item.TemplateID === getCurrentID())
    .map((item) => item.TemplateData)
    .flat();

  // Get the current template based on TemplateID
  const template = getCurrentData()
    .find((item) => item.TemplateID === getCurrentID());

  const navigationTool = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const AddASet = (exerciseId: number | undefined) => {
    const currentHighestID = sets[sets.length - 1]?.id || 0;
    setSets([
      ...sets,
      { ExcerciseId: exerciseId, id: currentHighestID + 1, set: 0, reps: 0, weight: 0 },
    ]);
  };

  // Handle finishing the workout
  const finishWorkout = () => {
    setIsWorkoutFinished(true);
    setShowModal(true);
  };

  // Confirm the workout finish
  const confirmFinish = () => {
    setShowModal(false);
    navigationTool.navigate("Home");
  };

  // Cancel finishing the workout
  const cancelFinish = () => {
    setShowModal(false);
  };

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.Header}>
        <TouchableOpacity onPress={() => navigationTool.navigate("Home")}>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.currentWorkout}>
          {template?.NameTemplate}
        </Text>
      </View>

      <View style={styles.finishContainer}>
        <TouchableOpacity onPress={finishWorkout} style={styles.finishButton}>
          <DoneButton width={30} height={30} />
          <Text style={styles.finishText}>Finish Workout</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.Content}>
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
          {data.map((item) => (
            <View key={item?.DataId} style={styles.Boxes}>
              <Text style={styles.bold}>
                {item?.DataId} - {item?.DataName}
              </Text>
              {sets
                .filter((info) => info.ExcerciseId === item?.DataId)
                .map((info) => (
                  <View key={info.id} style={styles.Info}>
                    <TextInput
                      style={styles.setInfo}
                      value={info.set}
                      placeholder="Sets"
                      placeholderTextColor="#708090"
                      keyboardType="numeric"
                      onChangeText={(text) =>
                        setSets((prev) =>
                          prev.map((s) =>
                            s.id === info.id ? { ...s, set: parseInt(text) || 0 } : s
                          )
                        )
                      }
                    />
                    <TextInput
                      style={styles.setInfo}
                      value={info.reps}
                      placeholder="Reps"
                      placeholderTextColor="#708090"
                      keyboardType="numeric"
                      onChangeText={(text) =>
                        setSets((prev) =>
                          prev.map((s) =>
                            s.id === info.id ? { ...s, reps: parseInt(text) || 0 } : s
                          )
                        )
                      }
                    />
                    <TextInput
                      style={styles.setInfo}
                      value={info.weight}
                      placeholder="Weight"
                      placeholderTextColor="#708090"
                      keyboardType="numeric"
                      onChangeText={(text) =>
                        setSets((prev) =>
                          prev.map((s) =>
                            s.id === info.id ? { ...s, weight: parseInt(text) || 0 } : s
                          )
                        )
                      }
                    />
                  </View>
                ))}
              <TouchableOpacity onPress={() => AddASet(item?.DataId)}>
                <Text style={styles.Add}>Add a set</Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
      </View>

      <NavBar />

      <Modal
        animationType="slide"
        transparent={true}
        visible={showModal}
        onRequestClose={cancelFinish}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalText}>Are you sure you want to finish this workout?</Text>
            <View style={styles.modalButtons}>
              <TouchableOpacity onPress={confirmFinish} style={styles.modalButton}>
                <Text style={styles.modalButtonText}>Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={cancelFinish} style={styles.modalButton}>
                <Text style={styles.modalButtonText}>No</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f8f8",
  },
  Header: {
    marginTop: 20,
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: width * 0.06,
  },
  backButton: {
    marginRight: 10,
  },
  currentWorkout: {
    fontSize: 28,
    fontWeight: "bold",
    flex: 1,
    textAlign: 'center',
    left: -13
  },
  finishContainer: {
    alignItems: 'center',
    marginBottom: 10,
  },
  finishButton: {
    backgroundColor: '#5A3E75',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 30,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  finishText: {
    color: '#fff',
    fontSize: 16,
    marginLeft: 10,
  },
  Content: {
    marginBottom: 95,
    flex: 6,
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 20,
    width: "100%",
  },
  bold: {
    fontWeight: "bold",
    marginVertical: 10,
  },
  scrollViewContent: {
    width: "100%",
  },
  Info: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '100%',
  },
  setInfo: {
    borderWidth: 1,
    borderRadius: 5,
    width: 70,
    padding: 5,
    backgroundColor: "#f8f8f8",
    textAlign: "center",
    margin: 5,
  },
  Add: {
    marginBottom: 10,
    marginTop: 10,
    marginHorizontal: width * 0.06,
  },
  Boxes: {
    backgroundColor: '#fff',
    marginBottom: height * (30 / 851),
    marginHorizontal: width * 0.06,
    borderRadius: 15,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: width * 0.8,
    alignItems: 'center',
  },
  modalText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  modalButton: {
    backgroundColor: '#D6001C',
    padding: 10,
    borderRadius: 5,
    width: '48%',
    alignItems: 'center',
  },
  modalButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

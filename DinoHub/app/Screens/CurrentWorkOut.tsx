import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, ScrollView, Modal } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../RootStackParamList';
import Header from './Header';
import { SafeAreaView } from 'react-native-safe-area-context';
import NavBar from './NavBar';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { getCurrentData, setCurrentId, addTemplate, removeTemplate } from './WorkoutSessionData';

import AddButton from '../assets/CurrentWorkOutAssests/AddButton.svg';
import Play from '../assets/CurrentWorkOutAssests/Play.svg';
import Edit from '../assets/CurrentWorkOutAssests/Edit.svg';
import Remove from '../assets/CurrentWorkOutAssests/Minus (1).svg';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;
const { height, width } = Dimensions.get('window');

export default function CurrentWorkOut({ navigation }: Props) {
  const navigationTool = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  // State to hold workout data
  const [templates, setTemplates] = useState([
    { id: 1, name: 'Push Day' },
    { id: 2, name: 'Pull Day' },
    { id: 3, name: 'Leg Day' },
    { id: 4, name: 'Push Day Default Template' },
    { id: 5, name: 'Pull Day Default Template' },
    { id: 6, name: 'Leg Day Default Template' },
    { id: 7, name: 'Custom Full Body' },
  ]);

  // State for the confirmation modal
  const [showModal, setShowModal] = useState(false);
  const [deleteId, setDeleteId] = useState<number | null>(null);

  // Function to delete a workout by its id
  const onDelete = (id: number) => {
    setDeleteId(id);
    setShowModal(true);
  };



  // Function to confirm deletion
  const confirmDelete = () => {
    if (deleteId !== null) {
      // setTemplates((prevTemplates) => prevTemplates.filter((template) => template.id !== deleteId));
      removeTemplate(deleteId);
      setShowModal(false);
      setDeleteId(null);
    }
  };

  // Function to cancel deletion
  const cancelDelete = () => {
    setShowModal(false);
    setDeleteId(null);
  };

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.Main}>
        <View style={styles.InnerNav}>
          <TouchableOpacity style={[styles.InnerNavBtn, { backgroundColor: '#D6001C' }]}>
            <Text style={[styles.InnerNavBtnText, { color: 'white' }]}>Templates</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigationTool.navigate('History')} style={styles.InnerNavBtn}>
            <Text style={styles.InnerNavBtnText}>History</Text>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity
            onPress={() => {
              navigationTool.navigate('CurrentWorkoutPageAdd');
            }}
            style={styles.NewWorkoutBtnBox}
          >
            <Text style={styles.NewWorkoutText}>+  New Workout Template</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.Content}>
          <ScrollView contentContainerStyle={styles.scrollViewContent}>
            {getCurrentData().map((item) => (
              <View style={styles.ContentBox} key={item.TemplateID}>
                <Text>{item.NameTemplate}</Text>
                <View style={styles.Buttons}>
                  <TouchableOpacity
                    style={styles.play}
                    onPress={() => {
                      navigationTool.navigate('CurrentWorkoutPage');
                      const value: number = item.TemplateID;
                      setCurrentId(value);
                    }}
                  >
                    <Play />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.edit}
                    onPress={() => {
                      navigationTool.navigate('CurrentWorkoutPageEdit');
                      const value: number = item.TemplateID;
                      setCurrentId(value);
                    }}
                  >
                    <Edit />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.deleteButton}
                    onPress={() => onDelete(item.TemplateID)}
                  >
                    <Text style={styles.deleteText}>X</Text>
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </ScrollView>
        </View>
      </View>

      <NavBar />

      <Modal
        animationType="slide"
        transparent={true}
        visible={showModal}
        onRequestClose={cancelDelete}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalText}>Are you sure you want to delete this template?</Text>
            <View style={styles.modalButtons}>
              <TouchableOpacity onPress={confirmDelete} style={styles.modalButton}>
                <Text style={styles.modalButtonText}>Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={cancelDelete} style={styles.modalButton}>
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

  Main: {
    display: 'flex',
    flex: 1,
    justifyContent: 'space-between',
    alignItems: "center",
    height: height * (670 / 851),
  },

  InnerNav: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    height: height * (74 / 851),
    width: '100%',
    marginBottom: 20,
  },

  InnerNavBtn: {
    width: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: height * 0.08695,
    borderRightColor: 'black',
    borderRightWidth: 1,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderTopColor: "black",
  },

  InnerNavBtnText: {
    fontSize: 25,
    fontWeight: 800,
  },

  AddBtnBox: {
    display: 'flex',
    marginLeft: '80%',
    justifyContent: 'flex-end',
    marginBottom: 20,
  },

  Content: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: height * (60 / 851)+20,
    height: height * (450 / 851),
    marginHorizontal: "auto"
  },

  scrollViewContent: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  
  ContentBox: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    width: width * 0.9,
    marginRight: 10, 
    height: height * (50 / 851),
    marginHorizontal: 5,
    marginBottom: 15,
    borderRadius: 10,
    paddingHorizontal: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 5,
  },

  Buttons: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },

  play: {
    display: 'flex',
    alignItems: 'center',
    borderRightColor: 'black',
    marginRight: 22,
  },

  edit: {
    marginLeft: 22,
    marginRight: 35,
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

  NewWorkoutBtnBox: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#5A3E75',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginBottom: 20,
  },

  NewWorkoutText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    marginLeft: 10,
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

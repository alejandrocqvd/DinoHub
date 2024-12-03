import { View, Text, StyleSheet, TouchableOpacity, Dimensions, ScrollView, TextInput } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../RootStackParamList';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useState, useEffect } from 'react';
import { getCurrentID, getCurrentData } from './WorkoutSessionData';
import Header from './Header';
import NavBar from './NavBar';
import BackButton from '../assets/CurrentWorkOutAssests/BackButton.svg';
import DoneButton from '../assets/CurrentWorkOutAssests/DoneButton.svg';

type Props = NativeStackScreenProps<RootStackParamList, 'CurrentWorkoutPage'>;
const { height, width } = Dimensions.get('window');

export default function CurrentWorkoutPage({ navigation }: Props) {
  const [sets, setSets] = useState<any[]>([]);

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

  const navigationTool = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const AddASet = (exerciseId: number | undefined) => {
    const currentHighestID = sets[sets.length - 1]?.id || 0;
    setSets([
      ...sets,
      { ExcerciseId: exerciseId, id: currentHighestID + 1, set: 0, reps: 0, weight: 0 },
    ]);
  };

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.Header}>
        <TouchableOpacity onPress={() => navigationTool.navigate('Home')} style={styles.backButton}>
          <BackButton />
        </TouchableOpacity>
        <Text style={styles.currentWorkout}>Current Workout</Text>
        <TouchableOpacity onPress={() => navigationTool.navigate('Home')} style={styles.doneButton}>
          <DoneButton />
        </TouchableOpacity>
      </View>
      <View style={styles.Content}>
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
          {data.map((item) => (
            <View key={item?.DataId} style={styles.Boxes}>
              <Text style={styles.bold}>{item?.DataId} - {item?.DataName}</Text>
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
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: width * 0.06,
  },
  backButton: {
    marginLeft: width * (23 / 396),
  },
  doneButton: {
    marginRight: width * (23 / 396),
  },
  Content: {
    marginBottom: 95,
    flex: 6,
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 20,
    width: "100%"
  },
  bold: {
    fontWeight: "bold",
    marginVertical: 10,
  }, 


  scrollViewContent: {
    width: "100%"
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
  currentWorkout: {
    fontSize: 16,
    fontWeight: "bold"
  }
});

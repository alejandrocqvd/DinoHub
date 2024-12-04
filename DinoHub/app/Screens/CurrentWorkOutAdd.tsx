import { View, Text, StyleSheet, TouchableOpacity, Dimensions, ScrollView, TextInput } from 'react-native';
import NavBar from './NavBar';
import Header from './Header';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../RootStackParamList';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useState } from 'react';

import BackButton from '../assets/CurrentWorkOutAssests/BackButton.svg';
import AddButton from '../assets/CurrentWorkOutAssests/Add.svg';
import RemoveButton from '../assets/CurrentWorkOutAssests/Minus.svg';
import SaveButton from '../assets/CurrentWorkOutAssests/Save.svg';

const { height, width } = Dimensions.get('window');

type Props = NativeStackScreenProps<RootStackParamList, 'CurrentWorkoutPageAdd'>;

export default function CurrentWorkOutAdd({ navigation }: Props) {
  const navigationTool = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const [exercises, setExercises] = useState<{ id: number; name: string }[]>([]);

  const addExercise = () => {
    const newExercise = {
      id: exercises.length + 1,
      name: `Exercise ${exercises.length + 1}`,
    };
    setExercises([...exercises, newExercise]);
  };

  const removeExercise = () => {
    setExercises((prevExercises) => prevExercises.slice(0, -1));
  };

  const handleUpdateExerciseName = (id: number, name: string) => {
    setExercises((prevExercises) =>
      prevExercises.map((exercise) =>
        exercise.id === id ? { ...exercise, name } : exercise
      )
    );
  };

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.Header}>
        <TouchableOpacity onPress={() => navigationTool.navigate('Home')}>
          <BackButton />
        </TouchableOpacity>

        <TouchableOpacity onPress={removeExercise}>
          <RemoveButton />
        </TouchableOpacity>

        <TouchableOpacity onPress={addExercise}>
          <AddButton />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigationTool.navigate('Home')}>
          <SaveButton />
        </TouchableOpacity>
      </View>

      <View style={styles.Content}>
        <ScrollView contentContainerStyle={styles.scrollContent}>
          {exercises.map((exercise) => (
            <View key={exercise.id} style={styles.exerciseBox}>
              <TextInput
                style={styles.input}
                value={exercise.name}
                onChangeText={(text) => handleUpdateExerciseName(exercise.id, text)}
              />
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
    backgroundColor: '#f8f8f8',
  },

  Header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: width * 0.06,
    marginTop: 20,
  },

  Content: {
    flex: 1,
    marginBottom: 95,
    marginTop: 20,
    paddingHorizontal: width * 0.06,
  },

  scrollContent: {
    flexGrow: 1,
    paddingBottom: 10,
  },

  exerciseBox: {
    backgroundColor: '#fff',
    marginBottom: 20,
    borderRadius: 15,
    paddingVertical: 15,
    paddingHorizontal: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },

  input: {
    height: 40,
    width: '100%',
    marginVertical: 8,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#ccc',
    fontSize: 16,
  },
});

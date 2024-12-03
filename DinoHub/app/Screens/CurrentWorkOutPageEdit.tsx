import { View, Text, StyleSheet, TouchableOpacity, Dimensions, ScrollView, TextInput } from 'react-native';
import NavBar from './NavBar';
import Header from './Header';
import { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../RootStackParamList';

import BackButton from '../assets/CurrentWorkOutAssests/BackButton.svg';
import AddButton from '../assets/CurrentWorkOutAssests/Add.svg';
import RemoveButton from '../assets/CurrentWorkOutAssests/Minus.svg';
import SaveButton from '../assets/CurrentWorkOutAssests/Save.svg';
import { useNavigation } from 'expo-router';

import { getCurrentData, getCurrentID,addToTemplate,TemplateData,setCurrentId } from './WorkoutSessionData';
import { useState, useRef } from 'react';

type Props = NativeStackScreenProps<RootStackParamList, 'CurrentWorkoutPageEdit'>;
const { height, width } = Dimensions.get('window');

export default function CurrentWorkoutPageEdit({ navigation }: Props) {
  const navigationTool = useNavigation<NativeStackNavigationProp<RootStackParamList>>();



  const [data, setData] = useState(
    getCurrentData()
      .filter((item) => item.TemplateID === getCurrentID())
      .map((item) => item.TemplateData)
      .flat()
  );

  const [otherData,setOtherData] = useState( getCurrentData()
    .filter((item) => item.TemplateID === getCurrentID())
    .map((item) => item.TemplateSets)
    .flat());

  const AddExcercise = () => {
    const currentHighestID = data[data.length - 1]?.DataId || 0;
    const currentHighestOther = otherData[otherData.length-1]?.id ||0;
    setData([...data, { DataId: currentHighestID + 1, DataName: 'New Exercise' }]);
    setOtherData([...otherData,{ExcerciseId:currentHighestID+1,id:currentHighestOther+1,set:0,reps:0,weight:0}])
  };






  const RemoveExcercise = () => {
    setData((prevData) => prevData.slice(0, -1));
    setOtherData((prev)=>prev.slice(0,-1));
  };


  


  // Function to update set, rep, or weight
  const handleUpdateInfo = (dataId: number, field: string, value: string) => {
    setData((prevData) =>
      prevData.map((d) => {
        if (d?.DataId === dataId) {
          const updatedSets = otherData.map((info) =>
            info?.ExcerciseId === dataId
              ? { ...info, [field]: value } // Dynamically update field
              : info
          );
          return { ...d, TemplateSets: updatedSets };
        }
        return d;
      })
    );
  };

  const handleAddToTemplate = () => {
    const currentID = getCurrentID();
    const validData = data.filter((item): item is TemplateData => !!item);
    const validOtherData = otherData.filter((info) => !!info); // Ensure no undefined in otherData
  
    addToTemplate(currentID,validData,validOtherData);
  };
  





  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.Header}>
        <TouchableOpacity onPress={() => navigationTool.navigate('Home')}>
          <BackButton />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => RemoveExcercise()}>
          <RemoveButton />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => AddExcercise()}>
          <AddButton />
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>{
          navigationTool.navigate('Home')
          handleAddToTemplate()

        }}>
          <SaveButton />
        </TouchableOpacity>
      </View>

      <View style={styles.Content}>
        <ScrollView contentContainerStyle={styles.scrollContent}>
          {data.map((item) => (
            <View key={item?.DataId} style={styles.Boxes}>
              <TextInput
                style={styles.input}
                value={item?.DataName}
                onChangeText={(text) => {
                  setData((prevData) =>
                    prevData.map((d) => (d?.DataId === item?.DataId ? { ...d, DataName: text } : d))
                  );
                }}
              />

              {otherData
                .filter((info) => info?.ExcerciseId === item?.DataId)
                .map((info) => (
                  <View key={info?.id} style={styles.Info}>
                    <Text>Sets:</Text>
                    <TextInput
                      style={styles.input}
                      value={String(info?.set)} // Ensure it is a string
                      onChangeText={(text) => handleUpdateInfo(item?.DataId, 'set', text)}
                      keyboardType="numeric"
                    />

                    <Text>Reps:</Text>
                    <TextInput
                      style={styles.input}
                      value={String(info?.reps)} // Ensure it is a string
                      onChangeText={(text) => handleUpdateInfo(item?.DataId, 'reps', text)}
                      keyboardType="numeric"
                    />

                    <Text>Weight:</Text>
                    <TextInput
                      style={styles.input}
                      value={String(info?.weight)} // Ensure it is a string
                      onChangeText={(text) => handleUpdateInfo(item?.DataId, 'weight', text)}
                      keyboardType="numeric"
                    />
                  </View>
                ))}
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
    paddingHorizontal: width * 0.06, // Ensures no overflow
  },

  scrollContent: {
    flexGrow: 1,
    paddingBottom: 10, // Prevents cut-off of last elements
  },

  Boxes: {
    backgroundColor: '#fff',
    marginBottom: 20,
    borderRadius: 15,
    paddingVertical: 15,
    paddingHorizontal: 10,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },

  Info: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    width: '100%',
    marginVertical: 10,
  },

  input: {
    height: 40,
    width: '100%', // Make sure it takes full width
    marginVertical: 8,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#ccc',
    fontSize: 16,
  },
});

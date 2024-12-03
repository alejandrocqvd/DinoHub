import {View,Text,StyleSheet,TouchableOpacity,Dimensions, ScrollView, TextInput} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../RootStackParamList';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useState,useEffect } from 'react';

import { getCurrentID,getCurrentData } from './WorkoutSessionData';


import Header from './Header';
import NavBar from './NavBar';

import BackButton from '../assets/CurrentWorkOutAssests/BackButton.svg';
import DoneButton from '../assets/CurrentWorkOutAssests/DoneButton.svg';


type Props= NativeStackScreenProps<RootStackParamList,'CurrentWorkoutPage'> 
const { height, width } = Dimensions.get('window');










export default function CurrentWorkoutPage({ navigation }: Props) {
    // const [sets, setSets] = useState([
    //     { ExcerciseId: 1, id: 1, set: 0, reps: 0, weight: 0 },
    //     { ExcerciseId: 2, id: 2, set: 0, reps: 0, weight: 0 },
    //     { ExcerciseId: 1, id: 3, set: 0, reps: 0, weight: 0 },
    // ]);

    const [sets, setSets] = useState<any[]>([]);

    useEffect(() => {
        // Get the matching TemplateSets for the current TemplateID
        const filteredSets = getCurrentData()
            .filter((item) => item.TemplateID === getCurrentID())
            .map((item) => item.TemplateSets)
            .flat(); // Flatten the array if TemplateSets is nested

        setSets(filteredSets || []); // Initialize state with filtered sets
    }, []);


    const data = getCurrentData()
    .filter((item) => item.TemplateID === getCurrentID())
    .map((item) => item.TemplateData)
    .flat();

    console.log(getCurrentID())

    const navigationTool = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

    const AddASet = (exerciseId: number) => {
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
                <TouchableOpacity style={styles.doneButton}>
                    <DoneButton />
                </TouchableOpacity>
            </View>
            <View style={styles.Content}>
                <ScrollView>
                    {data.map((item) => (
                        
                        <View key={item?.DataId} style={styles.Boxes}>
                            <Text>
                                {item?.DataName} {item?.DataId}
                            </Text>
                            {sets
                                .filter((info) => info.ExcerciseId === item?.DataId)
                                .map((info) => (
                                    <View key={info.id} style={styles.Info}>
                                        <TextInput
                                            value={info.set}
                                            placeholder="sets"
                                            keyboardType="numeric"
                                            onChangeText={(text) =>
                                                setSets((prev) =>
                                                    prev.map((s) =>
                                                        s.id === info.id
                                                            ? { ...s, set: parseInt(text) || 0 }
                                                            : s
                                                    )
                                                )
                                            }
                                        />
                                        <TextInput
                                            value={info.reps}
                                            placeholder="Reps"
                                            keyboardType="numeric"
                                            onChangeText={(text) =>
                                                setSets((prev) =>
                                                    prev.map((s) =>
                                                        s.id === info.id
                                                            ? { ...s, reps: parseInt(text) || 0 }
                                                            : s
                                                    )
                                                )
                                            }
                                        />
                                        <TextInput
                                            value={info.weight}
                                            placeholder="Weight"
                                            keyboardType="numeric"
                                            onChangeText={(text) =>
                                                setSets((prev) =>
                                                    prev.map((s) =>
                                                        s.id === info.id
                                                            ? { ...s, weight: parseInt(text) || 0 }
                                                            : s
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

    container:{
        display:'flex',
        flex:1,
        justifyContent:'space-between'
    },


    Header:{
        marginTop:20,
        width:width,
        flex:1,
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },


    backButton:{
        marginLeft:width*(23/396)
    },

    doneButton:{
        marginRight:width*(23/396)
    },


    Content:{
        // backgroundColor:'yellow',
        marginBottom:95,
        flex:6,
        display:'flex',
        width:width,
        justifyContent:'flex-start',
        alignItems:'center',
        marginTop:50,
    },

    Boxes:{
        backgroundColor:'#F2F4FB',
        marginBottom:height*(30/851),
        width:width*(314/393),
        height:height*(220/851),
        borderRadius:15,
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center'
    },

    Info:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-evenly',
        width:width*(225/393),
    },

    InfoText:{
        // fontSize:24

    },


    Add:{
        marginBottom:10,
        // fontSize:24
    },







})
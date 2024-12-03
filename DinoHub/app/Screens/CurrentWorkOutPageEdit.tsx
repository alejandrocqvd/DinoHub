import {View,Text,StyleSheet, TouchableOpacity,Dimensions, ScrollView,TextInput} from 'react-native';
import NavBar from './NavBar';
import Header from './Header';
import { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../RootStackParamList';


import BackButton from '../assets/CurrentWorkOutAssests/BackButton.svg';
import AddButton from '../assets/CurrentWorkOutAssests/Add.svg';
import RemoveButton from '../assets/CurrentWorkOutAssests/Minus.svg';
import SaveButton from '../assets/CurrentWorkOutAssests/Save.svg';
import { useNavigation } from 'expo-router';


import { getCurrentData,getCurrentID } from './WorkoutSessionData';
import { useEffect, useState } from 'react';


type Props= NativeStackScreenProps<RootStackParamList,'CurrentWorkoutPageEdit'> 
const { height, width } = Dimensions.get('window');


export default function CurrentWorkoutPageEdit({navigation}:Props){





    const navigationTool = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    
    const [data, setData] = useState(
        getCurrentData()
            .filter((item) => item.TemplateID === getCurrentID())
            .map((item) => item.TemplateData)
            .flat()
    );

    const otherData =getCurrentData()
    .filter((item)=>item.TemplateID===getCurrentID())
    .map((item)=>item.TemplateSets)
    .flat();

    console.log(otherData);

    const AddExcercise = () => {
        const currentHighestID = data[data.length - 1]?.DataId || 0;
        setData([...data, { DataId: currentHighestID + 1, DataName: "New Excercise" }]);
    };

    const RemoveExcercise = () => {
        setData((prevData) => prevData.slice(0, -1));
    };
    

    return(
        <View style={styles.container}>

            <Header/>

            <View style ={styles.Header}>
                
                <TouchableOpacity onPress={()=>navigationTool.navigate('Home')}>
                    <BackButton/>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={()=>{

                        RemoveExcercise()


                    }}
                
                
                >
                    <RemoveButton/>
                </TouchableOpacity>


                <TouchableOpacity onPress={()=>{
                    
                    AddExcercise()

                }}>
                    <AddButton/>
                </TouchableOpacity>


                <TouchableOpacity>
                    <SaveButton/>
                </TouchableOpacity>


            </View>

            <View style={styles.Content}>

                <ScrollView>

                    {
                        data.map((item)=>(
                            <View key={item?.DataId} style={styles.Boxes}>
                                

                                <TextInput
                                    value={item?.DataName}
                                    onChangeText={(text) => {
                                        setData((prevData) =>
                                            prevData.map((d) =>
                                                d?.DataId === item?.DataId ? { ...d, DataName: text } : d
                                            )
                                        );
                                    }}
                                />



                                {
                                    otherData
                                    .filter((info)=>info?.ExcerciseId===item?.DataId)
                                    .map((info)=>(
                                        <View key= {info?.id} style={styles.Info}>
                                            <Text>Sets: {info?.set}</Text>
                                            <Text>Reps: {info?.reps}</Text>
                                            <Text>Weight: {info?.weight}</Text>
                                        </View>
                                        

                                    ))
                                }







                            </View>
                        ))
                    }











                </ScrollView>






            </View>







            <NavBar/>


        </View>
    )


}



const styles = StyleSheet.create({
    container:{
        display:'flex',
        flex:1,
        justifyContent:'space-between'
    },

    Header:{
        flex:1,
        marginTop:20,
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        width:width,
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
        height:height*(220/851),
        alignItems:'center'

    },



})
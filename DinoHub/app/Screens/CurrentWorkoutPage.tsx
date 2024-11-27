import {View,Text,StyleSheet,TouchableOpacity,Dimensions, ScrollView, TextInput} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../RootStackParamList';

import Header from './Header';
import NavBar from './NavBar';

import BackButton from '../assets/CurrentWorkOutAssests/BackButton.svg';
import DoneButton from '../assets/CurrentWorkOutAssests/DoneButton.svg';


type Props= NativeStackScreenProps<RootStackParamList,'CurrentWorkoutPage'> 
const { height, width } = Dimensions.get('window');










export default function CurrentWorkoutPage({navigation}:Props){

    const data = [
        {id:1,name:'Tricep pushdowns'},
        {id:2,name:'Skull crushers'},
        {id:3,name:'Biceps or smthn'},
    ]
    return(
        <View style={styles.container}>


            <Header/>


            <View style={styles.Header}>

                <TouchableOpacity style={styles.backButton}>
                    <BackButton/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.doneButton}>
                    <DoneButton/>
                </TouchableOpacity>


            </View>
            
            <View style={styles.Content}>
                

                <ScrollView>

                    {

                        data.map((item)=>(


                            <View style={styles.Boxes}>
                                <Text>
                                    {item.name} {item.id}
                                </Text>

                                <View>
                                    <Text>Sets</Text>
                                    <Text>Reps</Text>
                                    <Text>Weight</Text>
                                </View>

                                <TouchableOpacity>
                                    <Text>Add a set</Text>
                                </TouchableOpacity>




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
        flex:6,
        display:'flex',
        width:width,
        justifyContent:'center',
        alignItems:'center',
        marginTop:50,
    },

    Boxes:{
        backgroundColor:'yellow',
        marginBottom:height*(30/851),
        width:width*(314/393),
        height:height*(220/851),
        borderRadius:15,
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center'
    },



    



})
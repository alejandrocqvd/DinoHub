import {View,Text,StyleSheet, TouchableOpacity,Dimensions, ScrollView} from 'react-native';
import NavBar from './NavBar';
import Header from './Header';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../RootStackParamList';


import BackButton from '../assets/CurrentWorkOutAssests/BackButton.svg';
import AddButton from '../assets/CurrentWorkOutAssests/Add.svg';
import RemoveButton from '../assets/CurrentWorkOutAssests/Minus.svg';
import SaveButton from '../assets/CurrentWorkOutAssests/Save.svg';

type Props= NativeStackScreenProps<RootStackParamList,'CurrentWorkoutPageEdit'> 
const { height, width } = Dimensions.get('window');


export default function CurrentWorkoutPageEdit({navigation}:Props){


    const data = [
        { id: 1, name: 'Tricep pushdowns' },
        { id: 2, name: 'Skull crushers' },
        { id: 3, name: 'Major Bruh Alert' },
    ];

    return(
        <View style={styles.container}>

            <Header/>

            <View style ={styles.Header}>
                
                <TouchableOpacity>
                    <BackButton/>
                </TouchableOpacity>

                <TouchableOpacity>
                    <RemoveButton/>
                </TouchableOpacity>


                <TouchableOpacity>
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
                            <View key={item.id} style={styles.Boxes}>
                                <Text>
                                    {item.name} {item.id}
                                </Text>
                                <Text>
                                    Set
                                </Text>

                                <Text>
                                    Rep
                                </Text>

                                <Text>
                                    Weight
                                </Text>







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



})
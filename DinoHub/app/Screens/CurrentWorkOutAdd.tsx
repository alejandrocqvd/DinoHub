import {View,Text,StyleSheet, TouchableOpacity,Dimensions, ScrollView} from 'react-native';
import NavBar from './NavBar';
import Header from './Header';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../RootStackParamList';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { getCurrentID,getCurrentData } from './WorkoutSessionData';

import BackButton from '../assets/CurrentWorkOutAssests/BackButton.svg';
import AddButton from '../assets/CurrentWorkOutAssests/Add.svg';
import RemoveButton from '../assets/CurrentWorkOutAssests/Minus.svg';
import SaveButton from '../assets/CurrentWorkOutAssests/Save.svg';

type Props= NativeStackScreenProps<RootStackParamList,'CurrentWorkoutPageAdd'> 
const { height, width } = Dimensions.get('window');


export default function CurrentWorkOutAdd({navigation}:Props){
    const navigationTool = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

    
    
    return(



        <View style={styles.container}>

            <Header/>


            <View style ={styles.Header}>
                
                <TouchableOpacity onPress={()=>navigationTool.navigate('Home')}>
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

})
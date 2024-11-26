import {View,Text,StyleSheet} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../RootStackParamList';

import Header from './Header';
import NavBar from './NavBar';



type Props= NativeStackScreenProps<RootStackParamList,'CurrentWorkoutPage'> 

export default function CurrentWorkoutPage({navigation}:Props){


    return(
        <View style={styles.container}>


            <Header/>

            <View>

                <Text>
                    Content will go here
                </Text>

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
    }

})
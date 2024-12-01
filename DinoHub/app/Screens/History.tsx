import {View, Text,StyleSheet, TouchableOpacity,Dimensions,ScrollView} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../RootStackParamList';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import Header from './Header';
import NavBar from './NavBar';



type Props = NativeStackScreenProps<RootStackParamList,'History'>
const { height, width } = Dimensions.get('window');

export default function History({navigation}:Props){

    return(

        <View>

            <Header/>


            <View>
                        <TouchableOpacity  >
                            <Text  >Templates</Text>
                        </TouchableOpacity>

                        <TouchableOpacity  >
                            <Text  >History</Text>
                        </TouchableOpacity>
            </View>

            <NavBar/>





        </View>
    )


}

const styles = StyleSheet.create({

    container:{
        
    }

})
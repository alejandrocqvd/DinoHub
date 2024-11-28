import {View,Text,StyleSheet} from 'react-native';
import NavBar from './NavBar';
import Header from './Header';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../RootStackParamList';


type Props= NativeStackScreenProps<RootStackParamList,'CurrentWorkoutPageEdit'> 


export default function CurrentWorkoutPageEdit({navigation}:Props){



    return(
        <View style={styles.container}>

            <Header/>

            <View>
                <Text>
                    Edit Page or smthn like that
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
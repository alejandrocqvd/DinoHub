import {Text,View} from 'react-native'
import { RootStackParamList } from '../RootStackParamList'
import { NativeStackScreenProps } from "@react-navigation/native-stack";


type Props = NativeStackScreenProps<RootStackParamList,'SignUp'>


export default function SignUp({navigation}:Props){
    return(
        <View>
            <Text>
                This is the Sign Up page
            </Text>
        </View>
    )
}
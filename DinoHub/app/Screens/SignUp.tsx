import {Text,View,TouchableOpacity,TextInput} from 'react-native'
import { RootStackParamList } from '../RootStackParamList'
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import BouncyCheckbox from 'react-native-bouncy-checkbox';


type Props = NativeStackScreenProps<RootStackParamList,'SignUp'>


export default function SignUp({navigation}:Props){
    return(
        <View>
            

            <View>
                <TouchableOpacity>
                    <Text>
                        Back
                    </Text>
                </TouchableOpacity>

                <Text>Register</Text>

            </View>


            <View>

                <Text>Email</Text>

                <TextInput
                
                    placeholder='Email'
                
                />
                

                <Text>Password</Text>

                <TextInput
                
                    placeholder='Password'
                
                />

                <TouchableOpacity>
                    <Text>
                        Register
                    </Text>
                </TouchableOpacity>

                <View>
                    <BouncyCheckbox/>
                    <Text>Terms and Conditions</Text>
                </View>
                <Text>Description</Text>


            </View>


            <View>

                <TouchableOpacity>
                    <Text>Logo  Sign in with Google</Text>
                </TouchableOpacity>


                <TouchableOpacity>
                    <Text>Logo  Sign in with Apple</Text>

                </TouchableOpacity>


                <TouchableOpacity>
                    <Text>Logo  Sign in with Facebook</Text>

                </TouchableOpacity>


            </View>










        </View>
    )
}
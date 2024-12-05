import {Text,View,TouchableOpacity,TextInput} from 'react-native'
import { RootStackParamList } from '../RootStackParamList'
import { NativeStackScreenProps } from "@react-navigation/native-stack";


type Props = NativeStackScreenProps<RootStackParamList,'Login'>


export default function Login({navigation}:Props){
    return(
        <View>
            

            <View>
                <TouchableOpacity>
                    <Text>
                        Back
                    </Text>
                </TouchableOpacity>

                <Text>Log in</Text>

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

                <TouchableOpacity onPress={()=>navigation.navigate('Home')}>
                    <Text>
                        Log in
                    </Text>
                </TouchableOpacity>

                <Text>
                    Forgot password ?
                </Text>


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
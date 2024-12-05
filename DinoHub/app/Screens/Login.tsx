import {Text,View,TouchableOpacity,TextInput, StyleSheet} from 'react-native'
import { RootStackParamList } from '../RootStackParamList'
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import Back from "../assets/ProfileAssets/arrow_back.svg";
import GoogleLogo from "../assets/InitPagesAssets/Google.svg";
import AppleLogo from "../assets/InitPagesAssets/Apple.svg";
import FacebookLogo from "../assets/InitPagesAssets/Facebook.svg";

type Props = NativeStackScreenProps<RootStackParamList,'Login'>


export default function Login({navigation}:Props){
    return(
        <View style={styles.container}>
            <View style={styles.Header}>
                <TouchableOpacity onPress={()=>navigation.navigate('Init')}>
                    <Back />
                </TouchableOpacity>
                <Text style={styles.HeaderText}>Log in</Text>
            </View>
            <View style={styles.InputContainer}>
                <Text >Email</Text>
                <TextInput placeholder='Email' style={styles.input}/>
                <Text>Password</Text>
                <TextInput placeholder='Password' style={styles.input}/>
                <TouchableOpacity style={styles.LogIn} onPress={()=>navigation.navigate('Home')}>
                    <Text style={styles.buttonTextO}>
                        Log in
                    </Text>
                </TouchableOpacity>
                <Text>
                    Forgot password ?
                </Text>
            </View>


            <View style={styles.SignInContainer}>
                <TouchableOpacity style={styles.SignUp}>
                    <Text style={styles.buttonText}>
                        <GoogleLogo/>  Sign in with Google
                    </Text>
                </TouchableOpacity>


                <TouchableOpacity style={styles.SignUp}>
                    <Text style={styles.buttonText}>
                        <AppleLogo/>  Sign in with Apple
                    </Text>
                </TouchableOpacity>


                <TouchableOpacity style={styles.SignUp}>
                    <Text style={styles.buttonText}>
                        <FacebookLogo/>  Sign in with Facebook
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#D6001C',
        justifyContent: 'flex-start',
        alignItems: 'center',
      },
      LogIn: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#D6001C',
        padding: 10,
        marginBottom: 20,
        width: "100%",  
        borderRadius: 5,
      },
      SignUp: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 10,
        marginBottom: 20,
        width: "100%",  
        borderRadius: 5,
      },
      InputContainer: {
        width: "100%",
        paddingHorizontal: 16,
        marginTop: 180,
        marginBottom: 160,
      },
      SignInContainer: {
        width: "100%",
        paddingHorizontal: 16,
      },
      buttonText: {
        textAlign: 'center',
        fontSize: 22,  
      },
      input: {
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 5,
        padding: 10,
        marginBottom: 15,
        backgroundColor: "#fff",
      },
      buttonTextO:{
        textAlign:'center',
        fontSize:22,
        color:'white'
      },
      Header: {
        width: "100%",
        display: "flex",
        backgroundColor: "#D6001C",
        flexDirection: "row",
        alignItems: "center",
        padding: 10,
      },
      HeaderText: {
        color: "white",
        fontSize: 32,
        marginLeft: 100,
      },
  });
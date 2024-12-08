import { Text, View, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import { RootStackParamList } from '../RootStackParamList';
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import Back from "../assets/ProfileAssets/arrow_back.svg";
import GoogleLogo from "../assets/InitPagesAssets/Google.svg";
import AppleLogo from "../assets/InitPagesAssets/Apple.svg";
import FacebookLogo from "../assets/InitPagesAssets/Facebook.svg";
import { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

type Props = NativeStackScreenProps<RootStackParamList, 'Login'>;

export default function Login({ navigation }: Props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleLogin = () => {
    setEmailError('');
    setPasswordError('');

    if (!email.includes('@')) {
      setEmailError('Please enter a valid email address');
    }
    if (!password) {
      setPasswordError('Please enter a password');
    }

    if (email.includes('@') && password) {
      navigation.navigate('Home');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.Header}>
        <TouchableOpacity onPress={() => navigation.navigate('Init')}>
          <Back />
        </TouchableOpacity>
        <Text style={styles.HeaderText}>Log in</Text>
      </View>
      <View style={styles.InputContainer}>
        <Text>Email</Text>
        <TextInput
          placeholder="Email"
          style={styles.input}
          value={email}
          onChangeText={setEmail}
        />
        {emailError ? <Text style={styles.errorMessage}>{emailError}</Text> : null}

        <Text>Password</Text>
        <TextInput
          placeholder="Password"
          style={styles.input}
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        {passwordError ? <Text style={styles.errorMessage}>{passwordError}</Text> : null}

        <TouchableOpacity style={styles.LogIn} onPress={handleLogin}>
          <Text style={styles.buttonTextO}>Log in</Text>
        </TouchableOpacity>
        <Text>Forgot password?</Text>
      </View>

      <View style={styles.SignInContainer}>
        <TouchableOpacity style={styles.SignUp}>
          <View style={styles.socialButton}>
            <GoogleLogo width={40} height={40} style={styles.socialIcon} />
            <Text style={styles.buttonText}>Sign in with Google</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.SignUp}>
          <View style={styles.socialButton}>
            <AppleLogo width={50} height={50} style={styles.socialIcon} />
            <Text style={styles.buttonText}>Sign in with Apple</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.SignUp}>
          <View style={styles.socialButton}>
            <FacebookLogo width={34} height={34} style={styles.socialIcon} />
            <Text style={styles.buttonText}>Sign in with Facebook</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  LogIn: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D6001C',
    padding: 10,
    marginBottom: 20,
    width: '100%',
    borderRadius: 5,
  },
  SignUp: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10,
    marginBottom: 20,
    width: '100%',
    borderRadius: 5,
  },
  InputContainer: {
    width: '100%',
    paddingHorizontal: 16,
    marginTop: 100,
    marginBottom: 160,
  },
  SignInContainer: {
    width: '100%',
    paddingHorizontal: 16,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 22,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
    backgroundColor: '#fff',
  },
  buttonTextO: {
    textAlign: 'center',
    fontSize: 22,
    color: 'white',
  },
  errorMessage: {
    color: 'red',
    fontSize: 14,
    marginBottom: 10,
    textAlign: 'center',
  },
  Header: {
    width: '100%',
    display: 'flex',
    backgroundColor: '#D6001C',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  HeaderText: {
    color: 'white',
    fontSize: 32,
    marginLeft: 100,
    fontWeight: "bold"
  },
  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 32,
  },
  socialIcon: {
    marginRight: 10,
    width: 24,
    height: 24,
  },
});

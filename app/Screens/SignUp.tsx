import React, { useState } from 'react';
import { Text, View, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import { RootStackParamList } from '../RootStackParamList';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import Back from "../assets/ProfileAssets/arrow_back.svg";
import GoogleLogo from "../assets/InitPagesAssets/Google.svg";
import AppleLogo from "../assets/InitPagesAssets/Apple.svg";
import FacebookLogo from "../assets/InitPagesAssets/Facebook.svg";
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';

type Props = NativeStackScreenProps<RootStackParamList, 'SignUp'>;

export default function SignUp({ navigation }: Props) {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [termsChecked, setTermsChecked] = useState(false);
  const [termsError, setTermsError] = useState('');

  const handleRegister = () => {
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      setEmailError('');
      setTermsError('');
    } else if (!email.includes('@')) {
      setEmailError('Please enter a valid email address');
      setError('');
      setTermsError('');
    } else if (!termsChecked) { // Check if terms are checked
      setTermsError('You must accept the terms and conditions');
      setError('');
      setEmailError('');
    } else {
      setError('');
      setEmailError('');
      setTermsError('');
      navigation.navigate('Login');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.Header}>
        <TouchableOpacity onPress={() => navigation.navigate('Init')}>
          <Back />
        </TouchableOpacity>
        <Text style={styles.HeaderText}>Register</Text>
      </View>
      <View style={styles.InputContainer}>
        <Text>Email</Text>
        <TextInput 
          placeholder='Email' 
          style={styles.input} 
          value={email}
          onChangeText={setEmail}
        />
        {emailError ? <Text style={styles.errorMessage}>{emailError}</Text> : null}

        <Text>Password</Text>
        <View style={styles.passwordContainer}>
          <TextInput
            placeholder='Password'
            secureTextEntry={!passwordVisible}
            style={styles.input}
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity
            style={styles.eyeIcon}
            onPress={() => setPasswordVisible(!passwordVisible)}
          >
            <Ionicons name={passwordVisible ? 'eye' : 'eye-off'} size={24} color="gray" />
          </TouchableOpacity>
        </View>

        <Text>Confirm Password</Text>
        <View style={styles.passwordContainer}>
          <TextInput
            placeholder='Confirm Password'
            secureTextEntry={!confirmPasswordVisible}
            style={styles.input}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />
          <TouchableOpacity
            style={styles.eyeIcon}
            onPress={() => setConfirmPasswordVisible(!confirmPasswordVisible)}
          >
            <Ionicons name={confirmPasswordVisible ? 'eye' : 'eye-off'} size={24} color="gray" />
          </TouchableOpacity>
        </View>

        {error ? <Text style={styles.errorMessage}>{error}</Text> : null}
        {termsError ? <Text style={styles.errorMessage}>{termsError}</Text> : null}

        <TouchableOpacity style={styles.LogIn} onPress={handleRegister}>
          <Text style={styles.registerText}>Register</Text>
        </TouchableOpacity>

        <View style={styles.termsConditions}>
          <BouncyCheckbox
            isChecked={termsChecked}
            onPress={(checked) => setTermsChecked(checked)}
          />
          <Text>Terms and Conditions</Text>
        </View>
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
    width: "100%",
    borderRadius: 5,
    marginTop: 10,
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
    marginTop: 50,
    marginBottom: 80,
  },
  SignInContainer: {
    width: "100%",
    paddingHorizontal: 16,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 18,
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
    backgroundColor: "#fff",
    marginTop: 10,
  },
  errorMessage: {
    color: 'red',
    fontSize: 14,
    marginBottom: 10,
    textAlign: 'center',
  },
  termsConditions: {
    flexDirection: "row",
  },
  registerText: {
    color: "#fff",
    fontWeight: "bold"
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
    marginLeft: 90,
    fontWeight: "bold"
  },
  passwordContainer: {
    position: 'relative',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  eyeIcon: {
    position: 'absolute',
    right: 10,
    top: 8,
    padding: 10,
  },
  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: "center",
    width: '100%',
    height: 32,
  },
  socialIcon: {
    marginRight: 10,
    width: 24,
    height: 24,
  },
});

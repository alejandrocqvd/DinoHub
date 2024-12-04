import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { RootStackParamList } from '../RootStackParamList';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import DinoHub from '../assets/InitPagesAssets/DinoHub.svg';

type Props = NativeStackScreenProps<RootStackParamList, 'Init'>;

export default function Init({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.DinoHub}>
        <DinoHub />
      </View>

      <View>
        <TouchableOpacity 
          style={styles.SignUp} 
          onPress={() => navigation.navigate('SignUp')}  // Replace 'SignUp' with your screen name
        >
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.button} 
          onPress={() => navigation.navigate('Login')}  // Replace 'LogIn' with your screen name
        >
          <Text style={styles.buttonTextO}>Log In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D6001C',
    justifyContent: 'center',
    alignItems: 'center',
  },
  DinoHub: {
    marginBottom: 300,
  },
  SignUp: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10,
    marginBottom: 20,
    width: 300,  
    borderRadius: 5, 
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    marginBottom: 20,
    width: 300,  
    borderRadius: 5,  
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 22,  
  },
  buttonTextO:{
    textAlign:'center',
    fontSize:22,
    color:'white'
  }


});

import { Image, Platform,View, Text, Dimensions, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'; // Should be here only
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import  React from 'react';
import { RootStackParamList } from './RootStackParamList';
import CurrentWorkOut from './Screens/CurrentWorkOut';

const Stack = createNativeStackNavigator<RootStackParamList>();


export default function App() {
  return (
          <Stack.Navigator  screenOptions={{ headerShown: false }}>
              
              <Stack.Screen name='Home' component={CurrentWorkOut}/>

          </Stack.Navigator>


      
        
  );
}


import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from './RootStackParamList';
import CurrentWorkOut from './Screens/CurrentWorkOut';
import Nutrition from './Screens/Nutrition';
import CurrentWorkoutPage from './Screens/CurrentWorkoutPage';
import CurrentWorkoutPageEdit from './Screens/CurrentWorkOutPageEdit';
import SearchFood from './Screens/SearchFood';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <Stack.Navigator
      screenOptions={{
        animation: "none",
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={CurrentWorkOut} />
      <Stack.Screen name="Nutrition" component={Nutrition} />
      <Stack.Screen name='CurrentWorkoutPage' component={CurrentWorkoutPage}/>
      <Stack.Screen name='CurrentWorkoutPageEdit' component={CurrentWorkoutPageEdit}/>

      <Stack.Screen name="SearchFood" component={SearchFood} />
    </Stack.Navigator>
  );
}

import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from './RootStackParamList';
import CurrentWorkOut from './Screens/CurrentWorkOut';
import Nutrition from './Screens/Nutrition';
import CurrentWorkoutPage from './Screens/CurrentWorkoutPage';
import CurrentWorkoutPageEdit from './Screens/CurrentWorkOutPageEdit';
import CurrentWorkOutAdd from './Screens/CurrentWorkOutAdd';
import SearchFood from './Screens/SearchFood';
import FoodInfo from './Screens/FoodInfo';

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
      <Stack.Screen name='CurrentWorkoutPageAdd' component={CurrentWorkOutAdd}/>
      <Stack.Screen name="SearchFood" component={SearchFood} />
      <Stack.Screen name="FoodInfo" component={FoodInfo} />
    </Stack.Navigator>
  );
}

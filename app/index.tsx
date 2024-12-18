import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "./RootStackParamList";
import CurrentWorkOut from "./Screens/CurrentWorkOut";
import Nutrition from "./Screens/Nutrition";
import CurrentWorkoutPage from "./Screens/CurrentWorkoutPage";
import CurrentWorkoutPageEdit from "./Screens/CurrentWorkOutPageEdit";
import CurrentWorkOutAdd from "./Screens/CurrentWorkOutAdd";
import SearchFood from "./Screens/SearchFood";
import FoodInfo from "./Screens/FoodInfo";
import History from "./Screens/History";
import FoodEditInfo from "./Screens/FoodEditInfo";
import Sleep from "./Screens/Sleep";
import EditHistorical from "./Screens/EditHistorical";
import SleepTrends from "./Screens/SleepTrends";
import ActiveLivingResources from "./Screens/ActiveLivingResources";
import FitnessGoals from "./Screens/FitnessGoals";
import Init from "./Screens/Init";
import Profile from "./Screens/Profile";
import SyncedWatchPage from "./Screens/SyncedWatchPage";
import Login from "./Screens/Login";
import SignUp from "./Screens/SignUp";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <Stack.Navigator
      screenOptions={{
        animation: "none",
        headerShown: false,
      }}
    >
      <Stack.Screen name="Init" component={Init} />
      <Stack.Screen name="Home" component={CurrentWorkOut} />
      <Stack.Screen name="Nutrition" component={Nutrition} />
      <Stack.Screen name="CurrentWorkoutPage" component={CurrentWorkoutPage} />
      <Stack.Screen
        name="CurrentWorkoutPageEdit"
        component={CurrentWorkoutPageEdit}
      />
      <Stack.Screen
        name="CurrentWorkoutPageAdd"
        component={CurrentWorkOutAdd}
      />
      <Stack.Screen name="SearchFood" component={SearchFood} />
      <Stack.Screen name="FoodInfo" component={FoodInfo} />
      <Stack.Screen name="History" component={History} />
      <Stack.Screen name="FoodEditInfo" component={FoodEditInfo} />
      <Stack.Screen name="Sleep" component={Sleep} />
      <Stack.Screen name="EditHistorical" component={EditHistorical} />
      <Stack.Screen name="SleepTrends" component={SleepTrends} />
      <Stack.Screen name="ActiveLivingResources" component={ActiveLivingResources} />
      <Stack.Screen name="FitnessGoals" component={FitnessGoals} />
      <Stack.Screen name="Profile" component={Profile}/>
      <Stack.Screen name="SyncedWatchPage" component={SyncedWatchPage} />
      <Stack.Screen name="Login" component={Login}/>
      <Stack.Screen name="SignUp" component={SignUp}/>
    </Stack.Navigator>
  );
}

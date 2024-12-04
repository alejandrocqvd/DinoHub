import { View, Text, TouchableOpacity, TextInput } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../RootStackParamList";

import Back from "../assets/ProfileAssets/arrow_back.svg";
import Avatar from "../assets/ProfileAssets/Generic avatar (1).svg";

type Props = NativeStackScreenProps<RootStackParamList, "Profile">;

export default function Profile({ navigation }: Props) {
  return (
    <View>
      {/* Header */}
      <View>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Back />
        </TouchableOpacity>
        <Text>Profile</Text>
      </View>

      {/* Profile Section */}
      <View>
        <Avatar />
        <Text>Yousif Coleman</Text>
      </View>

      {/* Form Section */}
      <View>
        <Text>Name</Text>
        <TextInput placeholder="Name" />

        <Text>Email</Text>
        <TextInput placeholder="Email" />

        <Text>Password</Text>
        <TextInput placeholder="Password" />

        {/* Goals Section */}
        <TouchableOpacity onPress={() => navigation.navigate("FitnessGoals")}>
          <Text style={{ color: "blue" }}>Fitness Goals</Text>
        </TouchableOpacity>

        {/* Save Profile */}
        <TouchableOpacity>
          <Text>Save profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

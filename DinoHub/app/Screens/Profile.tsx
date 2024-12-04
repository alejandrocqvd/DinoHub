import { View,Text,TouchableOpacity,TextInput } from "react-native";
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../RootStackParamList';

import Back from '../assets/ProfileAssets/arrow_back.svg';
import Avatar from '../assets/ProfileAssets/Generic avatar (1).svg';

type Props = NativeStackScreenProps<RootStackParamList, 'Profile'>;

export default function Profile(){

    return(
        <View>
            
            <View>

                <TouchableOpacity>
                    <Back/>
                </TouchableOpacity>
                    
                <Text>
                    Profile
                </Text>
            </View>

            <View>
                <Avatar/>
                <Text>Yousif Coleman</Text>

            </View>

            <View>

                <Text>
                    Name
                </Text>
                <TextInput
                    placeholder="Name"
                />


                <Text>
                    Email
                </Text>
                <TextInput
                    placeholder="Email"
                />


                <Text>
                    Password
                </Text>
                <TextInput
                    placeholder="Password"
                />

                <Text>
                    Goals
                </Text>


                <TouchableOpacity>

                    <Text>
                        Save profile
                    </Text>

                </TouchableOpacity>





            </View>














        </View>
    )


}
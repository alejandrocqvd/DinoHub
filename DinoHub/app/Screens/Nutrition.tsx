import React from "react";
import {View,Text} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../RootStackParamList';


type Props = NativeStackScreenProps<RootStackParamList,'Nutrition'>




export default function Nutrition({navigation}:Props) {
    return (
        <View>
            <Text>Nutrition</Text>

        </View>
    );
}

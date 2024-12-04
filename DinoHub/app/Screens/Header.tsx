import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, SafeAreaView } from 'react-native';
import Profile from '../assets/ProfilePic.svg';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../RootStackParamList';

const { height, width } = Dimensions.get('window');

export default function Header() {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Text style={styles.text}>
                    DinoHub
                </Text>

                <TouchableOpacity onPress={()=>navigation.navigate('Profile')} style={styles.touchable}>
                    <Profile/>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#D6001C',
        height: height * 0.0975,
        width: width,
        paddingHorizontal: 20,
    },
    text: {
        color: 'white',
        fontSize: 32,
        fontWeight: 800,
        fontFamily:'Inter',
        fontStyle:'normal'
    },
    touchable: {
        padding: 10,
    },
});

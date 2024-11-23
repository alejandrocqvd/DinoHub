import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, SafeAreaView } from 'react-native';
import Dumbell from '../assets/NavBarAssets/Dumbell.svg';
import Nut from '../assets/NavBarAssets/Nutrition.svg';
import Sleep from '../assets/NavBarAssets/Sleep.svg';
import Resources from '../assets/NavBarAssets/Resources.svg';

import DumbLabel from '../assets/NavBarAssets/LabelDumb.svg';
import NutLabel from '../assets/NavBarAssets/LabelNutrition.svg';
import SleepLabel from '../assets/NavBarAssets/LabelSleep.svg';
import ResourcesLabel from '../assets/NavBarAssets/LabelResources.svg';


const { height, width } = Dimensions.get('window');

export default function NavBar() {
    return (
        <SafeAreaView>
            <View style={styles.container}>
                

                <TouchableOpacity style={styles.Buttons} >
                    <Dumbell/>
                    <DumbLabel/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.Buttons}>
                    <Nut/>
                    <NutLabel/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.Buttons}>
                    <Sleep/>
                    <SleepLabel/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.Buttons}>
                    <Resources/>
                    <ResourcesLabel/>
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
        height: height * 0.1151,
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
    Buttons: {
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        padding: 10,
        
    },
    
});

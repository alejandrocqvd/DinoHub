import { View,Text,TouchableOpacity,TextInput,StyleSheet } from "react-native";
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../RootStackParamList';
import {Picker} from '@react-native-picker/picker';

import Back from '../assets/ProfileAssets/arrow_back.svg';
import Avatar from '../assets/ProfileAssets/Generic avatar (1).svg';

import { useState } from "react";

type Props = NativeStackScreenProps<RootStackParamList, 'Profile'>;

export default function Profile(){


    const [drop,setDrop] =useState<string>("BudyBuilding")

    return(
        <View style={styles.container}>
            
            <View style={styles.Header}>

                <TouchableOpacity>
                    <Back/>
                </TouchableOpacity>
                    
                <Text style={styles.HeaderText}>
                    Profile
                </Text>
            </View>

            <View style={styles.AvatarSection}>

                <Avatar style={styles.Avatar}/>
                <Text style={styles.AvatarName}>Yousif Coleman</Text>

            </View>

            <View style={styles.InfoSection}>

                <Text style={styles.InfoHeader}>
                    Name
                </Text>
                <TextInput
                    placeholder="Name"
                />


                <Text style={styles.InfoHeader}>
                    Email
                </Text>
                <TextInput
                    placeholder="Email"
                />


                <Text style={styles.InfoHeader}>
                    Password
                </Text>
                <TextInput
                    placeholder="Password"
                />

                <Text style={styles.InfoHeader}>
                    Goals
                </Text>
                <Picker
                    selectedValue={drop}
                    onValueChange={(item)=>setDrop(item)}
                
                >
                    <Picker.Item label="BodyBuilding" value="BodyBuilding"/>
                    <Picker.Item label="Power Lifting" value="Power Lifting"/>
                    <Picker.Item label="General Health" value="General Health"/>

                </Picker>


                <TouchableOpacity style={styles.SaveProfileBtn}>

                    <Text>
                        Save profile
                    </Text>

                </TouchableOpacity>





            </View>


            <View style={styles.DeleteButtonSection}>

                <TouchableOpacity>
                    <Text>
                        Delete Account
                    </Text>
                </TouchableOpacity>


            </View>











        </View>
    )


}

const styles = StyleSheet.create({



    container:{
        flex:1,
        backgroundColor:'#f8f8f8'
    },

    Header:{
        display:'flex',
        backgroundColor:'#D6001C',
        flexDirection:'row',
        alignItems:'center',
        flex:1
    },

    HeaderText:{
        color:'white',
        fontSize:32,
        marginLeft:100
    },

    AvatarSection:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        marginTop:40,
        flex:1,
        
    },

    Avatar:{
        marginLeft:60,
        marginRight:20
    },

    AvatarName:{
        fontSize:24,
        fontWeight:'bold'
    },



    

    InfoSection:{
        display:'flex',
        justifyContent:'center',
        flex:8,
    },

    InfoHeader:{
        textAlign:'center'
    },


    SaveProfileBtn:{
        backgroundColor:'#D6001C'
    },
   

    DeleteButtonSection:{
        flex:1,
    },















})
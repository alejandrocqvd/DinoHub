import {View, Text,StyleSheet, TouchableOpacity,Dimensions} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../RootStackParamList';
import Header from './Header';
import { SafeAreaView } from 'react-native-safe-area-context';
import NavBar from './NavBar';


import AddButton from '../assets/CurrentWorkOutAssests/AddButton.svg'

type Props = NativeStackScreenProps<RootStackParamList,'Home'>
const { height, width } = Dimensions.get('window');

export default function CurrentWorkOut({navigation}:Props){
    return(

            <View style={styles.container}>


                <Header/>
            
                <SafeAreaView style={styles.InnerNav}>
                    <TouchableOpacity style={styles.InnerNavBtn} >
                        <Text style={styles.InnerNavBtnText}>Templates</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.InnerNavBtn}>
                        <Text style={styles.InnerNavBtnText}>History</Text>
                    </TouchableOpacity>

                </SafeAreaView>

                <TouchableOpacity style={styles.AddBtnBox}>
                    <AddButton/>
                </TouchableOpacity>

                <View>
                    {/* Will need to be a mapping thing */} 
                    
                    <View>
                        <Text>1</Text>
                    </View>


                    <View>
                        <Text>2</Text>
                    </View>

                    <View>
                        <Text>3</Text>
                    </View>


                    <View>
                        <Text>4</Text>
                    </View>


                    <View>
                        <Text>5</Text>
                    </View>


                    <View>
                        <Text>6</Text>
                    </View>

                    <View>
                        <Text>7</Text>
                    </View>

                </View>

                <NavBar/>






            </View>



        
    )
}


const styles = StyleSheet.create({
    container:{
        backgroundColor:'white',
        display:'flex',
        flex:1
    },


    InnerNav:{
        display:'flex',
        flexDirection:'row',
        marginBottom:23,
        justifyContent:'space-evenly'
    },


    InnerNavBtn:{
        width:width/2,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        height:height*0.08695,
        borderRightColor:'black',
        borderRightWidth:1,
        borderBottomColor:'black',
        borderBottomWidth:1,

    },
    InnerNavBtnText:{
        fontSize:25,
        fontWeight:800
    },


    AddBtnBox:{
        display:'flex',
        marginLeft:width*0.8409,
        justifyContent:'flex-end',
    }



})
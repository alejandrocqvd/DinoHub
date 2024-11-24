import {View, Text,StyleSheet, TouchableOpacity,Dimensions} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../RootStackParamList';
import Header from './Header';
import { SafeAreaView } from 'react-native-safe-area-context';
import NavBar from './NavBar';


import AddButton from '../assets/CurrentWorkOutAssests/AddButton.svg';
import Play from '../assets/CurrentWorkOutAssests/Play.svg';
import Edit from '../assets/CurrentWorkOutAssests/Edit.svg';
import Remove from '../assets/CurrentWorkOutAssests/Minus.svg';



type Props = NativeStackScreenProps<RootStackParamList,'Home'>
const { height, width } = Dimensions.get('window');





export default function CurrentWorkOut({navigation}:Props){
    
    const data = [
        {id:1,name:'Temp Template 1'},
        {id:2,name:'Temp Template 2'},
        {id:3,name:'Temp Template 3'},
        {id:4,name:'Temp Template 4'},
        {id:5,name:'Temp Template 5'},
        {id:6,name:'Temp Template 6'},
        {id:7,name:'Temp Template 7'},
        // {id:8,name:'Temp Template 8'},
        // {id:9,name:'Temp Template 9'},

    ];


    return(

            <View style={styles.container}>


                <Header/>
            

                <View style={styles.Main}>


                    <View style={styles.InnerNav}>

                        <TouchableOpacity style={styles.InnerNavBtn} >
                            <Text style={styles.InnerNavBtnText} >Templates</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.InnerNavBtn} >
                            <Text style={styles.InnerNavBtnText} >History</Text>
                        </TouchableOpacity>



                    </View>
                    


                    <View>
                        <TouchableOpacity style={styles.AddBtnBox}>
                            <AddButton/>
                        </TouchableOpacity>
                    </View>



                    


                    <View style={styles.Content}>
                        {
                    
                            data.map((item)=>(
                                <View style={styles.ContentBox} key={item.id}>
                                    <Text>{item.name}</Text>
                                    
                                    
                                    <View style={styles.Buttons}>
                                        <TouchableOpacity style={styles.play}>
                                            <Play />
                                        </TouchableOpacity>
                                        <TouchableOpacity style={styles.edit}>
                                            <Edit/>
                                        </TouchableOpacity>
                                        <TouchableOpacity>
                                            <Remove/>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            ))
                    
                    
                    
                    }
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
        justifyContent:'space-between',
        alignItems:'center',
        flex:1
    },


    Main:{
        display:'flex',
        // flexDirection:'column',
        // marginTop:-116,
        justifyContent:'space-between',
        height:height*(670/851)
    },


    InnerNav:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-evenly',
        height:height*(74/851),
        width:width
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
        // marginBottom:height*(300/851)
    },


    Content:{
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
        marginBottom:height*(60/851),
        height:height*(450/851),
        width:width
    },

    ContentBox:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        backgroundColor:'#F2F4FB',
        width:width*(358/396),
        height:height*(38/851),
        marginBottom:height*(30/851),
        borderColor:'black',
        borderWidth:1
    },

    Buttons:{
        // backgroundColor:'yellow',
        paddingLeft:50,
        paddingRight:80,
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-evenly',
        alignItems:'center',
        // marginRight:100
    },

    play:{
        display:'flex',
        alignItems:'center',
        borderRightColor:'black',
        borderRightWidth:1,
        marginRight:22,
        // height:height*(38/851)

    },


    edit:{
        marginLeft:22,
        marginRight:35
    }



})
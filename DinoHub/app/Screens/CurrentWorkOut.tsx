import { View, Text, StyleSheet, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../RootStackParamList';
import Header from './Header';
import { SafeAreaView } from 'react-native-safe-area-context';
import NavBar from './NavBar';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { getCurrentData, setCurrentId,addTemplate } from './WorkoutSessionData';

import AddButton from '../assets/CurrentWorkOutAssests/AddButton.svg';
import Play from '../assets/CurrentWorkOutAssests/Play.svg';
import Edit from '../assets/CurrentWorkOutAssests/Edit.svg';
import Remove from '../assets/CurrentWorkOutAssests/Minus (1).svg';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;
const { height, width } = Dimensions.get('window');

export default function CurrentWorkOut({ navigation }: Props) {
  const navigationTool = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const data = [
    { id: 1, name: 'Temp Template 1' },
    { id: 2, name: 'Temp Template 2' },
    { id: 3, name: 'Temp Template 3' },
    { id: 4, name: 'Temp Template 4' },
    { id: 5, name: 'Temp Template 5' },
    { id: 6, name: 'Temp Template 6' },
    { id: 7, name: 'Temp Template 7' },
  ];

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.Main}>
        <View style={styles.InnerNav}>
          <TouchableOpacity style={styles.InnerNavBtn}>
            <Text style={styles.InnerNavBtnText}>Templates</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigationTool.navigate('History')} style={styles.InnerNavBtn}>
            <Text style={styles.InnerNavBtnText}>History</Text>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity onPress={() => {
            
            navigationTool.navigate('CurrentWorkoutPageAdd');
            addTemplate();
          
          
          
          }
            
            
            
            
            } style={styles.AddBtnBox}>
            <AddButton />
          </TouchableOpacity>
        </View>

        <View style={styles.Content}>
          <ScrollView contentContainerStyle={styles.scrollViewContent}>
            {getCurrentData().map((item) => (
              <View style={styles.ContentBox} key={item.TemplateID}>
                <Text>{item.NameTemplate}</Text>
                <View style={styles.Buttons}>
                  <TouchableOpacity
                    style={styles.play}
                    onPress={() => {
                      navigationTool.navigate('CurrentWorkoutPage');
                      const value: number = item.TemplateID ?? 0;
                      setCurrentId(value);
                    }}
                  >
                    <Play />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.edit}
                    onPress={() => {
                      navigationTool.navigate('CurrentWorkoutPageEdit');
                      const value: number = item.TemplateID ?? 0;
                      setCurrentId(value);
                    }}
                  >
                    <Edit />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Remove />
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </ScrollView>
        </View>
      </View>
      <NavBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f8f8",
  },

  Main: {
    display: 'flex',
    flex: 1,
    justifyContent: 'space-between',
    alignItems: "center",
    height: height * (670 / 851),
  },

  InnerNav: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    height: height * (74 / 851),
    width: '100%',
    marginBottom: 20,
  },

  InnerNavBtn: {
    width: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: height * 0.08695,
    borderRightColor: 'black',
    borderRightWidth: 1,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },

  InnerNavBtnText: {
    fontSize: 25,
    fontWeight: 800,
  },

  AddBtnBox: {
    display: 'flex',
    marginLeft: '80%',
    justifyContent: 'flex-end',
    marginBottom: 20,
  },

  Content: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: height * (60 / 851),
    height: height * (450 / 851),
    marginHorizontal: "auto"
  },

  scrollViewContent: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  
  ContentBox: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    width: width * 0.9,
    marginRight: 10, 
    height: height * (50 / 851),
    marginHorizontal: 5,
    marginBottom: 15,
    borderRadius: 10,
    paddingHorizontal: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 5,
  },

  Buttons: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },

  play: {
    display: 'flex',
    alignItems: 'center',
    borderRightColor: 'black',
    marginRight: 22,
  },

  edit: {
    marginLeft: 22,
    marginRight: 35,
  },
});

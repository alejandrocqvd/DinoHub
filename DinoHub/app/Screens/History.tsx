import { View, Text, StyleSheet, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../RootStackParamList';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Calendar } from 'react-native-calendars';
import Edit from '../assets/CurrentWorkOutAssests/Edit.svg';
import Header from './Header';
import NavBar from './NavBar';

type Props = NativeStackScreenProps<RootStackParamList, 'History'>;
const { height, width } = Dimensions.get('window');

export default function History({ navigation }: Props) {
  const navigationTool = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.Header}>
        <TouchableOpacity
          style={[styles.InnerNavBtn]}
          onPress={() => navigationTool.navigate('Home')}
        >
          <Text style={[styles.InnerNavBtnText]}>Templates</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.InnerNavBtn, { backgroundColor: '#D6001C' }]}
        >
          <Text style={[styles.InnerNavBtnText, { color: 'white' }]}>History</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.CalendarSection}>
        <Calendar style={styles.CalendarDesign} />
      </View>

      <View style={styles.ContentSection}>
        <View style={styles.ContentHeader}>
          <Text style={styles.ContentHeadersmthn}>Date here</Text>

          <TouchableOpacity
            style={styles.ContentHeadersmthn}
            onPress={() => navigationTool.navigate('EditHistorical')}
          >
            <Edit />
          </TouchableOpacity>
        </View>

        <View style={styles.ContentText}>
          <Text style={styles.TextStlye}>Total sets: 1000</Text>
          <Text style={styles.TextStlye}>Total Reps: 2000000</Text>
          <Text style={styles.TextStlye}>Total Weight: Infinite</Text>
        </View>
      </View>

      <NavBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    justifyContent: 'space-between',
  },

  Header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: width,
    height: height * (74 / 851),
  },

  InnerNavBtn: {
    width: width / 2,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: height * 0.08695,
    borderRightColor: 'black',
    borderRightWidth: 1,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderTopColor: 'black',
  },

  InnerNavBtnText: {
    fontSize: 25,
    fontWeight: 800,
  },

  CalendarSection: {
    flex: 2,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 10,
  },

  CalendarDesign: {
    width: 300,
    height: 310,
    borderRadius: 10,
  },

  ContentSection: {
    flex: 2,
  },

  ContentHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: width,
  },

  ContentHeadersmthn: {
    display: 'flex',
    width: width / 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 20,
    marginTop: 10,
    flex: 1,
    fontSize: 24,
    fontWeight: 700,
  },

  ContentText: {
    display: 'flex',
    justifyContent: 'space-between',
    flex: 0.6,
    marginTop: 20,
    marginLeft: 20,
  },

  TextStlye: {
    fontSize: 18,
    fontWeight: 700,
  },
});

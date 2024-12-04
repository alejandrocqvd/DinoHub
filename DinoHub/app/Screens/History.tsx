import { View, Text, StyleSheet, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../RootStackParamList';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Calendar } from 'react-native-calendars';
import Edit from '../assets/CurrentWorkOutAssests/Edit.svg';
import Header from './Header';
import NavBar from './NavBar';
import { useState } from 'react';

type Props = NativeStackScreenProps<RootStackParamList, 'History'>;
const { height, width } = Dimensions.get('window');

export default function History({ navigation }: Props) {
  const navigationTool = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  // State to manage the selected date and workout data
  const [selectedDate, setSelectedDate] = useState<string>(new Date().toISOString().split('T')[0]);
  const [workoutData, setWorkoutData] = useState({
    sets: 24,
    reps: 192,
    weight: 0,
  });

  const formatDate = (date: string) => {
    const dateObj = new Date(date);
    return `${dateObj.getDate()}/${dateObj.getMonth() + 1}/${dateObj.getFullYear()}`;
  };

  const onDayPress = (day: { dateString: string }) => {
    setSelectedDate(day.dateString);

    // Check if the selected date is today's date
    const today = new Date().toISOString().split('T')[0];
    
    // If it's not today's date, clear the workout data
    if (day.dateString !== today) {
      setWorkoutData({
        sets: 0,
        reps: 0,
        weight: 0,
      });
    } else {
      // Set default workout data for today's date
      setWorkoutData({
        sets: 24,
        reps: 192,
        weight: 7200,
      });
    }
  };

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

      <ScrollView contentContainerStyle={styles.ContentSection}>
        <View style={styles.CalendarSection}>
          <Calendar
            style={styles.CalendarDesign}
            current={selectedDate}
            onDayPress={onDayPress}
            markedDates={{
              [selectedDate]: { selected: true, selectedColor: '#D6001C' },
            }}
          />
        </View>

        <View style={styles.ContentHeader}>
          <Text style={styles.ContentHeadersmthn}>{formatDate(selectedDate)}</Text>

          <TouchableOpacity
            style={styles.ContentHeadersmthn}
            onPress={() => navigationTool.navigate('EditHistorical')}
          >
            <View style={styles.editDiv}>
              <Text style={styles.editText}>Edit Workout</Text>
              <Edit />
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.ContentText}>
          <View style={styles.ContentCard}>
            <Text style={styles.TextLabel}>Total sets:</Text>
            <Text style={styles.TextValue}>{workoutData.sets}</Text>
          </View>

          <View style={styles.ContentCard}>
            <Text style={styles.TextLabel}>Total Reps:</Text>
            <Text style={styles.TextValue}>{workoutData.reps}</Text>
          </View>

          <View style={styles.ContentCard}>
            <Text style={styles.TextLabel}>Total Weight:</Text>
            <Text style={styles.TextValue}>{workoutData.weight} lbs</Text>
          </View>
        </View>
      </ScrollView>

      <NavBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#f8f8f8',
  },

  Header: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: width,
    height: height * (74 / 851),
  },

  InnerNavBtn: {
    width: width / 2,
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
    fontWeight: '800',
  },

  CalendarSection: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
  },

  CalendarDesign: {
    width: 300,
    height: 310,
    borderRadius: 10,
  },

  // Content Section
  ContentSection: {
    flexGrow: 1,
    marginHorizontal: 20,
    marginBottom: 50,
    paddingBottom: 125,
  },

  ContentHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 20,
    marginBottom: 10,
  },

  ContentHeadersmthn: {
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 24,
    fontWeight: '700',
  },

  ContentText: {
    marginTop: 20,
  },

  editDiv: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: "#fff",
    paddingVertical: 5,
    paddingHorizontal: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 6,
  },

  editText: {
    fontWeight: "bold",
    marginRight: 10,
  },

  ContentCard: {
    backgroundColor: '#fff',
    padding: 15,
    marginVertical: 8,
    borderRadius: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 5,
  },

  TextLabel: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },

  TextValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#D6001C',
  },
});

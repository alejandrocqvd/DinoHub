import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  TextInput,
} from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../RootStackParamList";
import Header from "./Header";
import NavBar from "./NavBar";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { useState } from "react";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import Icon from "react-native-vector-icons/FontAwesome";
import DatePicker from "react-native-date-picker";
import { BarChart, LineChart } from "react-native-gifted-charts";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import Svg, { Line } from "react-native-svg";

// Register the required chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

type Props = NativeStackScreenProps<RootStackParamList, "SleepTrends">;
const { height, width } = Dimensions.get("window");
export default function SleepTrends({ navigation }: Props) {
  const navigationTool =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [isStartPickerOpen, setStartPickerOpen] = useState(false);
  const [isEndPickerOpen, setEndPickerOpen] = useState(false);

  const [currentDate, setCurrentDate] = useState(new Date());
  const [isStartDatePickerVisible, setStartDatePickerVisibility] =
    useState(false);
  const [isEndDatePickerVisible, setEndDatePickerVisibility] = useState(false);
  // Handlers for date navigation
  const handlePreviousDate = () => {
    const previousDate = new Date(currentDate);
    previousDate.setDate(previousDate.getDate() - 1);
    setCurrentDate(previousDate);
  };

  const handleNextDate = () => {
    const nextDate = new Date(currentDate);
    nextDate.setDate(nextDate.getDate() + 1);
    setCurrentDate(nextDate);
  };

  const showStartDatePicker = () => {
    setStartDatePickerVisibility(true);
  };
  const showEndDatePicker = () => {
    setEndDatePickerVisibility(true);
  };

  const hideStartDatePicker = () => {
    setStartDatePickerVisibility(false);
  };
  const hideEndDatePicker = () => {
    setEndDatePickerVisibility(false);
  };

  const dateComparer = (start: Date, end: Date) => {
    if (start.getFullYear() === end.getFullYear()) {
      if (start.getMonth() === end.getMonth()) {
        if (start.getDate() <= end.getDate()) {
          return true;
        } else {
          return true;
        }
      } else if (start.getMonth() < end.getMonth()) {
        return true;
      } else {
        return false;
      }
    } else if (start.getFullYear() < end.getFullYear()) {
      return true;
    } else {
      return false;
    }
  };

  const checkDate = (checkStartDate: Date, checkEndDate: Date) => {
    if (!dateComparer(checkStartDate, checkEndDate)) {
      return false;
    } else if (!dateComparer(checkStartDate, new Date())) {
      return false;
    } else if (!dateComparer(checkEndDate, new Date())) {
      return false;
    }
    return true;
  };
  const handleEndConfirm = (date: Date) => {
    if (checkDate(startDate, date)) {
      setEndDate(date);
    }
    hideEndDatePicker();
  };
  const handleStartConfirm = (date: Date) => {
    if (checkDate(date, endDate)) {
      setStartDate(date);
    }
    hideStartDatePicker();
  };

  const dailySleepData = [
    { value: 8, label: "Mon" },
    { value: 7.5, label: "Tue" },
    { value: 7.75, label: "Wed" },
    { value: 8, label: "Thu" },
    { value: 10, label: "Fri" },
    { value: 9, label: "Sat" },
    { value: 6, label: "Sun" },
  ];

  const dailySleepScoreData = [
    { value: 92, label: "Mon" },
    { value: 85, label: "Tue" },
    { value: 87, label: "Wed" },
    { value: 75, label: "Thu" },
    { value: 80, label: "Fri" },
    { value: 79, label: "Sat" },
    { value: 60, label: "Sun" },
  ];

  const dailyHeartRateData = [
    { value: 57, label: "Mon" },
    { value: 50, label: "Tue" },
    { value: 53, label: "Wed" },
    { value: 60, label: "Thu" },
    { value: 54, label: "Fri" },
    { value: 48, label: "Sat" },
    { value: 55, label: "Sun" },
  ];
  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.InnerNav}>
        <TouchableOpacity
          style={styles.InnerNavBtn}
          onPress={() => navigationTool.navigate("Sleep")}
        >
          <Text style={styles.InnerNavBtnText}>Data Tracker</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.SelectedInnerNavBtn}>
          <Text style={[styles.InnerNavBtnText, { color: "white" }]}>
            Sleep Trends
          </Text>
        </TouchableOpacity>
      </View>
      {/* BELOW IS FOR GRAPH SELECTION PAGE IF TIME PERMITS */}
      {/* <View style={styles.graphButton}>
        <TouchableOpacity
          style={styles.AddBtnBox}
          onPress={() => navigationTool.navigate("CurrentWorkoutPageAdd")}
        >
          <Icon name="clock-o" size={36} color="#333" />
        </TouchableOpacity>
      </View> */}
      <View style={styles.secondContainer}>
        <View style={styles.resultsContainer}>
          <Text style={styles.header}>Date Range Filter</Text>
          <View style={styles.dateRow}>
            {/* Start Date */}
            <View style={styles.dateColumn}>
              <TouchableOpacity onPress={showStartDatePicker}>
                <Text style={styles.dateLabel}>Start Date</Text>
                <Text style={styles.dateNavTitle}>
                  {startDate.toDateString()}
                </Text>
              </TouchableOpacity>
              <DateTimePickerModal
                isVisible={isStartDatePickerVisible}
                mode="date"
                onConfirm={handleStartConfirm}
                onCancel={hideStartDatePicker}
                date={startDate}
              />
            </View>
            {/* End Date */}
            <View style={styles.dateColumn}>
              <TouchableOpacity onPress={showEndDatePicker}>
                <Text style={styles.dateLabel}>End Date</Text>
                <Text style={styles.dateNavTitle}>
                  {endDate.toDateString()}
                </Text>
              </TouchableOpacity>
              <DateTimePickerModal
                isVisible={isEndDatePickerVisible}
                mode="date"
                onConfirm={handleEndConfirm}
                onCancel={hideEndDatePicker}
                date={endDate}
              />
            </View>
          </View>
        </View>
      </View>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.scrollableField}>
          <View style={styles.singleGraph}>
            <View style={styles.graph}>
              <BarChart
                data={dailySleepData}
                maxValue={12}
                frontColor={"#D6001C"}
              />
              <Text style={styles.graphTitle}>
                {"Average Sleep Duration Per Day"}
              </Text>
            </View>
          </View>
          <View style={styles.singleGraph}>
            <View style={styles.graph}>
              <BarChart data={dailySleepScoreData} frontColor={"#D6001C"} />
              <Text style={styles.graphTitle}>
                {"Average Sleep Score Per Day"}
              </Text>
            </View>
          </View>
          <View style={styles.singleGraph}>
            <View style={styles.graph}>
              <BarChart data={dailyHeartRateData} frontColor={"#D6001C"} />
              <Text style={styles.graphTitle}>
                {"Average Heart Rate Per Day"}
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <NavBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f8f8f8",
    display: "flex",
    //justifyContent: "space-between",
    alignItems: "center",
    flex: 1,
    width: "100%",
  },

  Main: {
    display: "flex",
    // flexDirection:'column',
    // marginTop:-116,
    flex: 1,
    //justifyContent: "space-between",
    //height: height * (670 / 851),
    width: "100%",
  },

  InnerNav: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    height: height * (74 / 851),
    width: "100%",
    marginBottom: 20,
    // flex:2
    // paddingBottom:height*(595/851)
  },
  SelectedInnerNavBtn: {
    width: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: height * 0.08695,
    borderRightColor: "black",
    borderRightWidth: 1,
    borderBottomColor: "black",
    borderColor: "black",
    borderBottomWidth: 1,
    borderTopWidth: 1,
    color: "white",
    backgroundColor: "#D6001C",
  },
  InnerNavBtn: {
    width: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: height * 0.08695,
    borderRightColor: "black",
    borderRightWidth: 1,
    borderBottomColor: "black",
    borderBottomWidth: 1,
  },
  InnerNavBtnText: {
    fontSize: 25,
    fontWeight: 800,
  },

  AddBtnBox: {
    backgroundColor: "#D6001C",
    borderRadius: 25,
    padding: 10,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  dateNav: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    marginTop: 30,
  },
  dateNavText: {
    fontSize: 24,
    fontWeight: "bold",
    marginHorizontal: 20,
  },
  dateNavTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#D6001C",
    backgroundColor: "#fff",
  },
  scrollViewContent: {
    paddingBottom: 150,
    width: "100%",
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "left",
    marginBottom: 5,
  },
  resultsContainer: {
    padding: 10,
    backgroundColor: "white",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    width: "100%",
  },
  resultRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    flex: 1,
    padding: 0,
    minWidth: "100%",
  },
  resultColumn: {
    flexDirection: "column",
    justifyContent: "space-between",
    flex: 1,
    padding: 10,
    width: "50%",
  },
  label: {
    fontSize: 16,
    fontWeight: "500",
    color: "#D6001C",
    paddingRight: 20,
    textAlign: "center",
    padding: 20,
  },
  input: {
    backgroundColor: "#fff",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#ddd",
    minWidth: 80,
    textAlign: "center",
    fontSize: 14,
    color: "#333",
  },
  secondContainer: {
    padding: 20,
    paddingTop: 70,
    alignItems: "center",
    width: "100%",
  },
  dateRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  dateContainer: {
    flex: 1,
    alignItems: "center",
    marginHorizontal: 8,
    padding: 12,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    backgroundColor: "#f9f9f9",
  },
  dateLabel: {
    fontSize: 16,
    color: "#555",
    marginBottom: 4,
  },
  dateText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#000",
  },
  dateColumn: {
    paddingLeft: 40,
    paddingRight: 40,
    paddingTop: 20,
    paddingBottom: 20,
  },
  graph: {
    alignItems: "center",
    backgroundColor: "white",
    padding: 40,
  },
  graphTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#D6001C",
    padding: 20,
  },
  scrollableField: {
    minWidth: "100%",
  },
  singleGraph: {
    paddingBottom: 20,
  },
  graphButton: {
    position: "absolute",
    right: "5%",
  },
});

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../RootStackParamList";
import Header from "./Header";
import NavBar from "./NavBar";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { useState } from "react";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { BarChart } from "react-native-gifted-charts";
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
                width={width - 40}
                height={200}
                showText
                textSize={14}
              />
              <Text style={styles.graphTitle}>
                {"Average Sleep Duration Per Day"}
              </Text>
            </View>
          </View>
          <View style={styles.singleGraph}>
            <View style={styles.graph}>
              <BarChart
                data={dailySleepScoreData}
                frontColor={"#D6001C"}
                width={width - 40}
                height={200}
                showText
                textSize={14}
              />
              <Text style={styles.graphTitle}>
                {"Average Sleep Score Per Day"}
              </Text>
            </View>
          </View>
          <View style={styles.singleGraph}>
            <View style={styles.graph}>
              <BarChart
                data={dailyHeartRateData}
                frontColor={"#D6001C"}
                width={width - 40}
                height={200}
                showText
                textSize={14}
              />
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
    flex: 1,
    backgroundColor: "#f8f8f8",
    alignItems: "center",
    width: "100%",
  },
  InnerNav: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "100%",
    marginBottom: 20,
  },
  SelectedInnerNavBtn: {
    width: "50%",
    justifyContent: "center",
    alignItems: "center",
    height: height * 0.08695,
    borderRightColor: "black",
    borderRightWidth: 1,
    borderBottomColor: "black",
    borderBottomWidth: 1,
    borderTopWidth: 1,
    backgroundColor: "#D6001C",
  },
  InnerNavBtn: {
    width: "50%",
    justifyContent: "center",
    alignItems: "center",
    height: height * 0.08695,
    borderRightColor: "black",
    borderRightWidth: 1,
    borderBottomColor: "black",
    borderBottomWidth: 1,
    backgroundColor: "#FFFFFF",
  },
  InnerNavBtnText: {
    fontSize: 25,
    fontWeight: 800,
  },
  secondContainer: {
    width: "100%",
    paddingHorizontal: 20,
  },
  resultsContainer: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    marginBottom: 20,
    width: "100%",
    maxWidth: 500,
  },
  header: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#D6001C",
    marginBottom: 10,
  },
  dateRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  dateColumn: {
    width: "48%",
    paddingHorizontal: 10,
  },
  dateLabel: {
    fontSize: 14,
    color: "#444",
  },
  dateNavTitle: {
    fontSize: 16,
    color: "#888",
    marginTop: 5,
  },
  scrollViewContent: {
    paddingBottom: 30,
    width: "100%",
    paddingHorizontal: 20,
  },
  scrollableField: {
    width: "100%",
    marginBottom: 90,
  },
  singleGraph: {
    paddingBottom: 20,
    width: "100%",
  },
  graph: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
    width: "100%",
    alignItems: "center",
  },
  graphTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#D6001C",
    paddingTop: 10,
    textAlign: "center",
  },
});

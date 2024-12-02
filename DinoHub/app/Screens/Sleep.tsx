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

type Props = NativeStackScreenProps<RootStackParamList, "Sleep">;
const { height, width } = Dimensions.get("window");
export default function Sleep({ navigation }: Props) {
  const navigationTool =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [currentDate, setCurrentDate] = useState(new Date());
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

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

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date: Date) => {
    setCurrentDate(date);
    hideDatePicker();
  };
  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.Main}>
        <View style={styles.InnerNav}>
          <TouchableOpacity style={styles.SelectedInnerNavBtn}>
            <Text style={styles.InnerNavBtnText}>Data Tracker</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.InnerNavBtn}>
            <Text style={styles.InnerNavBtnText}>Sleep Trends</Text>
          </TouchableOpacity>
        </View>

        {/* <View>
          <TouchableOpacity
            onPress={() => navigationTool.navigate("CurrentWorkoutPageAdd")}
            style={styles.AddBtnBox}
          >
            <AddButton />
          </TouchableOpacity>
        </View> */}

        <View style={styles.secondContainer}>
          <View style={styles.watchButton}>
            <TouchableOpacity
              style={styles.AddBtnBox}
              onPress={() => navigationTool.navigate("CurrentWorkoutPageAdd")}
            >
              <Icon name="clock-o" size={36} color="#333" />
            </TouchableOpacity>
          </View>

          <ScrollView contentContainerStyle={styles.scrollViewContent}>
            <View style={styles.dateNav}>
              <TouchableOpacity onPress={handlePreviousDate}>
                <Text style={styles.dateNavText}>{"<"}</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={showDatePicker}>
                <Text style={styles.dateNavTitle}>
                  {currentDate.toDateString() === new Date().toDateString()
                    ? "Today"
                    : currentDate.toDateString()}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={handleNextDate}>
                <Text style={styles.dateNavText}>{">"}</Text>
              </TouchableOpacity>
            </View>
            <DateTimePickerModal
              isVisible={isDatePickerVisible}
              mode="date"
              onConfirm={handleConfirm}
              onCancel={hideDatePicker}
              date={currentDate}
            />
          </ScrollView>

          <ScrollView contentContainerStyle={styles.resultsContainer}>
            <Text style={styles.header}>Results</Text>
            <View style={styles.resultRow}>
              <Text style={styles.label}>Sleep Duration</Text>
              <TextInput style={styles.input} editable={false} value="7h 38m" />
            </View>
            <View style={styles.resultRow}>
              <Text style={styles.label}>Sleep Score</Text>
              <TextInput style={styles.input} editable={false} value="93/100" />
            </View>
            <View style={styles.resultRow}>
              <Text style={styles.label}>Avg. Heart Rate</Text>
              <TextInput style={styles.input} editable={false} value="57 bpm" />
            </View>
            {/* <View style={styles.resultRow}>
              <Text style={styles.label}>Breathing Rate</Text>
              <TextInput
                style={styles.input}
                editable={false}
                value="14 breaths per minute"
              />
            </View> */}
            <View style={styles.resultRow}>
              <Text style={styles.label}>Awakenings</Text>
              <TextInput style={styles.input} editable={false} value="2" />
            </View>
          </ScrollView>
        </View>
      </View>

      <NavBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    display: "flex",
    //justifyContent: "space-between",
    alignItems: "center",
    flex: 1,
  },

  Main: {
    display: "flex",
    // flexDirection:'column',
    // marginTop:-116,
    flex: 1,
    //justifyContent: "space-between",
    height: height * (670 / 851),
  },

  InnerNav: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    height: height * (74 / 851),
    width: width,
    marginBottom: 20,
    // flex:2
    // paddingBottom:height*(595/851)
  },
  SelectedInnerNavBtn: {
    width: width / 2,
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
    width: width / 2,
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

  Content: {
    display: "flex",
    //justifyContent: "space-between",
    alignItems: "center",
    marginBottom: height * (60 / 851),
    height: height * (450 / 851),
    width: width,
    flex: 3,
  },

  ContentBox: {
    display: "flex",
    flexDirection: "row",
    //justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#F2F4FB",
    width: width * (358 / 396),
    height: height * (38 / 851),
    marginBottom: height * (30 / 851),
    borderColor: "black",
    borderWidth: 1,
  },

  Buttons: {
    // backgroundColor:'yellow',
    paddingLeft: 50,
    paddingRight: 80,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    // marginRight:100
  },

  play: {
    display: "flex",
    alignItems: "center",
    borderRightColor: "black",
    borderRightWidth: 1,
    marginRight: 22,
    // height:height*(38/851)
  },

  edit: {
    marginLeft: 22,
    marginRight: 35,
  },
  dateHeader: {
    fontSize: 24,
    textAlign: "center",
    marginBottom: 20,
    fontWeight: "bold",
    color: "#6200ea",
  },
  selectedDateText: {
    fontSize: 18,
    textAlign: "center",
    marginTop: 20,
    color: "#333",
  },
  dateSection: {
    backgroundColor: "white",
    display: "flex",
    alignItems: "center",
    flex: 1,
    height: "20%",
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
    fontSize: 32,
    fontWeight: "bold",
    color: "#D6001C",
  },
  scrollViewContent: {
    paddingBottom: 10,
  },
  header: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  resultsContainer: {
    padding: 10,
    backgroundColor: "#F2F4FB",
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
    padding: 20,
    minWidth: "100%",
  },
  label: {
    fontSize: 22,
    fontWeight: "500",
    color: "#D6001C",
    paddingRight: 20,
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
    fontSize: 18,
    color: "#333",
  },
  secondContainer: {
    padding: 20,
    backgroundColor: "#fff",
    alignItems: "center",
    width: "100%",
  },
  watchButton: {
    position: "absolute",
    left: 350,
  },
});

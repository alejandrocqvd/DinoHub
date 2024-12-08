import { View, Text, StyleSheet, TouchableOpacity, Dimensions, ScrollView, TextInput } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../RootStackParamList';

import Header from './Header';
import NavBar from './NavBar';
import Back from '../assets/CurrentWorkOutAssests/BackButton.svg';
import Save from '../assets/CurrentWorkOutAssests/Save.svg';

type Props = NativeStackScreenProps<RootStackParamList, 'EditHistorical'>;

const { height, width } = Dimensions.get('window');

// Dummy data with set, rep, and weight values
const data = [
  { id: 1, name: 'Tricep pushdowns', set: 3, rep: 12, weight: 50 },
  { id: 2, name: 'Skull crushers', set: 4, rep: 10, weight: 40 },
  { id: 3, name: 'Major Bruh Alert', set: 5, rep: 8, weight: 60 },
];

export default function EditHistorical({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.Header}>
        <TouchableOpacity onPress={() => navigation.navigate("History")}>
          <Back />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("History")}>
          <Save />
        </TouchableOpacity>
      </View>

      <View style={styles.Content}>
        <ScrollView contentContainerStyle={styles.scrollContent}>
          {data.map((item) => (
            <View key={item.id} style={styles.Boxes}>
              <TextInput
                style={styles.input}
                value={item.name}
                editable={true}
              />

              <View style={styles.Info}>
                <Text>Set</Text>
                <TextInput
                  style={styles.input}
                  value={String(item.set)}
                  editable={true}
                />
              </View>

              <View style={styles.Info}>
                <Text>Rep</Text>
                <TextInput
                  style={styles.input}
                  value={String(item.rep)}
                  editable={true}
                />
              </View>

              <View style={styles.Info}>
                <Text>Weight</Text>
                <TextInput
                  style={styles.input}
                  value={String(item.weight)} 
                  editable={true}
                />
              </View>
            </View>
          ))}
        </ScrollView>
      </View>

      <NavBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },

  Header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: width * 0.06,
    marginTop: 20,
  },

  Content: {
    flex: 1,
    marginBottom: 95,
    marginTop: 20,
    paddingHorizontal: width * 0.06,
  },

  scrollContent: {
    flexGrow: 1,
    paddingBottom: 10,
  },

  Boxes: {
    backgroundColor: '#fff',
    marginBottom: 20,
    borderRadius: 15,
    paddingVertical: 15,
    paddingHorizontal: 10,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },

  Info: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    width: '100%',
    marginVertical: 10,
  },

  input: {
    height: 40,
    width: '100%',
    marginVertical: 8,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#ccc',
    fontSize: 16,
  },
});

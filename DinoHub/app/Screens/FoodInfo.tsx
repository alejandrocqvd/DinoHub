import React from 'react';
import { View, Text, Image, StyleSheet, Button, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function FoodInfo() {
  return (
    <View style={styles.container}>
      {/* Header */}
      <Text style={styles.header}>Image Grid Example</Text>

      {/* Image Grid */}
      <ScrollView contentContainerStyle={styles.grid}>
        <View style={styles.row}>
          <Image source={{ uri: 'https://via.placeholder.com/150' }} style={styles.image} />
          <Image source={{ uri: 'https://via.placeholder.com/150' }} style={styles.image} />
        </View>
        <View style={styles.row}>
          <Image source={{ uri: 'https://via.placeholder.com/150' }} style={styles.image} />
          <Image source={{ uri: 'https://via.placeholder.com/150' }} style={styles.image} />
        </View>
        <View style={styles.row}>
          <Image source={{ uri: 'https://via.placeholder.com/150' }} style={styles.image} />
          <Image source={{ uri: 'https://via.placeholder.com/150' }} style={styles.image} />
        </View>
      </ScrollView>

      {/* Button */}
      <Button title="Click Me" onPress={() => alert('Button clicked!')} />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 20,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  grid: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  image: {
    width: 150,
    height: 150,
    margin: 5,
    borderRadius: 10,
    backgroundColor: '#ccc',
  },
});

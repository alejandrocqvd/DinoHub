import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, Image } from 'react-native';
import Header from './Header';
import NavBar from './NavBar';

const { height, width } = Dimensions.get('window');

export default function MyComponent() {
  return (
    <View style={styles.container}>
      {/* Header Section */}
      <Header />

      {/* Main Content */}
      <View style={styles.content}>
        {/* Title or Description */}
        <Text style={styles.title}>Welcome to Your App!</Text>
        <Text style={styles.subtitle}>Your daily activities and tasks</Text>

        {/* Image or Illustration */}
        <Image source={{uri: 'https://placekitten.com/800/800'}} style={styles.image} />

        {/* Action Button */}
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.buttonText}>Start Now</Text>
        </TouchableOpacity>
      </View>

      {/* Bottom Navigation Bar */}
      <NavBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5', // Background color for the whole screen
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: width * 0.1,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: '#777',
    marginBottom: 20,
  },
  image: {
    width: width * 0.8,
    height: height * 0.3,
    marginBottom: 30,
    borderRadius: 10,
    backgroundColor: '#f0f0f0',
  },
  actionButton: {
    backgroundColor: '#6200ea',
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 30,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

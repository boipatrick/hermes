import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require('../assets/image-1.png')}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('AboutScreen')}
      >
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF', 
  },
  logoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 200,
    height: 200,
  },
  button: {
    backgroundColor: '#FFD54F', 
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 12,
    marginHorizontal: 20,
    marginBottom: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3, 
  },
  buttonText: {
    color: '#121212',
    fontSize: 18,
    textAlign: 'center',
    fontWeight: '600',
  },
});

export default HomeScreen;

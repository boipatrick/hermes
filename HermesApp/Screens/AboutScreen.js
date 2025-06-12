import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const slides = [
  {
    title: 'Find Helpers Fast',
    description: 'Quickly connect with reliable errand runners nearby.',
    image: require('../assets/onboarding1.png'),
  },
  {
    title: 'Track Your Task',
    description: 'Stay updated as errands get done in real-time.',
    image: require('../assets/onboarding2.png'),
  },
  {
    title: 'Pay Seamlessly',
    description: 'Use secure in-app payments with no hassle.',
    image: require('../assets/onboarding3.png'),
  },
];

const AboutScreen = ({ navigation }) => {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    if (index < slides.length - 1) {
      setIndex(index + 1);
    } else {
      navigation.replace('SignUpScreen'); // or 'LoginScreen'
    }
  };

  const handleSkip = () => {
    navigation.replace('SignUpScreen'); // or 'LoginScreen'
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={handleSkip} style={styles.skipBtn}>
        <Text style={styles.skipText}>Skip</Text>
      </TouchableOpacity>

      <Image source={slides[index].image} style={styles.image} />
      <Text style={styles.title}>{slides[index].title}</Text>
      <Text style={styles.description}>{slides[index].description}</Text>

      <TouchableOpacity style={styles.nextBtn} onPress={handleNext}>
        <Text style={styles.nextText}>{index === slides.length - 1 ? 'Get Started' : 'Next'}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  skipBtn: {
    position: 'absolute',
    top: 50,
    right: 20,
  },
  skipText: {
    color: '#FFD54F',
    fontWeight: '600',
  },
  image: {
    width: width * 0.7,
    height: width * 0.7,
    resizeMode: 'contain',
    marginBottom: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#121212',
    textAlign: 'center',
    marginBottom: 12,
  },
  description: {
    fontSize: 16,
    color: '#444',
    textAlign: 'center',
    marginBottom: 40,
  },
  nextBtn: {
    backgroundColor: '#FFD54F',
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 12,
  },
  nextText: {
    fontWeight: 'bold',
    color: '#121212',
    fontSize: 16,
  },
});

export default AboutScreen;

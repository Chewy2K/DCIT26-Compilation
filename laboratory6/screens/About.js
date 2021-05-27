import React from 'react';
import {
  View,
  Button,
  StyleSheet,
  Image,
  Text,
  
} from 'react-native';

const About = ({navigation}) => {
  return (

        <Button title = "Go Back" onPress = {() => navigation.goBack()}/>
  );
}

export default About;
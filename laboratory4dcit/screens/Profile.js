import React from 'react';
import {
  View,
  Button,
  StyleSheet,
  Image,
  Text,
} from 'react-native';

const Profile = ({navigation}) => {
  return (
    <View style= {styles.container}>
        <Image style={styles.image} source={require('../Photos/123.png')} />
        <Text style= {styles.text}> From Korea comes Jett, an agile fighter who prioritizes movement over everything. Her abilities include a teleportation-based dash and an updraft that lets her reach higher ledges. She also has a smokebomb ability to hinder sightlines and a powerful Bladestorm ultimate that deals moderate-to-heavy damage and remains accurate even while she's moving. </Text>
        <Button title = "About" onPress = {() => navigation.navigate('About')}/>
    </View>
  );
}

export default Profile;

const styles = StyleSheet.create(
  {
    container:{
      flex:1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#C5A3FF'
    },
    image: {
    width: 250,
    height: 250,
    }, 
    text: {
      color: '#3f2949',
      marginTop: 10,
      textAlign: 'justify',
      fontSize: 15,
      fontWeight:'bold'
  }
  }
);
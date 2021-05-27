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
    <View style= {styles.container}>
        <Image style={styles.image} source={require('../Photos/tenor.gif')} />
        <Text style= {styles.text}> Jett is an aggressive agent who has a distinctive, sarcastic personality. Jett also has a cheeky, childish "in-your-face" attitude, seen commonly giving insults for feats she makes on the team and is always spouting her sheer amount arrogance. She does show a much more friendly personality towards teammates. </Text>
        <Button title = "Go Back" onPress = {() => navigation.goBack()}/>
    </View>
  );
}

export default About;

const styles = StyleSheet.create(
  {
    container:{
      flex:1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#FFC0CB'
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
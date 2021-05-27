import React from 'react';
import {
  View,
  Button,
  StyleSheet,
  Image,
} from 'react-native';


const Home = ({navigation}) => {
  return (
    <View style= {styles.container}>
     
    <Image style = {styles.image} source = {{uri: 'https://media.giphy.com/media/S3UynwS1mNGenbbjtD/giphy.gif'}} /> 
        <Button title = "Profile" onPress = {() => navigation.navigate('Profile')}/>
    </View>
  );
}

export default Home;

const styles = StyleSheet.create(
  {
    container:{
      flex:1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#A79AFF'
    },
    image: {
    width: 100,
    height: 100,
    backgroundColor: '',
    alignItems: 'center'
    }
  }
);
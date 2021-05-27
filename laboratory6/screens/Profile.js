import React from 'react';
import {
  View,
  Button,
  StyleSheet,
  ScrollView,
  Image,
  Text,  
} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 

import { globalStyles} from '../font/global';

const Profile = ({ route }) => {
  const data = route.params;
  return (  
    <ScrollView style= {globalStyles.profileContainer}>
    <Image style={globalStyles.profileImage} source={{ uri: data.picture.large }} 
    />
    <Text style={globalStyles.headerFont}>{data.name.title} {data.name.first} {data.name.last}
    </Text>
      <Text style={globalStyles.headerFont}><FontAwesome5 name="user-circle" size={24} color="black" />
       ABOUT {data.name.first}</Text>
      <Text style={globalStyles.profileTextDes}>
      <Text style={globalStyles.profileText}>Age: {data.dob.age}</Text>
      <Text>{'\n'}</Text>
      <Text style={globalStyles.profileText}>Birthday: {data.dob.date}</Text>
      <Text>{'\n'}</Text>
      <Text style={globalStyles.profileText}> Gender: {data.gender}</Text>
      </Text>
      <Text style={globalStyles.headerFont}><MaterialCommunityIcons name="contacts" size={24} color="black" />
      CONTACT </Text>
      <Text style={globalStyles.profileTextDes}>
      Address: {data.location.street.number}{data.location.street.name}{' '}
        {data.location.city} {data.location.state} {data.location.country}
      <Text>{'\n'}</Text>
      <Text style={globalStyles.profileText}>Email: {data.email}</Text>
      <Text>{'\n'}</Text>
      <Text style={globalStyles.profileText}>Phone: {data.phone}</Text>
      <Text>{'\n'}</Text>
      </Text>
      <Text style={globalStyles.headerFont}><AntDesign name="infocirlce" size={24} color="black" /> MORE </Text>
      <Text style={globalStyles.profileTextDes}>
      <Text style={globalStyles.profileText}>Date Registed: {data.registered.date}</Text>
      </Text>
    </ScrollView>
  );
}

export default Profile;

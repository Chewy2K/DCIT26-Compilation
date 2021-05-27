import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { AntDesign } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons'; 

import HomeStack from './HomeStack';
import AboutStack from './AboutStack';

const Drawer = createDrawerNavigator();


const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component = { HomeStack } options={{
            drawerIcon: config => <AntDesign
                name="home"
                color="black"
                size={23}>
                </AntDesign> }} />
        <Drawer.Screen name="About" component = { AboutStack } options={{
            drawerIcon: config => <Foundation
                name="indent-more"
                color="black"
                size={24}>
                </Foundation> }} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
// BSCS 3 - 3
// Elivera Bobby Joshua A.
// Quiboloy Almerson D.
// Terrible JC M.

import React, {useState} from 'react';
import { View, 
        StyleSheet,
        Button,
        Text,
        Image,
        Modal
       } from 'react-native';
import SampleModal from './components/SampleModal';

export default function App() {
  const [isModalOpen,setModalOpen] = useState (false);
  return (
    
    
    <View style = {styles.background} >
      <Button title ="Click me" onPress={ () => setModalOpen(true)} />
     <SampleModal visible = {isModalOpen} onClose={() => setModalOpen(false)}/> 
    </View>
    
    

  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent:'center',
    backgroundColor: '#FFC0CB',
  },
 
  
 
});
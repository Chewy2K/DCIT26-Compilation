import React, {useState} from 'react';
import { 
  Text, 
  View, 
  StyleSheet,
  Button,
  TextInput } from 'react-native';
import Constants from 'expo-constants';

export default function App() {
  const [enteredItem, setEnteredItem] = useState('');
  const [outputItem, settingItem] = useState([]);

  const itemInput = (enteredText) => {
    setEnteredItem(enteredText);
  };
  const addingItems = () =>{
    settingItem( currentItem => [...outputItem, enteredItem]);
  };
  return(
    <View style = {styles.viewstyle}>
      <View style = {styles.inputItem}>
        <TextInput placeholder= "Add Item" 
          style = {styles.inputText} 
          onChangeText={itemInput}
          value={enteredItem}
          />
        <Button title = "Add" onPress={addingItems} />
      </View>

      <View>
        {outputItem.map((item) => <View key={item} style = {styles.styleList}> <Text>{item}</Text> </View>)}
      </View>
    </View>

  );
}
const styles = StyleSheet.create({
  viewstyle: {
    padding: 30,

  },
  inputItem: {
    flexDirection: "row", 
    justifyContent:'space-between', 
    alignItems:'Center'
  },
  inputText:
    {borderColor: 'black',
     borderWidth:1, 
     padding:10, 
     width: '80%' 
  },
  styleList:
  { padding: 10,
    margin: 5,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth:1,

  }
});

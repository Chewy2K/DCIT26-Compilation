import {StyleSheet} from 'react-native';

export const globalStyles = StyleSheet.create({
      container:{
      flex:1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'transparent'
    },
homeImage : {
    width: 200,
    height: 200,
    margin: 5
    },
homeText : {
  padding: 15,
  textAlign: 'center',
  fontSize: 20,
  fontWeight:'bold'
},
profileContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent',

},
profileText : {
  padding: 10,
  textAlign: 'center',
  fontSize: 12,
  backgroundColor: 'Transparent',
},
profileTextDes : {
  textAlign: 'center',
  fontSize: 12,
  backgroundColor: '#E1AD01',

},
profileImage : {
    width: 115,
    marginLeft: 120,
    height: 115,
    margin: 5
},
headerFont : {
  fontSize: 20,
  textAlign: 'center',
  backgroundColor: '#89ABE3FF',
  fontWeight:'bold',
  borderBottomWidth: 1,
  borderTopWidth: 1

}
})
import React from 'react'
import {View, Modal, Button, StyleSheet, Text, ScrollView,Image} from 'react-native'

const SampleModal = props => {
  return (
    <View style = {styles.background}>
    <Modal style = {styles.modal} visible = {props.visible} animationType= "slide">
      <ScrollView>
      <Image style = {styles.image} source = {{uri: 'https://media.tenor.com/images/a10412373afa988139403fbb6172a0ef/tenor.gif'}} /> 
      <Text style = {styles.text}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tincidunt metus in congue dictum. Nullam venenatis dolor erat, id eleifend ante vestibulum et. Curabitur sit amet massa in arcu viverra laoreet et eget tellus. Ut in eleifend ipsum, nec iaculis ante. Fusce finibus ex at est tempor pellentesque. Nunc dignissim interdum est eu mattis. Aliquam sed fringilla nibh. Fusce a turpis vitae mauris semper dictum. Proin sit amet nulla aliquam, sollicitudin felis eu, rhoncus eros. {'\n\n'}

Vestibulum viverra blandit varius. In eu consectetur velit. Vivamus elementum non nunc at sollicitudin. Proin felis felis, tincidunt in mi ac, interdum egestas arcu. Quisque quis sapien nec mauris laoreet aliquet. Vestibulum gravida iaculis varius. Quisque a odio lacus. Donec enim nunc, ultrices quis velit ac, sagittis porttitor diam. Vestibulum lacus nisl, volutpat ac rutrum sit amet, gravida a justo. Pellentesque sagittis non ligula et eleifend. Nam vitae laoreet erat. Vestibulum ut ipsum quis turpis suscipit molestie in ac erat.{'\n\n'}

Ut rhoncus orci vitae massa posuere, eu ultrices eros sagittis. Praesent congue ornare massa a tincidunt. Praesent iaculis sem lacus, eget finibus ante maximus sit amet. In ipsum metus, hendrerit a nulla in, pellentesque varius quam. Curabitur iaculis, turpis sit amet tincidunt venenatis, mi justo cursus eros, vitae placerat leo nunc vitae felis. Pellentesque ut bibendum ante. Phasellus quis congue sem. Vestibulum tincidunt lorem orci. Ut fermentum ligula eget tellus condimentum rhoncus. Mauris id tempor quam. Etiam ac sodales mi. Morbi tempus condimentum malesuada. Fusce congue eros volutpat erat feugiat fringilla. Phasellus id velit sapien. Curabitur rhoncus semper metus in molestie. Sed bibendum, odio nec maximus semper, urna tortor accumsan ante, quis laoreet sem odio non metus.{'\n\n'}

Nullam eu ex justo. Vivamus eget justo interdum, gravida nunc a, tristique tortor. Fusce non pulvinar nulla, nec malesuada neque. Quisque quis arcu nulla. Phasellus nec lectus sed ligula consequat lobortis eu vel felis. Nam pretium molestie lectus, in semper massa porttitor quis. Nam congue rhoncus nulla nec aliquet. Duis tristique rutrum porttitor. Sed sed urna neque. Nunc condimentum tempor nibh, eget scelerisque augue finibus vitae. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vestibulum dui lorem, pretium nec elementum vel, hendrerit eu neque. Cras condimentum, quam vel iaculis accumsan, ante velit tempus urna, mattis iaculis justo velit a mauris. Vestibulum eu elementum mauris, vitae pharetra tortor. Vestibulum sed ipsum vel quam mattis condimentum. Sed et nibh ut ligula laoreet elementum non vel nibh.{'\n\n'}

Vivamus auctor interdum hendrerit. In justo libero, mattis vel elit a, pulvinar rhoncus nibh. Donec convallis, est ut pharetra tempus, elit mauris rhoncus justo, sed scelerisque est mi id dolor. Vestibulum at augue euismod, consectetur lorem quis, vehicula dui. Fusce consectetur elementum tellus vitae consectetur. Curabitur dapibus lorem urna, sit amet eleifend eros malesuada in. Vestibulum dapibus euismod placerat. Donec tempus feugiat nunc sit amet blandit. Pellentesque non purus velit. Aliquam erat volutpat. Phasellus blandit sit amet libero sit amet sodales. Etiam vehicula eleifend quam, pretium mollis lacus iaculis a. Nam congue libero mauris, ut tincidunt lectus tempor ac.{'\n\n'}
        </Text>
         </ScrollView>
    <Button title ="Close" onPress={props.onClose}/>
    
         
    </Modal>
    </View>

  );
}

export default SampleModal;

  const styles = StyleSheet.create ({
   modal: {
      flex: 1,
      backgroundColor: '#f7021a',
      padding: 100
   },
   text: {
      color: '#3f2949',
      marginTop: 10,
      textAlign: 'justify',
      fontFamily: "Times of New Roman",
      fontSize: 20,
      backgroundColor: '#FCC2FF',
   },
   image: {
    width: 400,
    height: 400,
    backgroundColor: '#957DAD',
    alignItems: 'center'
     

   },
})
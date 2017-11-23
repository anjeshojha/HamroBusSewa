import React, {Component} from 'react';
import {
View, 
Text,
TextInput,
StyleSheet, 
Image,
Alert,
Button,
TouchableOpacity,
KeyboardAvoidingView
} from 'react-native';

export default class HamroBusUI extends Component {
  render() {
    return(
        <KeyboardAvoidingView behavior = "padding" style = {styles.mainWrapper}> 
            <View style = {styles.topWrapper}>
                <Image source = {require('./image/bus.png')} style = {styles.busIcon}/>
                <Text style = {styles.mainTitle}> HAMRO BUS  SEWA</Text>
                <Text style = {styles.tagLine}> -- We Make Travelling Fun and Easier -- </Text>
            </View>
            <View style = {styles.bottomWrapper}>
                <TouchableOpacity onPress={() => {Alert.alert("You Clicked Me")}} style = {styles.buttons}> 
                        <Image source = {require('./image/search.png')}/>
                        <Text style = {styles.buttonText}> FIND MY BUS </Text> 
                </TouchableOpacity>
                <Text style = {styles.textMessage}>────────  Already Booked a Seat..?  ────────</Text>
                <TextInput  style = {styles.input} underlineColorAndroid = 'transparent' placeholder = "Username" placeholderTextColor = '#fff' />
                <TextInput  style = {styles.input} underlineColorAndroid = 'transparent' placeholder = "Password" placeholderTextColor = '#fff' secureTextEntry/>
                <TouchableOpacity onPress={() => {Alert.alert("You Clicked Me")}} style = {styles.buttons}> 
                        <Text style = {styles.buttonText}>LOG IN </Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    );
  }
}
 //styling starts here 
const styles = StyleSheet.create({
mainWrapper : {
    backgroundColor: '#3498db',
    flex: 1,
    padding: 5
},
topWrapper : {
    flex : 1,
    alignItems: 'center',
    justifyContent: 'center'
},
bottomWrapper : {
    flex : 1,
    alignItems: 'center'  
},
mainTitle : {
    fontSize: 28,
    marginTop : 10,
    fontWeight: 'bold',
    color:'#FFF'
},
busIcon : {
    marginTop : 15
},
tagLine : {
    fontSize: 15,
    color : '#fff',
    marginTop : 7,
    opacity : 0.6,
},
buttons : {
    backgroundColor: '#2980b9',
    borderRadius: 5,
    padding : 5,
    margin : 10,
    height : 50,
    width : 320,
    alignItems : 'center',
    justifyContent : 'center',
    flexDirection: 'row',
},
buttonText : {
    fontSize : 16,
    fontWeight : '700',
    color:'#fff',
    margin : 4 

},
input : {
    height : 40,
    width : 330,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    color : '#fff',
    paddingHorizontal: 10,
    marginBottom: 10

},
textMessage : {
    marginTop :15 ,
    marginBottom : 20,
    color : '#fff',
    opacity : 0.6
}
});

// styling ends here

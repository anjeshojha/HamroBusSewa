import React, {Component} from 'react';
import {
View, 
Text,
StyleSheet, 
Image,
Alert,
Button,
TouchableOpacity
} from 'react-native';


export default class HamroBusUI extends Component {
  render() {
    return(
        <View style = {styles.mainWrapper}> 
            <View style = {styles.topWrapper}>
                <Image source = {require('./image/bus.png')} style = {styles.busIcon}/>
                <Text style = {styles.mainTitle}> HAMRO BUS  SEWA</Text>
                <Text style = {styles.tagLine}> -- Makes Travelling Fun and Easier -- </Text>

            </View>
            <View style = {styles.bottomWrapper}>
                <TouchableOpacity onPress={() => {Alert.alert("You Clicked Me")}} style = {styles.buttons}> 
                      
                        <Text style = {styles.buttonText}> BOOK MY BUS </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {Alert.alert("You Clicked Me")}} style = {styles.buttons}> 
                        <Text style = {styles.buttonText}> MY BUS DETAILS </Text>
                </TouchableOpacity>

            </View>

        </View>
    );
  }

}

const styles = StyleSheet.create({
  mainWrapper : {
    backgroundColor: '#315a7d',
    flex: 1,
    padding: 5

  },

  topWrapper : {
    flex : 3,
    alignItems: 'center',
    justifyContent: 'center'
},

  bottomWrapper : {
    flex : 1,
    alignItems: 'center'  
},

  mainTitle : {
        fontSize: 30,
        marginTop : 10,
        fontWeight: 'bold',
        color:'#FFF'
},

    tagLine : {
        fontSize: 13,
        color : '#fff',
        marginTop : 10
    },

 buttons : {
        backgroundColor: '#fff',
        borderColor: '#fff',
        borderWidth: 1,
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
    fontWeight : '300',
    color:'#315a7d'

},




});



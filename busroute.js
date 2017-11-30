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
Picker,
KeyboardAvoidingView
} from 'react-native';

import DatePicker from 'react-native-datepicker'
export default class busroute extends Component{
        constructor(props){
            super(props)
            this.state = {date:"2016-05-15"}
            this.state = {language:"Night"}
        }
  render(){
    return(

       <KeyboardAvoidingView behaviour = "padding" style = {styles.mainWrapper}>
            <View style = {styles.topWrapper}>
                <Text style = {styles.mainTitle}> HAMRO BUS  SEWA</Text>
                <Text style = {styles.tagLine}> -- We Make Travelling Fun and Easier -- </Text>
                <Text style = {styles.miniTitle}> Where to ?</Text>
            </View>

            <View style = {styles.bottomWrapper}>
                <View style = {styles.firstWrapper}>
                
                    <TextInput  style = {styles.input} underlineColorAndroid = 'transparent' placeholder = "From: " placeholderTextColor = '#fff' />
                    <TextInput  style = {styles.input} underlineColorAndroid = 'transparent' placeholder = "To: " placeholderTextColor = '#fff' />
                                
                 </View>
                 <View style = {styles.secondWrapper}>
                    <Text style = {styles.miniTitle}> Shift</Text> 

                    <Picker
                      selectedValue={this.state.language}
                      onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>
                      <Picker.Item label="Day" value="day" />
                      <Picker.Item label="Night" value="Night" />
                      <Picker.Item label="Both" value="both" />
                    </Picker>                                   
                 </View>

                <View style = {styles.thirdWrapper}>
                    <Text style = {styles.miniTitle}> Journey Day</Text>
                <DatePicker
                    style={{width: 300}}
                    date={this.state.date}
                    mode="date"
                    placeholder="Choose your date"
                    format="YYYY-MM-DD"
                    minDate="2000-11-13"
                    maxDate="2999-12-30"
                    confirmBtnText="Confirm"
                    cancelBtnText="Cancel"
                    customStyles={{
                            dateIcon: {
                            position: 'absolute',
                            left: 0,
                            top: 15,
                            marginLeft: 0,
                            height: 100,
                            width: 100
                          },
                          dateInput: {
                            top: 50,
                            marginLeft: 100,
                            borderRadius: 5,
                            backgroundColor: 'rgba(255, 255, 255, 0.2)'                                                                      
                          }
                    }}
                    onDateChange={(date) => {this.setState({date: date})}}
                 />
                </View>

                <View style = {styles.fourthWrapper}>
                    <TouchableOpacity onPress={() => {Alert.alert("You Clicked Me")}} style = {styles.buttons}> 
                        <Text style = {styles.buttonText}>Search Bus </Text>
                    </TouchableOpacity> 
                </View>

            </View>

           

       </KeyboardAvoidingView>
           
      );
     }
  }


const styles = StyleSheet.create({
    mainWrapper : {
        backgroundColor: '#3498db',
        flex: 1,
        padding: 5
    },

    topWrapper : {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },

    bottomWrapper : {
        flex: 4,
        flexDirection: 'column',
        
    },

    mainTitle : {
        fontSize: 28,
        marginTop : 10,
        fontWeight: 'bold',
        color:'#FFF'
    },

    firstWrapper : {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'flex-start'
    },

    secondWrapper : {
        flex: 1,
        flexDirection: 'column',
        top: 30,
        justifyContent: 'space-around'
    },

    thirdWrapper : {
        flex: 1.5
        
    },

    fourthWrapper : {
        flex: 0.5,      
        flexDirection: 'row',
        alignItems: 'flex-end'
        
    },

    miniTitle : {
        fontSize: 20,
        marginTop : 10,
        fontWeight: 'bold',
        color:'#FFF',
    },

    tagLine : {
    fontSize: 15,
    color : '#fff',
    marginTop : 7,
    opacity : 0.6,
    },

    input : {
    height : 50,
    fontSize: 20,
    width : 300,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    color : '#fff',
    marginTop :5 ,
    marginLeft : 5,
    paddingHorizontal : 5,
    borderRadius: 5
    },

    buttons : {
    backgroundColor: '#2980b9',
    borderRadius: 5,
    height : 50,
    width : 300,
    marginLeft : 5,
    paddingHorizontal : 5,
    marginBottom: 5,
    alignItems : 'center',
    justifyContent : 'center'
    },

    buttonText : {
    fontSize : 20,
    fontWeight : '700',
    color:'#fff',
    margin : 4 

    }

}

);

 
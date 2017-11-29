import React, {Component} from 'react';
import {
Text, 
View, 
StyleSheet,
Image,
TouchableOpacity
} from 'react-native';

export default class UserLoginUI extends Component {
	render() {
		return(
			<View style = {styles.mainContainer}>
				<Text style = {styles.text}> Hello, Nadeem</Text>
				<TouchableOpacity style = {styles.block}>
					<Image source = {require('../image/details.png')} style = {styles.blockImage}/>
					<Text style = {styles.text}> View My Bus Details</Text>

				</TouchableOpacity>
				<TouchableOpacity style = {styles.block}>
					<Image source = {require('../image/bustracking.png')} style = {styles.blockImage}/>
					<Text style = {styles.text}> View My Bus Checkpoints</Text>

				</TouchableOpacity>
				<TouchableOpacity style = {styles.block}>
					<Image source = {require('../image/checkpoint.png')} style = {styles.blockImage}/>
					<Text style = {styles.text}> Track My Bus </Text>

				</TouchableOpacity>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	mainContainer : {
		    backgroundColor: '#3498db',
		    flex : 1,
		    padding : 25,
		    alignItems: 'center',
		    justifyContent : 'center'
		   
	},
	
	text : {
		color : '#fff',
		fontWeight : '700',
		fontSize : 18,
		textAlign : 'center',
		marginTop: 25,
		opacity : 0.7
	},

	block : {
		backgroundColor: '#2980b9',
		height : 50,
		width : 300,
		marginTop : 10,
		marginBottom : 10,
		paddingVertical: 10,
		flex : 1,
		alignItems : 'center',
		borderRadius: 15
	},

	blockImage : {
		marginTop : 25
	}

});
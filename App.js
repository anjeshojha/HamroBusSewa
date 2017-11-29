import React, {Component} from 'react';
import {

} from 'react-native';
import {StackNavigator} from 'react-navigation';
import HomeScreen from './screens/HomeScreen';
import OptionsScreen from './screens/OptionsScreen';
export default class Main extends Component {
	render() {
		return(
			<Screens /> 
		);
	}
}

const Screens = StackNavigator({
	HomeScreen : {screen : HomeScreen},
	OptionsScreen : {screen : OptionsScreen} 
}, {
	headerMode :'none'
}
);

'use strict';
import React, { Component } from 'react';
import {
	AppRegistry,
	StyleSheet,
	Text,
	View,
	Navigator, 
	TouchableOpacity,
} from 'react-native';

//import LoginPage from './LoginPage'
import EventsMenu from './EventsMenu'
import SplashScreen from './SplashScreen'

class TrainingCampApp extends Component{

	_renderScene(route, nav) {
		switch (route.screen) {
			//Note: have to use {...route.passProps} for passProps in SplashScreen to work properly
			case "SplashScreen":
				return <SplashScreen navigator={nav} {...route.passProps} />
			case "MainMenu":
				return <EventsMenu navigator={nav} {...route.passProps} />
		}
	}
  render() {
    return (
        <Navigator
        	initialRoute={{screen: 'SplashScreen'}}
        	renderScene={(route, nav) => {return this._renderScene(route, nav)}}
        	configureScene={() => ({
        		...Navigator.SceneConfigs.FloatFromLeft,
        		gestures: {},
        	})
        }
        />
    )
  }
}


AppRegistry.registerComponent('SogetiTrainingCamp', () => TrainingCampApp);
/*
  Based on https://github.com/browniefed/react-native-screens
  With following the guide from https://www.raywenderlich.com/126063/react-native-tutorial
*/

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

import LoginPage from './LoginPage'
import NextScreen from './NextScreen'
import SplashScreen from './SplashScreen'

class TrainingCampApp extends Component{

	_renderScene(route, nav) {
		switch (route.screen) {
			case "SplashScreen":
				return <SplashScreen navigator={nav} />
			case "LoginPage":
				return <LoginPage navigator={nav} />
			case "NextScreen":
				return <NextScreen navigator={nav} />
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


AppRegistry.registerComponent('AwesomeProject', () => TrainingCampApp);
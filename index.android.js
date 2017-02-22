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

import EventsMenu from './Screens/Events/EventsMenu';
import SplashScreen from './Screens/SplashScreen';
import EventDetails from './Screens/Events/EventDetails';
import SubmitSurvey from './Screens/Surveys/SubmitSurvey';
import EditEvent from './Screens/Events/EditEvent';
import AddEvent from './Screens/Events/AddEvent'
import ActivitiesHub from './Screens/Activities/ActivitiesHub'

class TrainingCampApp extends Component{

	_renderScene(route, nav) {
		switch (route.screen) {
			//Note: have to use {...route.passProps} for passProps in SplashScreen to work properly
			case "SplashScreen":
				return <SplashScreen navigator={nav} {...route.passProps} />
			case "MainMenu":
				return <EventsMenu navigator={nav} {...route.passProps}  />
			case "EventDetails":
				return <EventDetails navigator={nav} {...route.passProps} />
			case "SubmitSurvey":
				return <SubmitSurvey navigator={nav} {...route.passProps} />
			case "EditEvent":
				return <EditEvent navigator={nav} {...route.passProps} />
			case "AddEvent":
				return <AddEvent navigator={nav} {...route.passProps} />
			case "ActivitiesHub":
				return <ActivitiesHub navigator={nav} {...route.passProps} />
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
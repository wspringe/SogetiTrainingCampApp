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

import SplashScreen from './Screens/SplashScreen'

import EventsMenu from './Screens/Events/EventsMenu'
import EventDetails from './Screens/Events/EventDetails'
import EditEvent from './Screens/Events/EditEvent'
import AddEvent from './Screens/Events/AddEvent'

import ActivityHub from './Screens/Activities/ActivitiesHub'
import AddActivity from './Screens/Activities/AddActivity'
import EditActivity from './Screens/Activities/EditActivity'
import ActivityDetails from './Screens/Activities/ActivityDetails'

import SubmitSurvey from './Screens/Surveys/SubmitSurvey'
import ViewSurveys from './Screens/Surveys/ViewSurveys'
import UserManagement from './Screens/User Management/UserManagement'


class TrainingCampApp extends Component{

	_renderScene(route, nav) {
		switch (route.screen) {
			//Note: have to use {...route.passProps} for passProps in SplashScreen to work properly
			case "SplashScreen":
				return <SplashScreen navigator={nav} {...route.passProps} />
			case "MainMenu":
				return <EventsMenu navigator={nav} {...route.passProps} />
			case "EventDetails":
				return <EventDetails navigator={nav} {...route.passProps} />
			case "SubmitSurvey":
				return <SubmitSurvey navigator={nav} {...route.passProps} />
			case "EditEvent":
				return <EditEvent navigator={nav} {...route.passProps} />
			case "AddEvent":
				return <AddEvent navigator={nav} {...route.passProps} />
			case "ActivitiesHub":
				return <ActivityHub navigator={nav} {...route.passProps} />
			case "AddActivity":
				return <AddActivity navigator={nav} {...route.passProps} />
			case "EditActivity":
				return <EditActivity navigator={nav} {...route.passProps} />
			case "ActivityDetails":
				return <ActivityDetails navigator={nav} {...route.passProps} />
			case "ViewSurveys":
				return <ViewSurveys navigator={nav} {...route.passProps} />
			case "UserManagement":
				return <UserManagement navigator={nav} {...route.passProps} />
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
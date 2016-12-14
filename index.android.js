/*
  Based on https://github.com/browniefed/react-native-screens
  With following the guide from https://www.raywenderlich.com/126063/react-native-tutorial
*/

'use strict';
var React = require('react');
var ReactNative = require('react-native');

import LoginPage from './LoginPage'

class TrainingCampApp extends React.Component{
  render() {
    return (
        <LoginPage />
    );
  }
};


ReactNative.AppRegistry.registerComponent('AwesomeProject', () => TrainingCampApp);
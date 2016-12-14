import React, { Component, PropTypes } from 'react';
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native';

export default class NextScreen extends Component {
  _goBack() {
  	console.log("We're going back!");
  	this.props.navigator.push({ screen: 'LoginPage' });
  }

  render() {
    return (
    	<View style={styles.container}>
    		<View style={styles.header}>
	      		<Text>This is the next screen!</Text>
	      		<TouchableHighlight onPress={this._goBack.bind(this)}>
	      			<Text>Go back to LoginPage</Text>
	      		</TouchableHighlight>
      		</View>
      	</View>
    )
  }
}

var styles = StyleSheet.create({
    container: {
      flexDirection: 'column',
      flex: 1,
      backgroundColor: 'transparent'
    },
    header: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: .5,
        backgroundColor: 'transparent'
    }
})
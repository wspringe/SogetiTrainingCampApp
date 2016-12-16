/*
	Based on https://github.com/browniefed/react-native-screens
    With following the guide from https://www.raywenderlich.com/126063/react-native-tutorial
*/
'use strict';
import React, { Component } from 'react'
var Dimensions = require('Dimensions');
var windowSize = Dimensions.get('window');

import {
  AppRegistry,
  StyleSheet,
  View,
  Text,
  TextInput,
  Image,
  Platform,
  TouchableHighlight,
  Navigator
} from 'react-native';

export default class LoginPage extends Component {
  constructor() {
    super()
    this.state = {
        username: '',
        password: ''
    }
  }
  _nextPage() {
    console.log("go to NextScreen");
    this.props.navigator.push({screen: 'NextScreen'});
  }
  render() {
    return (
        <View style={styles.container}>
            <Image style={styles.bg} source={require('./Resources/f134fc71.png')} />
            <View style={styles.header}>
                <Image source={require('./Resources/sogeti_logo.png')} />
            </View>
            <View style={styles.inputs}>
                <View style={styles.inputContainer}>
                    <Image style={styles.inputUsername} source={require('./Resources/un.png')}/>
                    <TextInput 
                        style={[styles.input, {height: Platform.OS == 'android' ? 35 : 20}, styles.whiteFont]}
                        underlineColorAndroid={'transparent'}
                        placeholder='Username'
                        placeholderTextColor="white"
                        //value={this.state.username}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Image style={styles.inputPassword} source={require('./Resources/pw.png')}/>
                    <TextInput
                        password={true}
                        secureTextEntry={true}
                        style={[styles.input, {height: Platform.OS == 'android' ? 40 : 20}, styles.whiteFont]}
                        placeholder="Password"
                        placeholderTextColor="#FFF"
                        underlineColorAndroid={'transparent'}
                        //value={this.state.password}
                    />
                </View>
                <View style={styles.forgotContainer}>
                    <Text style={styles.greyFont}>Forgot Password</Text>
                </View>
            </View>
            <TouchableHighlight onPress={this._nextPage.bind(this) }> 
                <View style={styles.signin}> 
                    <Text style={styles.whiteFont}>Sign In</Text>
                </View>
            </TouchableHighlight>
            <View style={styles.signup}>
                <Text style={styles.greyFont}>Don't have an account?<Text style={styles.whiteFont}>  Sign Up</Text></Text>
            </View>
        </View>
    );
  }
}

var styles = StyleSheet.create({
    container: {
      flexDirection: 'column',
      flex: 1,
      backgroundColor: 'transparent'
    },
    bg: {
        position: 'absolute',
        left: 0,
        top: 0,
        width: windowSize.width,
        height: windowSize.height
    },
    header: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: .5,
        backgroundColor: 'transparent'
    },
    mark: {
        width: 150,
        height: 150
    },
    signin: {
        backgroundColor: '#FF3366',
        padding: 20,
        alignItems: 'center'
    },
    signup: {
      justifyContent: 'center',
      alignItems: 'center',
      flex: .15
    },
    inputs: {
        marginTop: 10,
        marginBottom: 10,
        flex: .25
    },
    inputPassword: {
        marginLeft: 15,
        width: 20,
        height: 21
    },
    inputUsername: {
      marginLeft: 15,
      width: 20,
      height: 20
    },
    inputContainer: {
        padding: 10,
        borderWidth: 1,
        borderBottomColor: '#CCC',
        borderColor: 'transparent'
    },
    input: {
        position: 'absolute',
        left: 61,
        top: 12,
        right: 0,
        height: 35,
        fontSize: 14
    },
    forgotContainer: {
      alignItems: 'flex-end',
      padding: 15,
    },
    greyFont: {
      color: '#D8D8D8'
    },
    whiteFont: {
      color: '#FFF'
    }
})
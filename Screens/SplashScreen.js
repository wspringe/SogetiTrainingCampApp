import React, { Component } from 'react';

import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableHighlight,
    Navigator
} from 'react-native';

import Auth0Lock from 'react-native-lock';

var credentials = require('../Auth-0/auth0-credentials');
var lock = new Auth0Lock(credentials);

export default class SplashScreen extends Component{

  //need initial prop(s) so that the json data can be assigned to a state and used
  constructor(props) {
    super(props);
    this.state = {
      jsonData: ''
    }
  }

//needed to call json function to get data
  componentDidMount() {
    this.loadJsonData();
  }

//json function to get json data; almost everything is copied 
//from https://facebook.github.io/react-native/docs/network.html
  loadJsonData() {
    fetch('http://sample-env.uagzrjthc3.us-west-2.elasticbeanstalk.com/name')
      .then((response) => response.json()) 
      .then((responseJson) => { 
        //sets state of previously declared state
        this.setState({
          jsonData: responseJson
        })
      }) 
        .catch((error) => { 
          console.error(error); 
        });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.messageBox}>
          <Image
            style={styles.badge}
            source={require('../Resources/sogeti_logo.png')}
          />
          <Text style={styles.title}>Sogeti Training Camp</Text>
          <Text style={styles.subtitle}>by ASU Capstone</Text>
          <Text style={styles.subtitle}>Name: {this.state.jsonData.name}</Text>
          <Text style={styles.subtitle}>Status: {this.state.jsonData.status}</Text>
          
        </View>
        <TouchableHighlight
          style={styles.signInButton}
          underlayColor='#949494'
          //Remember to bind for onPress
          onPress={this._onLogin.bind(this)}>
          <Text>Log In</Text>
        </TouchableHighlight>
      </View>
    );
  }

  _onLogin() {
    //this is from the tutorial @ https://github.com/root-two/react-native-drawer
    lock.show({
      closable: true,
    }, (err, profile, token) => {
      if (err) {
        console.log(err);
        return;
      }
      this.props.navigator.push({screen: 'MainMenu',
      //passes props from auth0 user info to next screen
      passProps: {
        profile: profile,
        token: token,
      }
    });
    });
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },
  messageBox: {
    flex: 1,
    justifyContent: 'center',
  },
  badge: {
    alignSelf: 'center',
    height: 169,
    width: 151,
  },
  title: {
    fontSize: 17,
    textAlign: 'center',
    marginTop: 8,
    color: '#ee8138',
  },
  subtitle: {
    fontSize: 17,
    textAlign: 'center',
    marginTop: 4,
    color: '#ee8138',
  },
  signInButton: {
    height: 50,
    alignSelf: 'stretch',
    backgroundColor: '#D9DADF',
    margin: 10,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
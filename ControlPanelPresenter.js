import React, { Component, PropTypes } from 'react'
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
  Image
} from 'react-native'

export default class ControlPanelPresenter extends Component {
  static propTypes = {
    closeDrawer: PropTypes.func.isRequired
  };

  _test() {
      console.log("Click!");
  }

  render() {
    let {closeDrawer} = this.props
    return (
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Hello,</Text>
          <Image source={{uri: this.props.avatar}} />
          <Text style={styles.headerText}>{this.props.name}</Text>
        </View>
        <View style={styles.first}>
          <TouchableHighlight 
          onPress={this._test.bind(this)}
          underlayColor='gray'>
            <View style={styles.menuOptionContainer}>
              <Text style={styles.menuText}>
                <Image style={styles.image} source={require('./Resources/events.png')} />   Events
              </Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight 
          onPress={this._test.bind(this)}
          underlayColor='gray'>
            <View style={styles.menuOptionContainer}>
              <Text style={styles.menuText}>
                <Image style={styles.image} source={require('./Resources/events.png')} />   Surveys
              </Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight 
          onPress={this._test.bind(this)}
          underlayColor='gray'>
            <View style={styles.menuOptionContainer}>
              <Text style={styles.menuText}>
                <Image style={styles.image} source={require('./Resources/events.png')} />   Activities
              </Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight 
          onPress={this._test.bind(this)}
          underlayColor='gray'>
            <View style={styles.lastFirstMenuOption}>
              <Text style={styles.menuText}>
                <Image style={styles.image} source={require('./Resources/events.png')} />   Notifications
              </Text>
            </View>
          </TouchableHighlight>
          </View>
          
          <View style={styles.second}>
          <TouchableHighlight 
          onPress={this._test.bind(this)}
          underlayColor='gray'>
            <View style={styles.menuOptionContainer}>
              <Text style={styles.menuText}>
                <Image style={styles.image} source={require('./Resources/events.png')} />   Event Management
              </Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight 
          onPress={this._test.bind(this)}
          underlayColor='gray'>
            <View style={styles.menuOptionContainer}>
              <Text style={styles.menuText}>
                <Image style={styles.image} source={require('./Resources/events.png')} />   Push Notifications
              </Text>
            </View>
          </TouchableHighlight>
          </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
  },
  header: {
    backgroundColor: 'orange',
    flex: .25,
    justifyContent: 'center',
    alignItems: 'center',
     paddingTop: 20,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10
  },
  headerText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold'
  },
  first: {
    borderWidth: 1,
    borderBottomColor: 'gray',
    backgroundColor: 'white',
    borderColor: 'transparent'
  },
  second: {
    borderWidth: 1,
    backgroundColor: 'white',
    borderColor: 'transparent',
  },
  menuText: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },
  image: {
    width: 18,
    height: 18,
  },
  menuOptionContainer: {
    paddingLeft: 10,
    paddingTop: 5,
  },
  lastFirstMenuOption: {
    paddingLeft: 10,
    paddingTop: 5,
    paddingBottom: 10,
  }
})
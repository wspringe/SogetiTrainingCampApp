import React, { Component, PropTypes } from 'react';
import { View, Text, TouchableHighlight, StyleSheet, Navigator } from 'react-native';
import Drawer from 'react-native-drawer';
import ControlPanel from './ControlPanelAdmin';
import NavigationBar from 'react-native-navbar';
import MenuIcon from './MenuIcon';

export default class MainMenu extends Component {
  static contextTypes = {
    drawer: React.PropTypes.object
  };

  state={
    drawerOpen: false,
    drawerDisabled: false,
  };
  closeDrawer = () => {
    this._drawer.close()
  };

  openDrawer = () => {
    this._drawer.open()
  };

  _goBack() {
  	console.log("We're going back!");
  	this.props.navigator.push({ screen: 'SplashScreen' });
  }

  render() {
    const leftButtonConfig = {
      title: 'Menu',
      handler: () => this._drawer.open(),
    };
    const titleConfig = {
      title: 'Main Menu',
      backgroundColor: 'orange',
    };

    return (
      <Drawer
        ref={(ref) => this._drawer = ref}
        type="overlay"
        //This is where menu goes on sidebar with props passing to ControlPanel
        content={
          <ControlPanel closeDrawer={this.closeDrawer} name={this.props.profile.name} avatar={this.props.profile.picture}/>
        }
        tapToClose={true}
        styles={{main: {shadowColor: '#000', shadowOpacity: 0.5, shadowRadius: 15}}}
        onOpen={() => {
          console.log('onopen')
          this.setState({drawerOpen: true})
        }}
        onClose={() => {
          console.log('onclose')
          this.setState({drawerOpen: false})
        }}
        captureGestures={false}
        tweenHandler={ratio => ({
          main: {
            opacity: 1,
          },
          mainOverlay: {
            opacity: ratio / 2,
            backgroundColor: 'gray',
          },
        })}
        tweenDuration={100}
        panThreshold={0.08}
        disabled={false}
        openDrawerOffset={(viewport) => {
          return 100
        }}
        closedDrawerOffset={() => -3}
        panOpenMask={0.2}
        negotiatePan 
        >

        <NavigationBar
          title={titleConfig}
          leftButton={
            <MenuIcon 
            style={{ marginLeft: 8, marginTop: 8 }}
            onPress={() => this._drawer.open()} />
          }
          tintColor='orange'
          />

        <View style={styles.container}>
        <View style={styles.header}>
            <Text>This is the next screen!</Text>
            <TouchableHighlight onPress={this._goBack.bind(this)}>
              <Text>Go back to SplashScreen</Text>
            </TouchableHighlight>
            <Text>Hello, {this.props.profile.name}</Text>
          </View>
        </View>
      </Drawer>
      //Above the end Drawer tag is where the main of the scene goes
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
    },
})
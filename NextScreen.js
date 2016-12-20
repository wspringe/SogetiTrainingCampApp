import React, { Component, PropTypes } from 'react';
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native';
import Drawer from 'react-native-drawer'
import ControlPanel from './ControlPanel'

export default class NextScreen extends Component {
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
    return (
      <Drawer
        ref={(ref) => this._drawer = ref}
        type="overlay"
        //This is where menu goes on sidebar
        content={
          <ControlPanel closeDrawer={this.closeDrawer} />
        }
        tapToClose={true}
        styles={{main: {shadowColor: '#000', shadowOpacity: 0.5, shadowRadius: 15, paddingTop: 20}}}
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
            backgroundColor: 'black',
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

        <View style={styles.container}>
        <View style={styles.header}>
            <Text>This is the next screen!</Text>
            <TouchableHighlight onPress={this._goBack.bind(this)}>
              <Text>Go back to SplashScreen</Text>
            </TouchableHighlight>
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
    }
})
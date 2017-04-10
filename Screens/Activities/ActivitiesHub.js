import React, { Component, PropTypes } from 'react';
import { 
  View, 
  Text, 
  TouchableHighlight, 
  TouchableOpacity,
  StyleSheet, 
  Navigator, 
  ScrollView 
} from 'react-native';
import Drawer from 'react-native-drawer';
import ControlPanel from '../Control Panels/ControlPanel';
import NavigationBar from 'react-native-navbar';
import MenuIcon from '../../Icons JS/MenuIcon';

export default class ActivitiesHub extends Component {
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
    console.log(this.props.profile.roles)
    this._drawer.open()
  };

  _goBack() {
  	console.log("We're going back!");
  	this.props.navigator.pop()
  };

  _goToDetails = () => {
    this.props.navigator.push({ screen: 'ActivityDetails' , 
    passProps: {role: this.props.role }
    })
  };

  render() {
    var rightButtonConfig = {
      title: ""
    }

    const titleConfig = {
      title: 'Activities',
      backgroundColor: 'orange',
    };

    if(this.props.role == "admin") {
      rightButtonConfig = {
        title: 'Add',
        handler: () => this.props.navigator.push({ screen: 'AddActivity'})
      }
    }

    return (
      <Drawer
        ref={(ref) => this._drawer = ref}
        type="overlay"
        //This is where menu goes on sidebar with props passing to ControlPanel
        content={
          <ControlPanel closeDrawer={this.closeDrawer} navigator={this.props.navigator} name={this.props.name} role={this.props.role} />
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
        //Don't touch this
        tweenHandler={ratio => ({
          main: {
            opacity: 1,
          },
          mainOverlay: {
            opacity: ratio / 2,
            backgroundColor: 'gray',
          },
        })}
        //
        tweenDuration={100}
        panThreshold={0.08}
        disabled={false}
        openDrawerOffset={(viewport) => {
          return 100
        }}
        closedDrawerOffset={() => -3}
        panOpenMask={0.2}
        side="left" 
        negotiatePan={false}
        >

        <NavigationBar
          title={titleConfig}
          leftButton={
            <MenuIcon 
            style={{ marginLeft: 8, marginTop: 8 }}
            onPress={() => this._drawer.open()} />
          }
          rightButton={rightButtonConfig}
          tintColor='orange'
          />

        <ScrollView style={styles.container}>
          <View style={styles.upcomingEventTextContainer}>
            <Text style={styles.categoryText}>  Upcoming Activities</Text>
          </View>
          <View style={styles.listTextContainer}>
            <TouchableOpacity onPress={this._goToDetails.bind(this)}>
              <Text>      Next Activity</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.listTextContainer}>
            <TouchableOpacity onPress={this._goToDetails.bind(this)}>
              <Text>      Later Activity</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.listTextContainer}>
            <TouchableOpacity onPress={this._goToDetails.bind(this)}>
              <Text>      Last Activity</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.pastEventsTextContainer}>
            <Text style={styles.categoryText}>  Past Activities</Text>
          </View>
          <View style={styles.listTextContainer}>
            <TouchableOpacity onPress={this._goToDetails.bind(this)}>
              <Text>      Activity 1</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.listTextContainer}>
            <TouchableOpacity onPress={this._goToDetails.bind(this)}>
              <Text>      Activity 2</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.hintTextContainer}>
            <Text style={styles.hintText}>Press the 3 horizontal black lines to open the menu!</Text>
            <Text style={styles.hintText}></Text>
          </View>
        </ScrollView>
        
      </Drawer>
      //Above the end Drawer tag is where the main of the scene goes
    )
  }
}

var styles = StyleSheet.create({
    container: {
      flexDirection: 'column',
      flex: 1,
      backgroundColor: 'white',
      paddingTop: 10
    },
    categoryText: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    upcomingEventTextContainer: {
      borderColor: 'gray',
      borderBottomWidth: 1,
      paddingBottom: 10
    },
    pastEventsTextContainer: {
      borderColor: 'gray',
      borderBottomWidth: 1,
      paddingBottom: 10,
      paddingTop: 10,
    },
    listTextContainer: {
      paddingTop: 10,
      paddingBottom: 10,
      borderColor: 'gray',
      borderBottomWidth: 1,
    },
    hintText: {
      fontSize: 10,
      color: 'gray',
    },
    hintTextContainer: {
      marginTop: 20,
      justifyContent: 'center',
      alignItems: 'center',
      flex: 0.5,
    }
})
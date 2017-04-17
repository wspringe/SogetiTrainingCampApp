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
var role = ""

var exampleArray = [
  {
    "_id": "58c3b01a79d78446289a013c",
    "Start_Time": "8:00 AM",
    "End_Time": "9:00 AM",
    "Host": "Joe",
    "name": "Event 1",
    "description": "This is Event 1! Welcome to the first course",
    "upcoming": true
  },
  {
    "_id": "58c3ba2479d78446289a013d",
    "Start_Time": "8:00 AM",
    "End_Time": "9:00 AM",
    "Host": "Joe",
    "name": "Event 2",
    "description": "This is Event 2! Welcome to the second course",
    "upcoming": true
  },
  {
    "_id": "58c3ba4679d78446289a013e",
    "Start_Time": "8:00 AM",
    "End_Time": "9:00 AM",
    "Host": "Joe",
    "name": "Event 3",
    "description": "This is Event 3! Welcome to the third course",
    "upcoming": true
  },
  {
    "_id": "58c3ba5b79d78446289a013f",
    "Start_Time": "8:00 AM",
    "End_Time": "9:00 AM",
    "Host": "Joe",
    "name": "Event 4",
    "description": "This is Event 4! Welcome to the fourth course",
    "upcoming": false
  },
  {
    "_id": "58c5b177b2e8ac0d6020cf4a",
    "Start_Time": "4:00 PM",
    "End_Time": "5:00 PM",
    "Host": "Gary",
    "name": "Event 5",
    "description": "This is Event 5! Wow 5 events already!",
    "upcoming": true
  },
  {
    "_id": "58c630f07e57980448a715bd",
    "Start_Time": "7:00 AM",
    "End_Time": "8:00 AM",
    "Host": "Rose",
    "name": "Event 6",
    "description": "This is Event 6! CHOCOLATE MILK",
    "upcoming": false
  },
  {
    "_id": "58c6312c7e57980448a715be",
    "Start_Time": "11:00 AM",
    "End_Time": "12:00 PM",
    "Host": "Billy",
    "name": "Event 7",
    "description": "This is Event 7. The cake is a lie.",
    "upcoming": true
  }
];
  


export default class MainMenu extends Component {
  loadJsonData() {
    fetch('http://forums.swirlclinic.com:1337/api/events')
     .then((response) => response.json())
      .then((responseJson) => {
        exampleArray = responseJson;
      })
      .catch((error) => {
        console.error(error);
      });
  }

  

  componentWillMount() {
      
      if(this.props.profile != null)
      {
        var email = this.props.profile.name
      }
      else {
        var email = this.props.name
      }
      var domain = email.substring(email.lastIndexOf("@") +1)
      console.log(domain)
      if(this.props.profile != null) {
      if(domain == "admin.com") {
        this.props.profile.roles = "admin"
        role = this.props.profile.roles
      }
      else {
        this.props.profile.roles = "user"
        role = this.props.profile.roles
      }
    }

    
  }

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
  };

  _goToDetails = (theEvent, undefined) => {
    this.props.navigator.push({ screen: 'EventDetails' ,
    passProps: {
        event: theEvent,
        role: role
      }
    })
  };

  render() {
    this.loadJsonData();
    //exampleArray = this.state.eventData;
    var myEvents = [];
    var finishedEvents = [];
    for (let i = 0; i < exampleArray.length; i++) {
          myEvents.push(<View style={styles.listTextContainer}>
                        <TouchableOpacity onPress={this._goToDetails.bind(this, exampleArray[i])}>
                          <Text> {exampleArray[i].name} </Text>
                        </TouchableOpacity>
                      </View>);
    }

    const titleConfig = {
      title: 'Events',
      backgroundColor: 'orange',
    };

    const rightButtonConfig = {
      title: 'Add',
      handler: () => this.props.navigator.push({ screen: 'AddEvent'})
    }

    if (this.props.profile != null)
    {
      var name = this.props.profile.name
      var role = this.props.profile.roles
    }
    else {
      var name = this.props.name
      var role = this.props.role
    }

    return (
      <Drawer
        ref={(ref) => this._drawer = ref}
        type="overlay"
        //This is where menu goes on sidebar with props passing to ControlPanel
        content={
          <ControlPanel closeDrawer={this.closeDrawer} name={name} navigator={this.props.navigator} role={role} />
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
            <Text style={styles.categoryText}>  Upcoming Events</Text>
          </View>

          {myEvents}
          <View style={styles.pastEventsTextContainer}>
            <Text style={styles.categoryText}>  Past Events</Text>
          </View>
          {finishedEvents}

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
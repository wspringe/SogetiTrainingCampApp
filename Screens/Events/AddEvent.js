import React, { Component, PropTypes } from 'react';
import { 
  View, 
  Text, 
  TouchableHighlight, 
  TouchableOpacity,
  StyleSheet, 
  Navigator, 
  ScrollView,
  TextInput
} from 'react-native';

import NavigationBar from 'react-native-navbar';
import BackButtonIcon from '../../Icons JS/BackButtonIcon';

export default class AddEvent extends Component {
  render() {
    const rightButtonConfig = {
      title: 'Save',
      color: 'white',
      handler: () => { alert('Added')
                       this.props.navigator.pop() }
    }
    const titleConfig = {
      title: 'Add Event',
      color: 'black'
    }
      return(
        <View style={{flex: 1, }}>
          <NavigationBar
            title={titleConfig}
            leftButton={
              <BackButtonIcon
                style={{ marginLeft: 8, marginTop: 8 }}
                onPress={() => this.props.navigator.pop()} />
            }
            rightButton={rightButtonConfig}
            tintColor='orange'
          />
          <ScrollView style={styles.container}>
            <View style={styles.eventNameContainer}>
              <TextInput
              style={styles.inputEventName}
              placeholder= 'Event Name'
              maxLength={20}
              />
            </View>
            <View style={styles.eventTimeContainer}>
              <Text style={styles.eventTime}>
                Start Time: <TextInput 
                             style={styles.input}
                             placeholder='Current Time' />
              </Text>
            </View>
            <View style={styles.eventTimeContainer}>
              <Text style={styles.eventTime}>
                End Time: <TextInput
                           style={styles.input}
                           placeholder='End Time' />
              </Text>
            </View>
            <View style={styles.eventTimeContainer}>
              <Text style={styles.eventTime}>
                Host: <TextInput
                      style={styles.input}
                      placeholder='Host name' />
              </Text>
            </View>
            <Text>Description: </Text>
            <TextInput 
             style={styles.descriptionBody}
             placeholder='Event Description...'
             multiline={true} />
          </ScrollView>
        </View>
      )
  }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'white',
        paddingTop: 10,
        paddingLeft: 5
    },
    eventName: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    eventNameContainer: {
        paddingBottom: 5
    },
    eventTimeContainer: {
        paddingBottom: 8,
    },
    eventTime: {
        color: 'gray',
    },
    descriptionBodyContainer: {
        paddingLeft: 8,
    },
    surveyButton: {
        justifyContent: 'center',
        alignSelf: 'stretch',
        height: 40,
        backgroundColor: '#D9DADF',
        alignItems: 'center',
        borderRadius: 5,
        marginTop: 20,
        marginRight: 10,
        marginLeft: 5,
        flex: 1
    },
    input: {
      height: 15,
      width: 100,
      borderWidth: 0.5, 
      fontSize: 12, 
      paddingLeft: 1,
      paddingTop: 3,
    },
    inputEventName: {
      fontSize: 20,
      borderWidth: 0.5,
      height: 30,
      width: 200,
      paddingLeft: 5
    },
    descriptionBody: {
      fontSize: 12,
      borderWidth: 1,
      height: 300,
      width: 363,
      paddingLeft: 8,
      paddingRight: 8
    }
})
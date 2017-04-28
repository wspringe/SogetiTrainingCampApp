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

import {
  Cell,
  Section,
  TableView,
} from 'react-native-tableview-simple';

import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview'
import NavigationBar from 'react-native-navbar';
import BackButtonIcon from '../../Icons JS/BackButtonIcon';

var editEventNew = {};

export default class EditEvent extends Component {

  deleteEvent() {
    
    var toDelete = {};
    toDelete.id = this.props.event.id;
    fetch('https://forums.swirlclinic.com:1337/api/events/delete', {
      method: 'POST',
      headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
      },
      body: JSON.stringify(toDelete)
    })
    .then((response) => response.json())
      .then((responseJson) => {
        //console.log(responseJson.message);
        if(responseJson.message == "Failure!") {
                          alert('Failed to delete event! Please try again.');
                        }
                        else {
                          alert('Successfully removed event!');
                          this.props.navigator.push({screen: 'MainMenu', passProps: {name: this.props.name, role: this.props.role} });

                          editEventNew = {};
                        }

        
        
      })
    //return "Failure!";
    }

  editEvent() {
    editEventNew.id = this.props.event.id;
    console.log("to send" + JSON.stringify(editEventNew));
    fetch('https://forums.swirlclinic.com:1337/api/events/edit', {
      method: 'POST',
      headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
      },
      body: JSON.stringify(editEventNew)
    })
    .then((response) => response.json())
      .then((responseJson) => {
        //console.log(responseJson.message);
        if(responseJson.message == "Failure!") {
                          alert('Failed to edit event! Please try again.');
                        }
                        else {
                          alert('Successfully updated event!');
                          this.props.navigator.push({screen: 'MainMenu', passProps: {name: this.props.name, role: this.props.role} });

                          editEventNew = {};
                        }

        
        
      })
    //return "Failure!";
    }

  render() {

    //Deep copy
    editEventNew.name = this.props.event.name;
    editEventNew.starttime = this.props.event.starttime;
    editEventNew.endtime = this.props.event.endtime;
    editEventNew.date = this.props.event.date;
    editEventNew.host = this.props.event.host;
    editEventNew.description = this.props.event.description;
    const rightButtonConfig = {
      title: 'Save',
      color: 'white',
      handler: () => { 
                       this.editEvent() }
    }
    const titleConfig = {
      title: 'Edit Event',
      color: 'black'
    }

    const CellName = (props) => (
      <Cell
        {...props}
        cellContentView={
          <View
            style={{ alignItems: 'center', flexDirection: 'row', flex: 1, paddingVertical: 5 }}
              >
            <Text
              allowFontScaling
              numberOfLines={1}
              style={{ flex: 1, fontSize: 20 }}
                >
              {props.title}
            </Text>
            <TextInput
              onChangeText={(text) => editEventNew.name = text}
              style={{width: 200}}
              placeholder={props.placeholder}>
            </TextInput>
          </View>
          }
        />
      );

      const CellStart = (props) => (
      <Cell
        {...props}
        cellContentView={
          <View
            style={{ alignItems: 'center', flexDirection: 'row', flex: 1, paddingVertical: 5 }}
              >
            <Text
              allowFontScaling
              numberOfLines={1}
              style={{ flex: 1, fontSize: 20 }}
                >
              {props.title}
            </Text>
            <TextInput
              onChangeText={(text) => editEventNew.starttime = text}
              style={{width: 200}}
              placeholder={props.placeholder}>
            </TextInput>
          </View>
          }
        />
      );

      const CellEnd = (props) => (
      <Cell
        {...props}
        cellContentView={
          <View
            style={{ alignItems: 'center', flexDirection: 'row', flex: 1, paddingVertical: 5 }}
              >
            <Text
              allowFontScaling
              numberOfLines={1}
              style={{ flex: 1, fontSize: 20 }}
                >
              {props.title}
            </Text>
            <TextInput
              onChangeText={(text) => editEventNew.endtime = text}
              style={{width: 200}}
              placeholder={props.placeholder}>
            </TextInput>
          </View>
          }
        />
      );

      const CellDate = (props) => (
      <Cell
        {...props}
        cellContentView={
          <View
            style={{ alignItems: 'center', flexDirection: 'row', flex: 1, paddingVertical: 5 }}
              >
            <Text
              allowFontScaling
              numberOfLines={1}
              style={{ flex: 1, fontSize: 20 }}
                >
              {props.title}
            </Text>
            <TextInput
              onChangeText={(text) => editEventNew.date = text}
              style={{width: 200}}
              placeholder={props.placeholder}>
            </TextInput>
          </View>
          }
        />
      );

      

      const CellHost = (props) => (
      <Cell
        {...props}
        cellContentView={
          <View
            style={{ alignItems: 'center', flexDirection: 'row', flex: 1, paddingVertical: 5 }}
              >
            <Text
              allowFontScaling
              numberOfLines={1}
              style={{ flex: 1, fontSize: 20 }}
                >
              {props.title}
            </Text>
            <TextInput
              onChangeText={(text) => editEventNew.host = text}
              style={{width: 200}}
              placeholder={props.placeholder}>
            </TextInput>
          </View>
          }
        />
      );

      const CellDescription = (props) => (
      <Cell
        {...props}
        cellContentView={
          <View
            style={{ flexDirection: 'row', flex: 1, paddingVertical: 5, marginBottom: 10, height: 100 }}
              >
            <Text
              allowFontScaling
              numberOfLines={1}
              style={{ flex: 1, fontSize: 20 }}
                >
              {props.title}
            </Text>
            <TextInput
              style={{width: 200, textAlignVertical: 'top', height: 100}}
              multiline={true}
              onChangeText={(text) => editEventNew.description = text}
              placeholder={props.placeholder}>
            </TextInput>
          </View>
          }
        />
      );

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
          <KeyboardAwareScrollView>
            <TableView>
              <Section>
                <CellName title="Event Name: " placeholder={this.props.event.name} defaultValue={this.props.event.name} />
                <CellStart title="Start Time: " placeholder={this.props.event.starttime} defaultValue={this.props.event.starttime} />
                <CellEnd title="End Time: " placeholder={this.props.event.endtime} defaultValue={this.props.event.endtime}/>
                <CellDate title="Date: " placeholder={this.props.event.date} defaultValue={this.props.event.date} />
                <CellHost title="Host: " placeholder={this.props.event.host} defaultValue={this.props.event.host} />
                <CellDescription title= "Description:" placeholder={this.props.event.description} defaultValue={this.props.event.description} />
              </Section>

              <TouchableOpacity 
          style={styles.submitButton}
          underlayColor='#949494'
          onPress={this.deleteEvent.bind(this)} >
           
            <Text style={{fontWeight: 'bold'}}>Delete Event</Text>
        </TouchableOpacity>
            </TableView>
          </KeyboardAwareScrollView>
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
    submitButton: {
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
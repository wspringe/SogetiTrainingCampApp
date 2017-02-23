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

export default class AddActivity extends Component {
  
  render() {
    const rightButtonConfig = {
      title: 'Save',
      color: 'white',
      handler: () => { alert('Saved')
                       this.props.navigator.pop() }
    }
    const titleConfig = {
      title: 'Add Activity',
      color: 'black'
    }

    const CellEdit = (props) => (
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
                <CellEdit title="Activity Name: " placeholder="Activity Name" />
                <CellEdit title="Current Time: " placeholder="Current Time" />
                <CellEdit title="End Time: " placeholder="End Time" />
                <CellEdit title="Host: " placeholder="Host Name" />
                <CellDescription title= "Description:" placeholder="Description..." />
              </Section>
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

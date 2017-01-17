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

export default class SubmitSurvey extends Component {
  _submitSurvey = () => {
        alert("Survey Submitted!")
        this.props.navigator.pop()
    };
render() {
  const titleConfig = {
    title: 'Submit Survey',
    color: "black",
  }
  return (
    <View style={{ flex: 1, }}>
      <NavigationBar
        title={titleConfig}
        leftButton={
          <BackButtonIcon 
            style={{ marginLeft: 8, marginTop: 8 }}
            onPress={() => this.props.navigator.pop()} />
          }
        tintColor='orange'
      />
      <ScrollView style={styles.container}>
        <View style={{ paddingBottom: 5, }}>
          <Text style={styles.eventNameText}>Event Name</Text>
        </View>
        <View style={{ paddingBottom: 5, }}>
          <Text>Survey: </Text>
        </View>
        <TextInput
          style={styles.surveyInput}
          placeholder='Please tell us what you think...'
          multiline={true}
          numberOfLines={5}
          editable={true}
          autoFocus={true}
        />
        <TouchableOpacity 
          style={styles.submitButton}
          underlayColor='#949494'
          onPress={this._submitSurvey.bind(this)} >
            <Text style={{fontWeight: 'bold'}}>SUBMIT SURVEY</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  )
}

}

var styles = StyleSheet.create({
  container: {
    flex: 0.8,
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
  eventNameText: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  eventNameTextContainer: {

  },
  surveyInput: {
    height: 80,
    borderColor: 'gray',
    borderWidth: 1,
    marginRight: 5,
    paddingLeft: 5,
  }

})
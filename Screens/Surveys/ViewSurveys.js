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

export default class ViewSurvey extends Component {
  render() {
    
    const titleConfig = {
      title: 'Surveys',
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
            tintColor='orange'
          />
          <ScrollView style={styles.container}>
            <Text style={styles.surveyBody}>
                This is an example survey of someone who is reviewing a presentation.
            </Text>

            <View style={styles.surveyBodyContainer}>
                <Text style={styles.surveyBody}>
                    This is an example survey of someone who is reviewing a presentation.
                </Text>
            </View>

            <View style={styles.surveyBodyContainer}>
                <Text style={styles.surveyBody}>
                    This is an example survey of someone who is reviewing a presentation.
                </Text>
            </View>
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
    surveyBodyContainer: {
        paddingTop: 8,
    },
    surveyBody: {
      fontSize: 12,
      borderWidth: 1,
      height: 200,
      width: 363,
      paddingLeft: 8,
      paddingRight: 8
    }
})
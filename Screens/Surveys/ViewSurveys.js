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

var exampleArray = [];

export default class ViewSurvey extends Component {
  loadJsonData() {
    fetch('https://forums.swirlclinic.com:1337/api/surveys')
     .then((response) => response.json())
      .then((responseJson) => {
        exampleArray = responseJson;
        this.setState({
          isLoading: false
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  componentWillMount() {
      this.loadJsonData();
  }

state={
    isLoading: true
  };

  render() {

    if(this.state.isLoading) {
      return <View><Text>Loading...</Text></View>;
    }
    
    const titleConfig = {
      title: 'Surveys',
      color: 'black'
    }

    var mySurveys = [];
    for (let i = 0; i < exampleArray.length; i++) {
          if (exampleArray[i].type == 0) { //THis is an event
            mySurveys.push(<View style={styles.listTextContainer}>
                        <TouchableOpacity>
                          <Text style={styles.surveyBody}> 
                            Event: {exampleArray[i].name + "\n"}
                            Feedback: {exampleArray[i].description}
                          </Text>
                        </TouchableOpacity>
                      </View>);
          }
          else { //an activity
            mySurveys.push(<View style={styles.listTextContainer}>
                        <TouchableOpacity>
                          <Text style={styles.surveyBody}> 
                            Activity: {exampleArray[i].name + "\n"}
                            Feedback: {exampleArray[i].description}
                          </Text>
                        </TouchableOpacity>
                      </View>);
          }

          
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
            {mySurveys}
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
      height: 50,
      width: 363,
      paddingLeft: 8,
      paddingRight: 8
    }
})
import React, { Component } from 'react';

import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableHighlight,
    TouchableOpacity,
    Navigator,
    ScrollView
} from 'react-native';

import NavigationBar from 'react-native-navbar';
import BackButtonIcon from '../../Icons JS/BackButtonIcon';

export default class EventDetails extends Component {
    _goToSubmitSurvey = (theEvent) => {
        console.log('click!')
        this.props.navigator.push({ screen: 'SubmitSurvey' ,
    passProps: {
        event: theEvent,
        typeDetails: 0
      }
    })
};

    _EditEvent = (theEvent) => {
        console.log('click!')
        this.props.navigator.push({ screen: 'EditEvent' ,
    passProps: {
        event: theEvent
      }
    })
};

    render() {
        var rightButtonConfig = {
            title: ""
        }

        const titleConfig = {
            title: 'Event Details',
            color: "black"
        }

        if (this.props.role != "admin") {
            rightButtonConfig = {
                title: "Edit",
                color: "white",
                handler: this._EditEvent.bind(this, this.props.event)
            }
        }
        return(
            <View style={{ flex: 1, }}>
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
                        <Text style={styles.eventName}>{this.props.event.name}  </Text>
                    </View>
                    <View style={styles.eventTimeContainer}>
                        <Text style={styles.eventTime}>Date: {this.props.event.date}</Text>
                        <Text style={styles.eventTime}>Start Time: {this.props.event.starttime}</Text>
                        <Text style={styles.eventTime}>End Time: {this.props.event.endtime}</Text>
                        <Text style={styles.eventTime}>Host: {this.props.event.host}</Text>
                    </View>
                    <Text>Description:</Text>
                    <View style={styles.descriptionBodyContainer}>
                        <Text>{this.props.event.description}</Text>
                    </View>
                    <TouchableOpacity 
                    style={styles.surveyButton}
                    underlayColor='#949494'
                    onPress={this._goToSubmitSurvey.bind(this, this.props.event)} >
                        <Text style={{fontWeight: 'bold'}}>WRITE SURVEY</Text>
                    </TouchableOpacity>
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
    }
})
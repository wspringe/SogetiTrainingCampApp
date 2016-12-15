import React, { Component, PropTypes } from 'react'
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'

export default class ControlPanel extends Component {
  static propTypes = {
    closeDrawer: PropTypes.func.isRequired
  };

  render() {
    let {closeDrawer} = this.props
    return (
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Hello,</Text>
          <Text style={styles.headerText}></Text>
          <Text style={styles.headerText}>FirstName LastName</Text>
        </View>
        <View>
            <Text>Events</Text>
            <Text>Surveys</Text>
            <Text>Activities</Text>
            <Text>Notifications</Text>
          </View>
          <View>
            <Text>Event Management</Text>
            <Text>User Management</Text>
            <Text>User Groups</Text>
            <Text>Push Notifications</Text>
          </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    paddingTop: 20,
    backgroundColor: 'transparent',
  },
  header: {
    backgroundColor: 'orange',
    flex: .25,
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold'
  }
})
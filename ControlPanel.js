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
        <View style={styles.first}>
            <Text style={styles.menuFont}>Events</Text>
            <Text style={styles.menuFont}>Surveys</Text>
            <Text style={styles.menuFont}>Activities</Text>
            <Text style={styles.menuFont}>Notifications</Text>
          </View>
          <View style={styles.second}>
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
    backgroundColor: 'orange',
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
  },
  first: {
    padding: 20,
    alignItems: 'center',
  },
  second: {

  },
  menuFont: {
    color: 'white',
    fontSize: 20
  },
})
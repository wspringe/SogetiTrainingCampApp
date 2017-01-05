import React, {Component} from 'react';
import {
  Image,
  TouchableOpacity
} from 'react-native';

export default class MenuIcon extends Component {
  render() {
    return (
      <TouchableOpacity onPress={this.props.onPress}>
        <Image
          source={require('./Resources/back_arrow.png')}
          style={[{ width: 25, height: 25, }, this.props.style]}/>
      </TouchableOpacity>
    );
  }
}
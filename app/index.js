import React, { Component } from 'react';
import { View } from 'react-native';
import Random from './components/scenes/Random';

export default class Splashify extends Component {
  render() {
    return (
      <View>
        <Random />
      </View>
    );
  }
}
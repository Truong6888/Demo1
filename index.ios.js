import React, { Component } from 'react';
import {AppRegistry,StyleSheet,Text,View} from 'react-native';
import Bangtinh from './Components/Bangtinh.js';

export default class Demo1 extends Component {
  render() {
    return (
      <Bangtinh/>
      );
  }
}
AppRegistry.registerComponent('Demo1', () => Demo1);

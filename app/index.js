import React, { Component } from 'react';
import {
  NavigationProvider,
  StackNavigation,
} from '@exponent/ex-navigation';

import { View } from 'react-native';
// import Random from './scenes/Random';
import { appStyles } from './config/styles.js'
import { Router } from './navigation/routes.js'
import { NavigationLayout } from './navigation/routes.js'


/*
default navigation: vertical
*/
export default class Splashify extends Component {
  render() {
    return (
      <NavigationProvider router={Router}>
        <StackNavigation initialRoute={Router.getRoute('navigationLayout')} />
      </NavigationProvider>
    );
  }
}
/*
 */
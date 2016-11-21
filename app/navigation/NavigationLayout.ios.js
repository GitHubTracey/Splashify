import React, { Component, } from 'react'
import {
  StackNavigation,
  TabNavigation,
  TabNavigationItem as TabItem,
} from '@exponent/ex-navigation'

import { Router } from './routes.js'
import Octicons from 'react-native-vector-icons/Octicons'
const iconSize = 24


// function getColor(isSelected) {
//   return isSelected ? 'black' : '#999999';
// }

const renderIcon = (isSelected, iconName, size) => {
  return (
    <Octicons name={iconName} size={size} color={isSelected ? 'black' : '#999999'} />
  )
}
/*
renderIcon={(isSelected) => <Octicons name="ios-boat-outline" size={24} color={getColor(isSelected)} />}>
*/

// Treat the NavigationLayout route like any other route -- you may want to set
// it as the intiial route for a top-level StackNavigation
class NavigationLayout extends Component {

  static route = {
    navigationBar: {
      visible: false,
      backgroundColor: 'white'
    }
  }
  render() {
    return (
      <TabNavigation
        id="main"
        navigatorUID="main"
        initialTab="random">
        <TabItem
          id="recent"
          title="Recent"
          renderIcon={(isSelected) => renderIcon(isSelected, "clock", iconSize)}
          >
          <StackNavigation
            id="recent"
            navigatorUID="recent"
            initialRoute={Router.getRoute('recent')}
            />
        </TabItem>

        <TabItem
          id="faves"
          title="Faves"
          renderIcon={(isSelected) => renderIcon(isSelected, "star", iconSize)}
          >
          <StackNavigation
            id="faves"
            initialRoute={Router.getRoute('faves')}
            />
        </TabItem>

        <TabItem
          id="random"
          title="Random"
          renderIcon={(isSelected) => renderIcon(isSelected, "squirrel", iconSize)}
          >
          <StackNavigation
            id="random"
            initialRoute={Router.getRoute('random')}
            />
        </TabItem>

        <TabItem
          id="about"
          title="About"
          renderIcon={(isSelected) => renderIcon(isSelected, "info", iconSize)}
          >
          <StackNavigation
            id="about"
            initialRoute={Router.getRoute('about')}
            />
        </TabItem>
      </TabNavigation>
    );
  }
}

export default NavigationLayout;

/*

        <TabItem
          id="search"
          title="Search"
          renderIcon={renderIcon(isSelected, "search", iconSize) }
          >
          <StackNavigation
            id="search"
            initialRoute={Router.getRoute('search')}
          />
        </TabItem>
*/

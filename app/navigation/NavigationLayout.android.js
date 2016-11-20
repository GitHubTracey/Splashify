import React, { Component, } from 'react';
import { styles } from './styles.js'

import {
    StackNavigation,
    DrawerNavigation,
    DrawerNavigationItem,
} from '@exponent/ex-navigation';

import {
    View,
    Text,
} from 'react-native';
import { Router } from './routes.js'
import Octicons from 'react-native-vector-icons/Octicons'
const iconSize = 48;

// Treat the DrawerNavigationLayout route like any other route -- you may want to set
// it as the intiial route for a top-level StackNavigation
//Drawer
class NavigationLayout extends Component {
    static route = {
        navigationBar: {
            visible: false,
            backgroundColor: 'white',
            fontSize: 24,
        }
    };

    render() {
        return (
            <DrawerNavigation
                id='main'
                initialItem='about'
                drawerWidth={300}
                renderHeader={this._renderHeader}
                >
                <DrawerNavigationItem
                    id='recent'
                    selectedStyle={styles.selectedItemStyle}
                    renderTitle={isSelected => this._renderTitle('Recent', isSelected, "clock", iconSize)}
                    >
                    <StackNavigation
                        id='recent'
                        initialRoute={Router.getRoute('recent')}
                        />
                </DrawerNavigationItem>

                <DrawerNavigationItem
                    id='faves'
                    selectedStyle={styles.selectedItemStyle}
                    renderTitle={isSelected => this._renderTitle('Faves', isSelected, "star", iconSize)}
                    >
                    <StackNavigation
                        id='Faves'
                        initialRoute={Router.getRoute('faves')}
                        />
                </DrawerNavigationItem>

                <DrawerNavigationItem
                    id='random'
                    selectedStyle={styles.selectedItemStyle}
                    renderTitle={isSelected => this._renderTitle('Random', isSelected, "squirrel", iconSize)}
                    >
                    <StackNavigation
                        id='random'
                        initialRoute={Router.getRoute('random')}
                        />
                </DrawerNavigationItem>

                <DrawerNavigationItem
                    id='about'
                    selectedStyle={styles.selectedItemStyle}
                    renderTitle={isSelected => this._renderTitle('About', isSelected, "info", iconSize)}
                    >
                    <StackNavigation
                        id='about'
                        initialRoute={Router.getRoute('about')}
                        />
                </DrawerNavigationItem>
            </DrawerNavigation>
        );
    }

    _renderHeader = () => {
        return (
            <View style={styles.header}>
            </View>
        );
    };

    _renderTitle(text, isSelected, iconName, size) {
        return (
            <Text style={[styles.titleText, isSelected ? styles.selectedTitleText : {}]}>
                <Octicons name={iconName} size={size} color={isSelected ? 'black' : '#999999'} />{text}
            </Text>
        );
    };
}

export default NavigationLayout;

/*

            <DrawerNavigation
                id='main'
                initialItem='recent'
                drawerWidth={300}
                renderHeader={this._renderHeader}
                >
                <DrawerNavigationItem
                    id='recent'
                    selectedStyle={styles.selectedItemStyle}
                    renderTitle={isSelected => this._renderTitle('Recent', isSelected, "clock", iconSize)}
                    >
                    <StackNavigation
                        id='recent'
                        initialRoute={Router.getRoute('recent')}
                        />
                </DrawerNavigationItem>
            </DrawerNavigation>
            */
    /*
    
                    <DrawerNavigationItem
                        id='Faves'
                        selectedStyle={styles.selectedItemStyle}
                        renderTitle={isSelected => this._renderTitle('Faves', isSelected, "star", iconSize)}
                        >
                        <StackNavigation
                            id='Faves'
                            initialRoute={Router.getRoute('Faves')}
                            />
                    </DrawerNavigationItem>
    
                    <DrawerNavigationItem
                        id='random'
                        selectedStyle={styles.selectedItemStyle}
                        renderTitle={isSelected => this._renderTitle('Random', isSelected, "squirrel", iconSize)}
                        >
                        <StackNavigation
                            id='random'
                            initialRoute={Router.getRoute('random')}
                            />
                    </DrawerNavigationItem>
    
                    <DrawerNavigationItem
                        id='about'
                        selectedStyle={styles.selectedItemStyle}
                        renderTitle={isSelected => this._renderTitle('About', isSelected, "info", iconSize)}
                        >
                        <StackNavigation
                            id='about'
                            initialRoute={Router.getRoute('about')}
                            />
                    </DrawerNavigationItem>
    */
/*
<Octicons name={iconName} size={size} color={[isSelected ? styles.selectedTitleText : styles.notSelectedTitleText]} />
*/
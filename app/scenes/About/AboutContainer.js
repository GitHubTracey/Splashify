import React, { Component, PropTypes, } from 'react';
import { View, Text } from 'react-native';
import About from './About'
import Router from '../../navigation/routes.js'
import { _goToUser } from '../../lib/navigationHelpers.js'

class AboutContainer extends Component {

    static propTypes = {
        route: PropTypes.object.isRequired,
        navigation: PropTypes.object.isRequired,
        navigator: PropTypes.object.isRequired,
    };
    static route = {
        navigationBar: {
            title: 'About',
        }
    }
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View>
                <About />
            </View>
        );
    }
}

export default AboutContainer;
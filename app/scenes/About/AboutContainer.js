import React, { Component, } from 'react';
import { View, } from 'react-native';
import About from './About'

class AboutContainer extends Component {

    static route = {
        navigationBar: {
            title: 'About',
        }
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
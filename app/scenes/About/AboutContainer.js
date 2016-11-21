import React, { PropTypes, } from 'react';
import { View, } from 'react-native';
import About from './About'

class AboutContainer extends React.Component {

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
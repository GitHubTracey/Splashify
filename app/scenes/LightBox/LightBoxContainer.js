import React, { Component, PropTypes, } from 'react';
import { View, } from 'react-native';
import LightBox from './LightBox'

class LightBoxContainer extends Component {

    static propTypes = {
        photoBlob: React.PropTypes.object.isRequired,
        route: PropTypes.object.isRequired,
        navigation: PropTypes.object.isRequired,
        navigator: PropTypes.object.isRequired,
    };

    static route = {
        navigationBar: {
            visible: false,
        }
    }

    constructor(props) {
        super(props);
    }

    render() {
        console.log('LightBoxContainer photoBlob: ', this.props.photoBlob)
        return (
            <LightBox photoBlob={this.props.photoBlob} mainNav={this.props.navigation.getNavigator('mainStack')} />
        );
    }
}

export default LightBoxContainer;
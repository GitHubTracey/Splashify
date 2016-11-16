import React, { Component, PropTypes, } from 'react';
import { View, } from 'react-native';
import User from './User'

class UserContainer extends Component {

    static propTypes = {
        route: PropTypes.object.isRequired,
        navigation: PropTypes.object.isRequired,
        navigator: PropTypes.object.isRequired,
    };

    static route = {
        navigationBar: {
            title: 'User',
        }
    }

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <View>
                <User />
            </View>
        );
    }
}

export default UserContainer;
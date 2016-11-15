import React, { Component, } from 'react';
import { View, } from 'react-native';
import User from './User'

class UserContainer extends Component {

    static propTypes = {};

    static defaultProps = {};

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
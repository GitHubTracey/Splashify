import React, { Component, PropTypes, } from 'react';
import { View, } from 'react-native';
import User from './User'

class UserContainer extends Component {

    static propTypes = {
        name: React.PropTypes.string.isRequired,
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
    }

    render(props) {
        return (
            <View>
                <User name={this.props.name} />
            </View>
        );
    }
}

export default UserContainer;
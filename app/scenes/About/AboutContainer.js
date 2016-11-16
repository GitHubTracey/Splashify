import React, { Component, PropTypes, } from 'react';
import { View, Text } from 'react-native';
import About from './About'
import Router from '../../navigation/routes.js'

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

    _goToUser() {
        console.log(this)
        this.props.navigator.push(Router.getRoute('user', {name: 'this guy'}));
    }
    constructor(props) {
        super(props)
        this._goToUser = this._goToUser.bind(this)
    }

    render() {
        return (
            <View>
                <About goToUser={this._goToUser}/>
            </View>
        );
    }
}

export const Route = AboutContainer.route = {
        navigationBar: {
            title: 'About',
        }
    }

export default AboutContainer;
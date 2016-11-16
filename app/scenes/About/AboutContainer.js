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
        this.state = {
            name: 'this guy',
        }
    }
    componentWillMount() {
        this._goToUser = _goToUser(this.props.navigator, this.state.name).bind(this)

        console.log(this._goToUser)
    }
    // _goToUser() {
    //     console.log(this)
    //     this.props.navigator.push(Router.getRoute('user', {name: this.state.name}));
    // }

    render() {
        return (
            <View>
                <About goToUser={this._goToUser} />
            </View>
        );
    }
}

export default AboutContainer;
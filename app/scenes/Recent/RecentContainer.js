import React, { Component, } from 'react';
import { View, } from 'react-native';
import Recent from './Recent'

class RecentContainer extends Component {

    static propTypes = {};

    static defaultProps = {};

    static route = {
        navigationBar: {
            title: 'Recent',
        }
    }

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <View>
                <Recent />
            </View>
        );
    }
}

export default RecentContainer;
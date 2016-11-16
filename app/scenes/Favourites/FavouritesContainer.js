import React, { Component, PropTypes, } from 'react';
import { View, } from 'react-native';
import Favourites from './Favourites'

class FavouritesContainer extends Component {

    static propTypes = {
        route: PropTypes.object.isRequired,
        navigation: PropTypes.object.isRequired,
        navigator: PropTypes.object.isRequired,
    };
    static route = {
        navigationBar: {
            title: 'Favourites',
        }
    }

    render() {
        return (
            <View>
                <Favourites />
            </View>
        );
    }
}

export default FavouritesContainer;
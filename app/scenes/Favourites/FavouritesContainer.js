import React, { Component, } from 'react';
import { View, } from 'react-native';
import Favourites from './Favourites'

class FavouritesContainer extends Component {

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
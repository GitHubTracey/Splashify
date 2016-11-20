import React, { Component, PropTypes, } from 'react';
import { View, ListView, } from 'react-native';
import Favourites from './Favourites'
import Loader from '../../components/Loader'
import { getFavedPhotos } from '../../lib/databaseHelpers.js'
import { toJson } from 'unsplash-js/native'
import { unsplash } from '../../config/apikeys.js'
import { getFullPhotoData } from '../../lib/unsplashHelpers.js'
import realm from '../../config/models.js'

class FavouritesContainer extends Component {

    static propTypes = {
        route: PropTypes.object.isRequired,
        navigation: PropTypes.object.isRequired,
        navigator: PropTypes.object.isRequired,
    };
    
    static route = {
        navigationBar: {
            title: 'Faves',
        }
    }

    constructor(props) {
        super(props);

        this.ds =
            new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

        this.state = {
            dataSource: this.ds,
            isLoading: true,
        };

        // console.log('realm.objects(Fave)', realm.objects('Fave'))
        // Observe Collection Notifications
        // realm.objects('Fave').addListener((favourites, changes) => {
        //     console.log('change!', favourites, changes)
        //     // Update UI in response to inserted objects
        //     // changes.insertions.forEach((index) => {
        //     //     let insertedFavourite = favourites[index];
        //     //     return true
        //     // });

        //     // Update UI in response to deleted objects
        //     // changes.deletions.forEach((index) => {
        //         // Deleted objects cannot be accessed directly
        //         // Support for accessing deleted objects coming soon...
        //         //...
        //     //     return false
        //     // });
        // });
    }

    getFavedPhotosJson() {
        // getfaved Photos (id/created) from realm databaseHelpers
        // 
        //then return the results
        getFullPhotoData(getFavedPhotos())
            .then(fullJsonResults => {
                this.setState({
                    dataSource: this.ds.cloneWithRows(fullJsonResults)
                })
            })
            .catch(err => console.log(`error fetching photos JSON: ${err}`))
    }
    componentDidMount() {
        this.getFavedPhotosJson()
    }
    componentDidUpdate() {
        if (this.state.dataSource && this.state.isLoading) {
            this.setState({
                isLoading: false,
            });
        }
    }

    render() {
        if (this.state.isLoading) {
            return (
                <Loader />
            );
        } else {
            return (
                <Favourites photoBlob={this.state.dataSource} user={this.state.user} nav={this.props.navigator} mainNav={this.props.navigation.getNavigator('mainStack')} />
            );
        }
    }
}

/*
import realm from '../../config/models.js'
for constructor of Faves:

        // console.log('realm.objects(Fave)', realm.objects('Fave'))
        // Observe Collection Notifications
        // realm.objects('Fave').addListener((favourites, changes) => {
        //     console.log('change!', favourites, changes)
        //     // Update UI in response to inserted objects
        //     // changes.insertions.forEach((index) => {
        //     //     let insertedFavourite = favourites[index];
        //     //     return true
        //     // });

        //     // Update UI in response to deleted objects
        //     // changes.deletions.forEach((index) => {
        //         // Deleted objects cannot be accessed directly
        //         // Support for accessing deleted objects coming soon...
        //         //...
        //     //     return false
        //     // });
        // });
*/
export default FavouritesContainer;
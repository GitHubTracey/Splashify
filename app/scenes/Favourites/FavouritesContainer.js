import React, { Component, PropTypes, } from 'react';
import { View, ListView, Text, } from 'react-native';
import Favourites from './Favourites'
import Loader from '../../components/Loader'
import { getFavedPhotos } from '../../lib/databaseHelpers.js'
import { toJson } from 'unsplash-js/native'
import { unsplash } from '../../config/apikeys.js'
import { getFullPhotoData } from '../../lib/unsplashHelpers.js'
import realm, {Faves} from '../../config/models.js'
import {styles} from './styles.js'

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

        realm.addListener('change', (changes) => {
            console.log("Realm Changed...!");
            console.log(changes)
            this.getFavedPhotosJson()
        });

        // realm.objects('Faves').addListener((collection, changes) => {
        //     changes.insertions.forEach((index) => {
        //     console.log("Fave added!");
        //         this.setState({
        //             dataSource: this.ds.cloneWithRows(fullJsonResults)
        //         })
        //     });
        //     changes.deletions.forEach((index) => {
        //         console.log("Fave removed")
        //         this.setState({
        //             dataSource: this.ds.cloneWithRows(fullJsonResults)
        //         })
        //     });
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
    componentWillUnmount() {
        realm.removeListener()
        //realm.objects('Fave').removeListener()
    }

    render() {
        if (this.state.isLoading) {
            return (
                <Loader />
            );
        } else {
            if( this.state.dataSource.length > 0 ) {
                return (
                    <Favourites photoBlob={this.state.dataSource} user={this.state.user} nav={this.props.navigator} mainNav={this.props.navigation.getNavigator('mainStack')} />
                );
            } else {
                return (
                    <View style={styles.container}>
                        <Text style={styles.text}>You haven't faved any photos yet.</Text>
                    </View>
                )
            }
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
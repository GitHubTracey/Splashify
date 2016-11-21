import React, { PropTypes, } from 'react'
import { ListView } from 'react-native'
import Faves from './Faves'
import Loader from '../../components/Loader'
import { getFavedPhotos } from '../../lib/databaseHelpers.js'
import { getFullPhotoData } from '../../lib/unsplashHelpers.js'
import realm from '../../config/models.js'

class FavesContainer extends React.Component {

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
            new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })

        this.state = {
            dataSource: this.ds,
            isLoading: true,
        };

        realm.addListener('change', () => {
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
            .catch(err => alert(`error fetching photos JSON: ${err}`))
    }
    componentDidMount() {
        this.getFavedPhotosJson()
    }
    componentDidUpdate() {
        if (this.state.dataSource && this.state.isLoading) {
            this.setState({
                isLoading: false,
            })
        }
    }
    componentWillUnmount() {
        realm.removeListener()
        //realm.objects('Fave').removeListener()
    }

    render() {
        //console.log('faves container: ', this.state.dataSource)
        if (this.state.isLoading) {
            return (
                <Loader />
            );
        } else {
           // if( this.state.dataSource.length > 0 ) {
                return (
                    <Faves photoBlob={this.state.dataSource} user={this.state.user} nav={this.props.navigator} mainNav={this.props.navigation.getNavigator('mainStack')} />
                )
            // } else {
            //     return (
            //         <View style={styles.container}>
            //             <Text style={styles.text}>You haven't faved any photos yet.</Text>
            //         </View>
            //     )
            // }
        }
    }
}

export default FavesContainer;
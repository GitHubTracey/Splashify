import React, { PropTypes, } from 'react'
import { ListView, } from 'react-native'
import Recent from './Recent'
import { toJson } from 'unsplash-js/native'
import { unsplash } from '../../config/apikeys.js'
import Loader from '../../components/Loader'
import {getFullPhotoData} from '../../lib/unsplashHelpers.js'


class RecentContainer extends React.Component {

    static propTypes = {
        route: PropTypes.object.isRequired,
        navigation: PropTypes.object.isRequired,
        navigator: PropTypes.object.isRequired,
    }

    static route = {
        navigationBar: {
            title: 'Recent',
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
    }

    getRecentPhotosJson() {
        unsplash.photos.listPhotos(1, 5, 'latest')
        .then(toJson)
        .then(json => {
            //your code
           return getFullPhotoData(json)
        })
        .then(fullJsonResults => {
            this.setState({
                dataSource : this.ds.cloneWithRows(fullJsonResults)
            })
        })
        .catch(err => alert(`error fetching photos JSON: ${err}`))
    }
    componentDidMount() {
        this.getRecentPhotosJson()
    }
    componentDidUpdate() {
        if (this.state.dataSource && this.state.isLoading) {
            this.setState({ isLoading: false, });
        }
    }
    render() {
        if (this.state.isLoading) {
            return (
                <Loader />
            )
        } else {
            // console.log('************RecentContainer**********')
            // console.log(this.state.dataSource._dataBlob.s1)
            return (
                <Recent recentPhotoBlob={this.state.dataSource} nav={this.props.navigator} mainNav={this.props.navigation.getNavigator('mainStack')} />
            )
        }
    }
}
/*
************  will need to use time ago libray to say things like (1 hr ago... 5 days ago... etc) ***********
*/
export default RecentContainer
import React, { Component, PropTypes, } from 'react';
import { View, ListView } from 'react-native';
import User from './User'
import { toJson } from 'unsplash-js/native'
import { unsplash } from '../../config/apikeys.js'
import Loader from '../../components/Loader'
import { getFullPhotoData } from '../../lib/unsplashHelpers.js'


class UserContainer extends Component {

    static propTypes = {
        username: React.PropTypes.string.isRequired,
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

        this.ds =
            new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

        this.state = {
            dataSource: this.ds,
            isLoading: true,
            user: [],
        };
    }

    getUserPhotosJson() {
        unsplash.users.photos(this.props.username, 1, 4, 'latest')
            .then(toJson)
            .then(json => {
                return getFullPhotoData(json)
            })
            .then(fullJsonResults => {
                this.setState({
                    dataSource: this.ds.cloneWithRows(fullJsonResults)
                })
            })
            .catch(err => console.log(`error fetching photos JSON: ${err}`))
    }
    componentDidMount() {
        this.getUserPhotosJson()
    }
    componentDidUpdate() {
        if (this.state.dataSource && this.state.isLoading) {
            this.setState({
                isLoading: false,
                user: this.state.dataSource._dataBlob.s1[0].user
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
                <User userPhotoBlob={this.state.dataSource} user={this.state.user} nav={this.props.navigator} mainNav={this.props.navigation.getNavigator('mainStack')} />
            );
        }
    }
}

export default UserContainer;
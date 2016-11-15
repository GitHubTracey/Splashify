import React, { Component } from 'react';
import {
    Image,
    Text,
    View,
    ActivityIndicator,
} from 'react-native';
import { toJson } from 'unsplash-js/native'
import { unsplash } from '../../config/apikeys.js'
import { randomStyles } from './styles.js'
import Random from './Random';
import UserAvatar from '../../components/UserAvatar'

class RandomContainer extends Component {

    static route = {
        navigationBar: {
            title: 'Random',
        }
    }
    constructor(props) {
        super(props);

        this.state = {
            isLoading: true,
            randomPhoto: {}
        }
    }
    componentWillMount() {
        unsplash.photos.getRandomPhoto()
            .then(toJson)
            .then(json => {
                this.setState({ randomPhoto: json })
            })
            .catch(error => console.log(`Error fetching JSON: ${error}`));
    }
    componentDidUpdate() {
        if (this.state.randomPhoto && this.state.isLoading) {
            this.setState({ isLoading: false, });
        }
    }

    render() {
        if (this.state.isLoading) {
            return (
                <ActivityIndicator animating={true} size="small" color="black" />
            );
        } else {
            console.log(this.state.randomPhoto.user)
            return (
                <View>
                    <Random randomPhoto={this.state.randomPhoto} />
                    <UserAvatar user={this.state.randomPhoto.user} />
                </View>
            )
        }
    }
}
/*
 */
export default RandomContainer;
import React, { Component } from 'react';
import {
    Image,
    Text,
    View,
    ActivityIndicator,
} from 'react-native';
import { toJson } from 'unsplash-js/native'
import { unsplash } from '../../../config/apikeys.js'
import { randomStyles } from './styles.js'
import Random from './Random';

class RandomContainer extends Component {

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
            console.log(this.state.randomPhoto)
            console.log(this.state.randomPhoto.user.first_name)
            console.log(this.state.randomPhoto.user.last_name)
            console.log(this.state.randomPhoto.user.profile_image.small)
            return (
                <Random randomPhoto={this.state.randomPhoto } />
            )
        }
    }
}

export default RandomContainer;
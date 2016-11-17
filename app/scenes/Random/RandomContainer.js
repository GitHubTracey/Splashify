import React, { Component, PropTypes, } from 'react';
import { toJson } from 'unsplash-js/native'
import { unsplash } from '../../config/apikeys.js'
import { randomStyles } from './styles.js'
import Random from './Random';
import Loader from '../../components/Loader'

class RandomContainer extends Component {

    static propTypes = {
        route: PropTypes.object.isRequired,
        navigation: PropTypes.object.isRequired,
        navigator: PropTypes.object.isRequired,
    };
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
        console.log('RandomContainer, this: ', this)
        if (this.state.isLoading) {
            return (
                <Loader />
            );
        } else {
            console.log('RandomContainer, image loaded: ', this.state.randomPhoto)
            return (
                    <Random randomPhoto={this.state.randomPhoto} nav={this.props.navigator} />
            )
        }
    }
}

export default RandomContainer;
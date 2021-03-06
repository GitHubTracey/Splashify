import React, { PropTypes, } from 'react'
import { toJson } from 'unsplash-js/native'
import { unsplash } from '../../config/apikeys.js'
import Random from './Random'
import Loader from '../../components/Loader'

class RandomContainer extends React.Component {

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
            .catch(error => alert(`Error fetching JSON: ${error}`))
    }
    componentDidUpdate() {
        if (this.state.randomPhoto && this.state.isLoading) {
            this.setState({ isLoading: false, })
        }
    }

    render() {
        if (this.state.isLoading) {
            return (
                <Loader />
            )
        } else {
            return (
                    <Random randomPhoto={this.state.randomPhoto} nav={this.props.navigator} mainNav={this.props.navigation.getNavigator('mainStack')} />
            )
        }
    }
}

export default RandomContainer
import React, { Component, PropTypes, } from 'react';
import { View, } from 'react-native';
import LightBox from './LightBox'
import { isPhotoFaved, updatePhotoFave } from '../../lib/databaseHelpers.js'

class LightBoxContainer extends Component {

    static propTypes = {
        photoBlob: React.PropTypes.object.isRequired,
        route: PropTypes.object.isRequired,
        navigation: PropTypes.object.isRequired,
        navigator: PropTypes.object.isRequired,
    };

    static route = {
        navigationBar: {
            visible: false,
        }
    }

    constructor(props) {
        super(props);

        this.state = {
            isFaved: false,
        }

    }
    componentWillMount() {
        if (this.state.randomPhoto)
            this.setState({ isFaved: isPhotoFaved(this.state.randomPhoto.id) })
    }
    componentDidUpdate() {
        if (this.state.randomPhoto) {
            this.setState({ isFaved: isPhotoFaved(this.state.randomPhoto.id) })
        }
    }

    render() {
        console.log('LightBoxContainer photoBlob: ', this.props.photoBlob)
        return (
            <LightBox photoBlob={this.props.photoBlob} isFaved={this.state.isFaved} mainNav={this.props.navigation.getNavigator('mainStack')} />
        );
    }
}

export default LightBoxContainer;
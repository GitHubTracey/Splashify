import React, { Component, PropTypes, } from 'react'
import { View, } from 'react-native'
import Lightbox from './Lightbox'
import { isPhotoFaved, updatePhotoFave, } from '../../lib/databaseHelpers.js'

class LightboxContainer extends Component {

    static propTypes = {
        photoBlob: React.PropTypes.object.isRequired,
        route: PropTypes.object.isRequired,
        navigation: PropTypes.object.isRequired,
        navigator: PropTypes.object.isRequired,
    }

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
    updateFaved() {
        console.log('updateFaved from: ', this.state.isFaved)
        updatePhotoFave(this.props.photoBlob.id, isPhotoFaved(this.props.photoBlob.id))
        this.setState({
            isFaved: isPhotoFaved(this.props.photoBlob.id)
        })
        console.log('updateFaved to: ', this.state.isFaved)
    }

    componentWillMount() {
        if (this.props.photoBlob)
            this.setState({ isFaved: isPhotoFaved(this.props.photoBlob.id) })
    }
    // componentDidUpdate() {
    //     if (this.props.photoBlob) {
    //         updatePhotoFave(this.props.photoBlob.id, this.state.isFaved)
    //         this.setState({ isFaved: isPhotoFaved(this.props.photoBlob.id) })
    //     }
    // }

    render() {
        console.log('LightboxContainer photoBlob: ', this.props.photoBlob)
        return (
            <Lightbox photoBlob={this.props.photoBlob} updateFaved={this.updateFaved.bind(this)} isFaved={this.state.isFaved} mainNav={this.props.navigation.getNavigator('mainStack')} />
        );
    }
}

export default LightboxContainer;
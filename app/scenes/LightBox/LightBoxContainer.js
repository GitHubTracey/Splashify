import React, { PropTypes, } from 'react'
import Lightbox from './Lightbox'
import { isPhotoFaved, updatePhotoFave, } from '../../lib/databaseHelpers.js'

class LightboxContainer extends React.Component {

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
        updatePhotoFave(this.props.photoBlob.id, isPhotoFaved(this.props.photoBlob.id))
        this.setState({
            isFaved: isPhotoFaved(this.props.photoBlob.id)
        })
    }

    componentWillMount() {
        if (this.props.photoBlob)
            this.setState({ isFaved: isPhotoFaved(this.props.photoBlob.id) })
    }

    render() {
        //console.log('LightboxContainer photoBlob: ', this.props.photoBlob)
        return (
            <Lightbox photoBlob={this.props.photoBlob} updateFaved={this.updateFaved.bind(this)} isFaved={this.state.isFaved} nav={this.props.navigator} mainNav={this.props.navigation.getNavigator('mainStack')} />
        );
    }
}

export default LightboxContainer;
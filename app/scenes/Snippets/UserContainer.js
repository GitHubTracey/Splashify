import React, { Component, } from 'react';
import { View, } from 'react-native';

class SnippetContainer extends Component {

   static propTypes = {};

   static defaultProps = {};

    static route = {
        navigationBar: {
            title: 'Snippet',
        }
    }

   constructor(props) {
      super(props);
      this.state = {};
   }

   render() {
      return (
         <View>

         </View>
      );
   }
}

export default SnippetContainer;
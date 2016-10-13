/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
} from 'react-native';


export default class lilDictionary extends Component {
      
  render() {
    return (
       <View style = { styles.parent } >
            <Text>
               Input your vocab: 
            </Text>

            <TextInput style = { styles.input } />
           
        </View>
    );
  }
}

const styles = StyleSheet.create({
 
   
    parent: {

        flex:1,
        justifyContent: 'center',
        padding: 16
    },
 
   
   

    input: {

      
    },
});


AppRegistry.registerComponent('lilDictionary', () => lilDictionary);
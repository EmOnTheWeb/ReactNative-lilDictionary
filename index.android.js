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
                Type something in English:
            </Text>

            <TextInput/>
          

            <Text style = { styles.germanLabel } >
                Its German equivalent is:
            </Text>

            <Text style = { styles.germanWord } >                
            </Text>
           
        </View>
    );
  }
}

const styles = StyleSheet.create({
 
   
    parent: {
        padding: 16
    },
 
   
    germanLabel: {
        marginTop: 20,
        fontWeight: 'bold'
    },
 
  
    germanWord: {
        marginTop: 15,
        fontSize: 30,
        fontStyle: 'italic'
    },
});


AppRegistry.registerComponent('lilDictionary', () => lilDictionary);
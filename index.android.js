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

var dictionary = require('./dictionary.json');


export default class lilDictionary extends Component {
     
  render() {
    return (
       <View style = { styles.parent } >
            <Text style = { styles.inputText }>
               Input your vocab: 
            </Text>

            <TextInput style = { styles.input } value= {this.state.input} 
            onChangeText={(e) => this.setState({input: e})} />

            <Text style = { styles.inputText }>
               Definition: 
            </Text>

            <Text style = { styles.outputText } onPress={() => this._showMeaning()} >
               { this.state.output }
            </Text>
           
        </View>
    );
  }

    constructor (props) {
      super(props)
      this.state = {
        input: 'enter word here',
        output: '',
      }; 
   }

  _showMeaning() {
  
    var meaning = this.state.input in dictionary ? 
                    dictionary[this.state.input] : 
                    "Not Found";

          alert(this.state.input
          ); 
 
    this.setState({
         output: meaning 
    });
  }








}

const styles = StyleSheet.create({

    parent: {

        flex:1,
        justifyContent: 'center',
        padding: 16
    },
    
    inputText: {

        fontSize: 18
       
    },
  
    input: {

        marginBottom: 20

    },

    outputText: {

        backgroundColor: 'red',
        height: 30
    }
});


AppRegistry.registerComponent('lilDictionary', () => lilDictionary);
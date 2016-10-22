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

            <TextInput style = { styles.input } 
                       value= {this.state.input} 
                       onChangeText={(e) => this.setState({input: e})} 
                       onSubmitEditing = {() => this._showMeaning()} />

            <View style = {styles.container} >
               <Text style = { styles.definition }> Definition: </Text>   
               <Text style = { styles.saveButton }>Button</Text>
            </View>
            

            <Text style = { styles.outputText } >
               { this.state.output }
            </Text>
               
        </View>
    );
  }

  constructor (props) {
      super(props)
      this.state = {
        input: '',
        output: '',
        saved: ''
      }; 
   }

  _showMeaning() {

    var uppercaseVocab = this.state.input.toString().toUpperCase();  
    
    var meaning = uppercaseVocab in dictionary ? 
                    dictionary[uppercaseVocab] : 
                    "Not Found";
 
    this.setState({
         output: meaning 
    });
  }

  _saveVocab(vocab, definition) {

      AsyncStorage.setItem(vocab, definition); 
      this.setState({saved: 'definition of' + vocab + 'has been saved'}); 



  }



}

const styles = StyleSheet.create({

    parent: {

        flex:1,
        justifyContent: 'center',
        padding: 16

    },

    container: {

        flexDirection: 'row',
        justifyContent: 'space-between'

    },
    
    inputText: {

        fontSize: 18    
    },

    definition: {

        fontSize: 18
    },
  
    input: {

        marginBottom: 20

    },

    outputText: {

      paddingTop: 16
   
    },

    button: {

      alignSelf: 'flex-start'
      
    }
});


AppRegistry.registerComponent('lilDictionary', () => lilDictionary);
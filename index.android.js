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
  AsyncStorage,
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
                       onChangeText={(e) => this.setState({input: e, save: 'Save', warning: ''})} 
                       onSubmitEditing = {() => this._showMeaning()} />
            <Text style = {styles.warning} > { this.state.warning } </Text>

            <View style = {styles.container} >
               <Text style = { styles.definition }> Definition: </Text>   
               <Text style = { styles.saveButton } 
                     onPress = { () => this._saveVocab() }>
                  { this.state.save }
               </Text>
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
        save: 'Save',
        warning: ''
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

  _saveVocab() {

      var vocab = this.state.input.toString(); 
      var definition = this.state.output.toString(); 

        if(definition.toLowerCase() !== '' && definition.toLowerCase() !== 'not found') {

          AsyncStorage.setItem(vocab, definition);
          this.setState({save: 'Saved!'}); 
          AsyncStorage.getAllKeys().then(ks => {

            console.log(ks); 
          }); 
        }
        else {
          this.setState({warning:'This is not a vocab'}); 
        }
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

    warning: {

        fontSize:14,
        color: 'red',
        marginBottom: 20

    },

    outputText: {

      paddingTop: 16
   
    },

    saveButton: {

      backgroundColor: 'gray',
      borderRadius: 10,
      padding:5,
      color:'white'
    }
});


AppRegistry.registerComponent('lilDictionary', () => lilDictionary);
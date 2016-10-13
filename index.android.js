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
  View
} from 'react-native';

var Dictionary = React.createClass({
 
      render: function() {
        var layout =
            <React.View style = { styles.parent } >
     
                <React.Text>
                    Type something in English:
                </React.Text>
     
                <React.TextInput />
     
                <React.Text style = { styles.germanLabel } >
                    Its German equivalent is:
                </React.Text>
     
                <React.Text style = { styles.germanWord } >                
                </React.Text>
               
            </React.View>
        ;
        return layout;
    }, 
});

AppRegistry.registerComponent('lilDictionary', () => Dictionary);
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image
} from 'react-native';


const App: () => React$Node = () => {
  return (

  <View style={styles.Container}>
    <Image
    style={{width:200,height: 200 }} 
    source={{uri: 'http://demos.xpertsgroup.net/cordify/images/logo.png'}} />
      
    <Text style={styles.sectionTitle}>
      Cordify
    </Text>
    <Text style={styles.sectionDescription}>
      Call On Record
    </Text>
  </View>
        
)
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#44cbe3"
  },
  sectionTitle: {
    fontSize: 50,
    textAlign: "center",
    color: "white"
  },
  sectionDescription: {
    fontSize: 14,
    textAlign: "right",
    color: "white"
  },
  sectionImage: {
    fontSize: 14,
    textAlign: "right",
    color: "white"
  },

});

export default App;

'use strict';


import React, { Component } from 'react';
import {
  AppRegistry,
  Image,
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity,
  ScrollView,
  View
} from 'react-native';

class Login extends React.Component {
  render() {
    return (
      <ScrollView
        contentContainerStyle={{flex:1}}
        keyboardDismissMode='on-drag'
        keyboardShouldPersistTaps={false}
        >
        <View style={styles.container}>
          <Image
			      //  source="{require('.image/app_icon.png')}
            source={{uri: 'https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png'}}
            style={styles.logo}/>
          <TextInput
            ref={(username) => this.username = username}
            onFocus={() => this.username.focus()}
            style={styles.input}
            placeholder='username'/>
          <TextInput
            ref={(password) => this.password = password}
            onFocus={() => this.password.focus()}
            style={styles.input}
            placeholder='password'
            password={true}/>
            <TouchableOpacity
            style={styles.btn}
            onPress={() => console.log('press me')}
            >
            <Text style={styles.text}>login</Text>
          </TouchableOpacity>
          </View>
      </ScrollView>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 10,
    paddingRight: 10,
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  logo: {
    width: 160,
    height: 160,
    marginTop: 100
  },
  input: {
    marginTop: 10,
    height: 40,
	  width:200,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'lightblue'
  },
  text: {
    fontWeight: 'bold',
    fontSize: 14,
    color: '#FFF'
  },
  btn: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#3333FF',
    height: 40,
    borderRadius: 5,
	width:100,
    marginTop: 10
  }
});

AppRegistry.registerComponent('login', () => Login);

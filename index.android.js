/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, { Component } from 'react';
import { AppRegistry } from 'react-native';

var UniformView = require('./navigator_uniform.js');
var Login = require('./login.js');
AppRegistry.registerComponent('AwesomeProject', () => Login);
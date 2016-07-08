'use strict';

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';

var SimpleView = require('./navigator_simple.js');
var UniformView = require('./navigator_uniform.js');

// 可以选择添加页面
AppRegistry.registerComponent('AwesomeProject', () => UniformView);
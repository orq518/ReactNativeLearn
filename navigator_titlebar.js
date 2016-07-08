/**
 * Created by wangchenlong on 16/4/17.
 */
'use strict'; // 启用严格模式

import React from "react";
import {StyleSheet, Text, View, TouchableOpacity} from "react-native";
// 导航栏的Mapper
var NavigationBarRouteMapper = {
  // 左键LeftButton: index属性表示当前页面的索引, 通过判断index属性,
  // 获知栈内是否有其他页面, 判断后退按钮是否显示. 点击调用navigator.pop()出栈.
  LeftButton(route, navigator, index, navState) {
    if (index > 0) {
      return (
        <View style={styles.navContainer}>
          <TouchableOpacity
            underlayColor='transparent'
            onPress={() => {if (index > 0) {navigator.pop()}}}>
            <Text style={styles.leftNavButtonText}>
              后退
            </Text>
          </TouchableOpacity>
        </View>
      );
    } else {
      return null;
    }
  },
  // 右键
  RightButton(route, navigator, index, navState) {
    if (route.onPress)
      return (
        <View style={styles.navContainer}>
          <TouchableOpacity
            onPress={() => route.onPress()}>
            <Text style={styles.rightNavButtonText}>
              {route.rightText || '右键'}
            </Text>
          </TouchableOpacity>
        </View>
      );
  },
  // 标题
  Title(route, navigator, index, navState) {
    return (
      <View style={styles.navContainer}>
        <Text style={styles.title}>
          标题
        </Text>
      </View>
    );
  }
};
var styles = StyleSheet.create({
  // 页面框架
  container: {
    flex: 4,
    marginTop: 100,
    flexDirection: 'column'
  },
  // 导航栏
  navContainer: {
    backgroundColor: '#666666',
    alignItems: 'center',
    justifyContent: 'center', // 内容居中显示
    paddingTop: 20,
    paddingBottom: 10,
  },
  // 导航栏文字
  headText: {
    color: '#ffffff',
    alignItems: 'center',
    fontSize: 22
  },
  // 按钮
  button: {
    height: 60,
    marginTop: 10,
    marginLeft:20,
    marginRight:20,
    justifyContent: 'center', // 内容居中显示
    backgroundColor: '#551049',
    alignItems: 'center'
  },
  // 按钮文字
  buttonText: {
    fontSize: 18,
    color: '#ffffff'
  },
  // 左面导航按钮
  leftNavButtonText: {
    color: '#ffffff',
    fontSize: 18,
    marginLeft: 13
  },
  // 右面导航按钮
  rightNavButtonText: {
    color: '#ffffff',
    fontSize: 18,
    marginRight: 13
  },
  // 标题
  title: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    flex: 1                //Step 3
  }
});
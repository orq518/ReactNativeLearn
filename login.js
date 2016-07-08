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
  Navigator,
  View
} from 'react-native';
import UniformView from './navigator_uniform';
import NetUitl from './util/NetUitl';
class LoginView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: null,
            age: null,
        }
    }
    _openPage() {
        var navigatorOrigin=this.props.navigator;

        let url = "http://api.map.baidu.com/telematics/v3/weather?location=北京&output=json&ak=W69oaDTCfuGwzNwmtVvgWfGH";
        let data={'username':'123','password':'123456','token':'HSHSIHIFAUINNSNAFKSKJFNKFKFNFNFNK'};
        NetUitl.postJson(url,data,function (set){
            // alert("json對象 ："+set.date);
            // alert("error ："+set.error);
            // alert("status ："+set.status);
            // alert("json結果 ："+set.results);
            // console.log("结果："+set.results);
            if(set.status=="success"){
                alert("登录成功");
                //注意這個地方的跳轉
                // const { navigator } = this.props;
                // this.props.navigator.push({
                //     title: 'UniformView',
                //     component: UniformView,
                // })
                navigatorOrigin.push({
                    title: 'UniformView',
                    component: UniformView,
                })
            }else{
                alert("登录失败");
            }
});

    }
    // login(){
    //     let url = Global.LOGIN;
    //     let map = new Map()
    //     map.set('username',"18600565151");
    //     map.set('password',"111111");
    //     map.set('orgid','0010000');
    //     let sx = JsonUitl.mapToJson(Util.tokenAndKo(map));
    //     NetUitl.postFrom(url,sx,function (set){
    //         switch (set.retCode) {
    //             case "0000":
    //                 alert("登录成功");
    //                 break;
    //             case "0001":
    //                 alert("登录失败");
    //                 break;
    //             default:
    //         }
    //     });
    // }
    render() {
        return (
            <ScrollView
                contentContainerStyle={{flex:1}}
                keyboardDismissMode='on-drag'
                keyboardShouldPersistTaps={false}
            >
                <View style={styles.container}>
                    <Image
                         source={require('image!app_icon')}
                        // source={{uri: 'http://f.hiphotos.baidu.com/baike/w%3D268%3Bg%3D0/sign=3c4e049cc1cec3fd8b3ea073eeb3b302/6159252dd42a2834b1c7cf5b59b5c9ea15cebf79.jpg'}}
                        style={styles.logo}/>
                    <TextInput
                        ref={(username) => this.username = username}
                        onFocus={() => this.username.focus()}
                        style={styles.input}
                        placeholder='请输入用户名'/>
                    <TextInput
                        ref={(password) => this.password = password}
                        onFocus={() => this.password.focus()}
                        style={styles.input}
                        placeholder='请输入密码'
                        password={true}/>
                    <TouchableOpacity
                        style={styles.btn}
                        onPress={this._openPage.bind(this)}
                    >
                        <Text style={styles.text}>login</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        );
    }
}

class Login extends React.Component {
    /**
     * 使用动态页面加载
     * @param route 路由
     * @param navigator 导航器
     * @returns {XML} 页面
     */
    renderScene(route, navigator) {
        return <route.component navigator={navigator}  {...route.passProps} />;
    }
    configureScene(route, routeStack) {
        if (route.type == 'Modal') {
            return Navigator.SceneConfigs.FloatFromBottom;
        }
        return Navigator.SceneConfigs.PushFromRight;
    }

    render() {
        return (
            <Navigator
                style={{flex:1}}
                initialRoute={{name: 'login', component: LoginView}}
                configureScene={this.configureScene}
                renderScene={this.renderScene}
            />
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
    marginTop: 100,
    marginBottom:50
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
    backgroundColor: '#551049',
    height: 40,
    borderRadius: 5,
	width:100,
    marginTop: 20
  }
});
module.exports = Login; // 导出模块
// AppRegistry.registerComponent('login', () => Login);


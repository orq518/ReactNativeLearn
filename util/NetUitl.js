/**
 * Created by aaksjd on 2016/7/7.
 * NetUitl 网络请求的实现
 */
'use strict';
import React, { Component } from 'react';

class NetUitl extends React.Component {

    //post请求
    /**
     *url :请求地址
     *data:参数
     *callback:回调函数
     */
    static  postFrom(url, data, callback) {
        var fetchOptions = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body:'data='+data+''//这里我参数只有一个data,大家可以还有更多的参数
        };

        fetch(url, fetchOptions)
            .then((response) => response.text())
            .then((responseText) => {
                callback(JSON.parse(responseText));
            }).done();
    }
    /**
     *url :请求地址
     *data:参数(Json对象)
     *callback:回调函数
     */
    static postJson (url, data, callback) {
        var fetchOptions = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                //json形式
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        };

        fetch(url, fetchOptions)
            .then((response) => response.text())
            .then((responseText) => {
                callback(JSON.parse(responseText));
            }).done();
    }
    //get请求
    /**
     *url :请求地址
     *callback:回调函数
     */
    static  get(url, callback) {
        fetch(url)
            .then((response) => response.text())
            .then((responseText) => {
                callback(JSON.parse(responseText));
            }).done();
    }

}

module.exports = NetUitl;

//get的调用方法：
// NetUtil.get("http://v.juhe.cn/weather/index?format="+format+"&key="+key+"&cityname="+cityname,function  (ret) {
//     //回调的结果处理;
// })

// postJson的调用
// let data={'username':'123','password':'123456','token':'HSHSIHIFAUINNSNAFKSKJFNKFKFNFNFNK'};
// NetUitl.postJson(url,,function (set){
//     switch (set.retCode) {
//         case "0000":
//             alert("登录成功");
//             break;
//         case "0001":
//             alert("登录失败");
//             break;
//         default:
//             alert("登录失败");
//     }
// });

// postFrom的调用
// let url = Global.LOGIN;
// let map = new Map()
// map.set('username',phone);
// map.set('password',pwd);
// let sx = Util.mapToJson(Util.tokenAndKo(map));
// NetUitl.postFrom(url,sx,function (set){
//     switch (set.retCode) {
//         case "0000":
//             alert("登录成功");
//             break;
//         case "0001":
//             alert("登录失败");
//             break;
//         default:
//             alert("登录失败");
//     }
// });
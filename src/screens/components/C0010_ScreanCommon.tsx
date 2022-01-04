
import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    TextInput,
    SafeAreaView,
    KeyboardAvoidingView,
    View,
    Text,
    Button,
    FlatList,
    Alert
} from 'react-native';

export const C0010_001_ScreenTitle = (props: any) => {
    const { children } = props;
    const contentStyle = {
        color: "red",
        fontSize: 20
    };

    return (<Text style={contentStyle}>{children}</Text>)
}

export const C0010_002_ScreenChangeBtn = (props: any) => {
    // propsを受け取る
    const { navigatorInfo, btnInfo } = props
    console.log("navigatorInfo----------------------")
    console.log(navigatorInfo)
    console.log("btnInfo----------------------")
    console.log(btnInfo)
    // 必要な情報を取得する
    const { navigation } = navigatorInfo;
    const { name, screenTitle } = btnInfo;
    //componentを返却する
    return (<Button title={screenTitle} onPress={() => navigation.navigate(name)} />)
}

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
import { screenIdSet } from '../views/v0000_BaseComponent/V0000_BaseComponent'

export const CC0020_MenuBtn = (props: any) => {
    // propsを受け取る
    const { navigatorInfo, btnInfo } = props
    console.log("navigatorInfo----------------------")
    console.log(navigatorInfo)
    console.log("btnInfo----------------------")
    console.log(btnInfo)
    // 必要な情報を取得する
    const { navigation } = navigatorInfo;
    const { name, screenTitle, screenId } = btnInfo;
    //componentを返却する
    return (<Button title={screenTitle} onPress={() => { screenIdSet(screenId) }} />)
}
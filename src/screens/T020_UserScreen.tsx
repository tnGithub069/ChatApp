
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
import { C0010_001_ScreenTitle, C0010_002_ScreenChangeBtn } from "../components/C0010_ScreanCommon";

export const T020_UserScreen = (props: any) => {
    const ScreenChangeBtnInfo1 = { name: "Home", screenTitle: "Home画面へ" }
    const ScreenChangeBtnInfo2 = { name: "Test02", screenTitle: "テスト画面へ" }
    return (
        <SafeAreaView>
            <C0010_001_ScreenTitle >ユーザ画面</C0010_001_ScreenTitle>
            <C0010_002_ScreenChangeBtn navigatorInfo={props} btnInfo={ScreenChangeBtnInfo1} />
            <C0010_002_ScreenChangeBtn navigatorInfo={props} btnInfo={ScreenChangeBtnInfo2} />
        </SafeAreaView>
    );
}
// View

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
import { CC0010_ScreenTitle } from '../../components/CC0010_ScreenTitle'
import { CC0020_MenuBtn } from '../../components/CC0020_MenuBtn'

export const V0010_TopPage = (props: object) => {
    const ScreenChangeBtnInfo1 = { name: "Top", screenTitle: "Top画面へ", screenId: "V0010" }
    const ScreenChangeBtnInfo2 = { name: "TalkList", screenTitle: "トーク一覧画面へ", screenId: "V0020" }
    return (
        <SafeAreaView>
            <CC0010_ScreenTitle >トップ画面</CC0010_ScreenTitle>
            <CC0020_MenuBtn navigatorInfo={props} btnInfo={ScreenChangeBtnInfo1} />
            <CC0020_MenuBtn navigatorInfo={props} btnInfo={ScreenChangeBtnInfo2} />
        </SafeAreaView>
    );
}

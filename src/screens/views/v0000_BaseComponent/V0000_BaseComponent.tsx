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
import { V0010_TopPage } from '../v0010_TopPage/V0010_TopPage'
import { V0020_TalkList } from '../v0020_TalkList/V0020_TalkList'


export const [screenId, screenIdSet] = useState("V0010")

export const V0000_BaseComponent = () => {
    return (
        <>
            <Text>画面ID：{screenId}</Text>
            {screenController(screenId)}
        </>
    );
}

export const screenController = (screenId: string) => {
    console.log("screenController----------------------")
    console.log("screenId:", screenId)
    switch (screenId) {
        case "":
            return <V0010_TopPage />
        case "V0010":
            return <V0010_TopPage />
        case "V0020":
            return <V0020_TalkList />
    }
}

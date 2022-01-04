
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

export const TestComponent01 = () => {
    const contentStyle = {
        color: "red",
        //fontSize: "20px" reactとの違い
        fontSize: 20
    };

    return (<Text style={contentStyle}>TestComponent01</Text>)
}

export const ColoredMessage = (props: any) => {
    console.log(props)
    const { color, children } = props;

    const contentStyle = {
        color: color,
        fontSize: 20
        //fontSize: "20px" reactとの違い
    };

    return (<Text style={contentStyle}>{children}</Text>)
}


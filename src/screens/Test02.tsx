
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
import { TestComponent01, ColoredMessage } from "../components/ColoredMessage";

export const Test02 = () => {
    return (
        <SafeAreaView>
            <Text>
                HelloWorld!
            </Text>
            <TestComponent01 />
            <ColoredMessage color="blue" >お元気ですか？</ColoredMessage>
        </SafeAreaView>
    );
}
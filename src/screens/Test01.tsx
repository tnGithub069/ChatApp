//screens/ChatScreen.tsx
//ios Simulator : 起動エラーが起こる場合はXcodeを開いて、実行してみて。
// 　　　　　　　　　command + q で停止できる

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
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import firebase from 'firebase';
import { getMessageDocRef } from '../lib/firebase';
import { Message } from '../types/message';

export const Test01 = () => {
    //コンソールに出す
    const a = "1"
    const b = "2"
    console.log("aの値：" + a + "bの値：" + b)

    //トータルを計算する
    let int_total = printTotal(100)
    let [pr, tx] = printTax(110)
    let helloWorld = non_f("おばけ")
    let helloWorld_arr = arr_f("アーロン")
    const num = 1230
    let func01 = func(num, double)
    let func02 = func(num, word)
    testPromise()
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.test01}>合計：{int_total}</Text>
            <Text style={styles.test01}>金額：{pr}, 税：{tx}</Text>
            <Text style={styles.test01}>{helloWorld}</Text>
            <Text style={styles.test01}>{helloWorld_arr}</Text>
            <Text style={styles.test01}>func01：{func01}</Text>
            <Text style={styles.test01}>func02：{func02}</Text>
        </SafeAreaView>
    );
};

function total(max: number): number {
    let num = 0
    for (let i = 1; i <= max; i++) {
        num += i
    }
    return num
}

function printTotal(n: number): number {
    //値を合計する（total関数を呼び出す）
    let int_total = total(n)
    //コンソールに吐き出す
    console.log(n + "までの合計：" + total(n))
    //合計を返す
    return int_total
}

function calcTax(price: number): [price: number, tax: number] {
    const p = price / 1.1
    const t = price - p
    return [p, t]
}

function printTax(price: number): [price: number, tax: number] {
    const [pr, tx] = calcTax(price)
    console.log(price + "の本体価格：" + pr + "、税額" + tx)
    return [pr, tx]
}

function printPerson(id: number | string, name: string, age: number): void {
    switch (typeof (id)) {
        case "string":
            console.log("あなたのIDは「" + id + '」')
            break
        case "number":
            console.log("No." + id)
            break
        default:
            console.log("間違っているIDが。")
    }
}

const non_f = function (name: string): string {
    let helloWorld = "Hello!" + name + "さん"
    console.log(helloWorld)
    return helloWorld
}

const arr_f = (name: string): string => {
    let helloWorld = "Hello!" + name + "さん"
    console.log(helloWorld)
    return helloWorld
}

const func = (n: number, f: (n: number) => number | string): number | string => {
    let res = f(n)
    console.log("Result:" + res)
    return res
}

const double = (n: number): number => n * 2
const word = (n: number): string => {
    const w = ["◯", "一", "二", "三", "四", "五", "六", "七", "八", "九"]
    const s = String(n)
    let res: string[] = []
    for (let i = 0; i < s.length; i++) {
        let c = s.charAt(i)
        res.push(w[Number(c)])
    }
    return res.join("")
}

//2021.12.03 3-3
function testPromise() {
    const f = (n: number, d: number): Promise<number> => {
        console.log("start:" + n)
        return new Promise((f) => {
            let total = 0
            for (let i = 1; i <= n; i++)
                total += i
            setTimeout(() => {
                f(total)
            }, d)
        })
    }

    const cb = (n: number) => {
        console.log("result:" + n)
    }

    f(10, 300).then(cb)
    f(100, 200).then(cb)
    f(1000, 100).then(cb)

    console.log("do somothing")
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#333',
        alignItems: 'center',
        justifyContent: 'center'
    },
    messagesContainer: {
        width: '100%',
        padding: 10
    },
    inputTextContainer: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center'
    },
    inputText: {
        color: '#fff',
        borderWidth: 1,
        borderColor: '#999',
        height: 32,
        flex: 1,
        borderRadius: 5,
        paddingHorizontal: 10
    },
    test01: {
        color: '#fff',
    }
});
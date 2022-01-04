//screens/ChatScreen.tsx

import React, { useState, useEffect } from 'react';
//名前付き：useStateみたいにimoirt時に名前を{}で指定しないといけない
//defoult：Reactみたいに、何も指定しない場合はdefaultがimportされる。（defaultは1ファイルに1こしか定できない）
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
// import * as firestore from 'firebase/firebase-firestore';

//--------------------------------------------------------
export const ChatScreen = () => {
    //useStateを使うと、stateとstateを更新する関数を作成することができます。
    //const [text, setText] = useState<string>('')を記述することで、textというstateと、setTextというtextを更新する関数が作られました。
    //
    //井上駿23:07
    // let a, b, rest;
    // [a, b] = [10, 20];

    // console.log(a);
    // // expected output: 10

    // console.log(b);
    // // expected output: 20

    //useStateはイニシャルバリュー（('')）と
    //valueと、そのvalueを変更するための関数を返す
    const [text, setText] = useState<string>('');

    //■async/awaitはニコイチ？
    //async：非同期関数を定義する関数宣言のこと。
    //await：async function内でPromiseの結果（resolve、reject）が返されるまで待機する（処理を一時停止する）演算子のこと。
    //       ※  非同期処理とは、一つのタスクを実行中であっても他のタスクを実行できる実行方式をいいます。 
    //          非同期処理をうまく実装することで、ユーザーはアプリケーションの処理待ちを気にすることなくアクセスすることができるため、
    //          ユーザビリティを考えるうえで重要な要素になります。
    //https://qiita.com/soarflat/items/1a9613e023200bbebcb3
    const [messages, setMessages] = useState<Message[]>([]);

    const sendMessage = async (value: string) => {
        if (value != '') {
            const docRef = await getMessageDocRef();
            const newMessage = {
                text: value,
                createdAt: firebase.firestore.Timestamp.now(),
                userId: ''
            } as Message;
            await docRef.set(newMessage);
            setText('');
        } else {
            Alert.alert('エラー', 'メッセージを入力してください');
        }
    };

    const getMessages = async () => {
        const messages = [] as Message[];
        await firebase
            .firestore()
            .collection('messages')
            .orderBy('createdAt', 'desc')
            .onSnapshot((snapshot) => {
                snapshot.docChanges().forEach((change) => {
                    if (change.type === 'added') {
                        messages.push(change.doc.data() as Message);
                    }
                    setMessages(messages);
                });
            });
    };

    useEffect(() => {
        getMessages();
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <ExpoStatusBar style="light" />
            <KeyboardAvoidingView behavior="padding">
                <FlatList
                    style={styles.messagesContainer}
                    data={messages}
                    inverted={true}
                    renderItem={({ item }: { item: Message }) => (
                        <Text style={{ color: '#fff' }}>{item.text}</Text>
                    )}
                    keyExtractor={(_, index) => index.toString()}
                />
                <View style={styles.inputTextContainer}>
                    {/* InputText のonChangeTextというプロパティで、テキストの変更の際に実行する関数を指定できます。 
                onChangeTextに先ほど定義したsetTextを渡すことで、テキストの変更と同時にstateを更新し、
                画面の再レンダリングを行い入力内容が画面に即時反映される仕組みです。 */}
                    <TextInput
                        style={styles.inputText}
                        onChangeText={(value) => {
                            setText(value);
                        }}
                        value={text}
                        placeholder="メッセージを入力してください"
                        placeholderTextColor="#777"
                        autoCapitalize="none"
                        autoCorrect={false}
                        returnKeyType="done"
                    />
                    {/* ボタン処理
                    onPressしたら「sendMessage(text)を実行する
                 */}
                    <Button
                        title="send"
                        onPress={() => {
                            sendMessage(text);
                        }}
                    />
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

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
    }
});
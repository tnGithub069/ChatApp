//types/message.ts

import firebase from 'firebase';
//import firestore from 'firebase/firebase-firestore';


// Firestoreにメッセージを保存する前準備として、メッセージの型を作成しておきます。
// types/message.tsというファイルを作成し、Messageという型を定義します。

// メッセージの内容と、送信時間、送信者を管理できるように、このようにMessageの型を定義します。
export type Message = {
    text: string;
    createdAt: firebase.firestore.Timestamp;
    userId: string;
};
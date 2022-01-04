//lib/firebase.ts

//import * as firebase from 'firebase';
//注意！：ver9以降だと「import * as firebase from 'firebase';」はエラーとなる。
//      （firebaseないのライブラリを全て一括でimportするのは推奨されていないため）
//expo install firebase@8.10.0
import * as firebase from 'firebase';
import 'firebase/app';
import 'firebase/firestore';

//firebase.defaultと指定しないとエラーとなる。全部指定するのは面倒だからここで宣言する。
const firebase_def = firebase.default

// Import the functions you need from the SDKs you need
//import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyADa9t7CPVFmDGwpv0UvHmRN-Peih2uWPE",
    authDomain: "chatproject-82b68.firebaseapp.com",
    projectId: "chatproject-82b68",
    storageBucket: "chatproject-82b68.appspot.com",
    messagingSenderId: "989533017198",
    appId: "1:989533017198:web:585cbab82c3b42d11fc27f"
};

// Initialize Firebase
if (!firebase_def.apps.length) {
    firebase_def.initializeApp(firebaseConfig);
}

//まず、lib/firebase.tsで、messagesというコレクションの新規ドキュメントの参照を得る関数を定義します。
export const getMessageDocRef = async () => {
    //messageを変えるとfirebaseのテーブルが変わる
    return await firebase_def.firestore().collection('messages').doc();
};

export const getMessageDocRef002 = async () => {
    var obj_A = firebase.default
    var obj_B = obj_A.firestore()
    var obj_C = obj_B.collection('message002')
    var obj_D = obj_C.doc()
    return await obj_D
};


//---テストコード------------------------------------------------------

var db = firebase_def.firestore();

db.collection("users").add({
    first: "Ada",
    last: "Lovelace",
    born: 1815
})
    .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch((error) => {
        console.error("Error adding document: ", error);
    });

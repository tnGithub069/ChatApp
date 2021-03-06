// import { StatusBar } from 'expo-status-bar';
// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.tsx to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

import React from 'react';
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
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { ChatScreen } from './src/screens/ChatScreen';
import { Test01 } from './src/screens/Test01';
import { Test02 } from './src/screens/Test02';
import { T010_HomeScreen } from './src/screens/T010_HomeScreen';
import { T020_UserScreen } from './src/screens/T020_UserScreen';
import { V0000_BaseComponent } from './src/screens/views/v0000_BaseComponent/V0000_BaseComponent'
import { V0010_TopPage } from './src/screens/views/v0010_TopPage/V0010_TopPage'
import { V0020_TalkList } from './src/screens/views/v0020_TalkList/V0020_TalkList'


//画面遷移の設定
const Stack = createNativeStackNavigator();

export default function App() {
  //return <ChatScreen />;
  return (
    <SafeAreaView>
      <V0000_BaseComponent />
    </SafeAreaView>
  );
}

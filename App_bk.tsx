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
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { ChatScreen } from './src/screens/ChatScreen';
import { Test01 } from './src/screens/Test01';
import { Test02 } from './src/screens/Test02';
import { T010_HomeScreen } from './src/screens/T010_HomeScreen';
import { T020_UserScreen } from './src/screens/T020_UserScreen';


//画面遷移の設定
const Stack = createNativeStackNavigator();

export default function App() {
  //return <ChatScreen />;
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={T010_HomeScreen} />
        <Stack.Screen name="User" component={T020_UserScreen} />
        <Stack.Screen name="Test02" component={Test02} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

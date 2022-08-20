import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import firebase from 'firebase';
import { LogBox } from 'react-native';
import MemoListScreen from './src/screens/MemoListScreen';
import MemoDetailScreen from './src/screens/MemoDetailScreen';
import MemoEditScreen from './src/screens/MemoEditScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import MemoCreateScreen from './src/screens/MemoCreateScreen';
import LogInScreen from './src/screens/LogInScreen';

import { firebaseConfig } from './env';

require('firebase/firestore');

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

const Stack = createNativeStackNavigator();
LogBox.ignoreLogs(['Setting a timer']);

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerStyle: { backgroundColor: '#23054A' },
          headerTitleStyle: { color: 'pink' },
          headerTitle: 'Memo',
          headerTintColor: 'pink',
          headerBackTitle: 'Back',
          gestureEnabled: true,
          gestureDirection: 'horizontal',
        }}
      >
        <Stack.Screen name="Memo List" component={MemoListScreen} />
        <Stack.Screen name="Memo Detail" component={MemoDetailScreen} />
        <Stack.Screen name="Memo Edit" component={MemoEditScreen} />
        <Stack.Screen name="Sign Up" component={SignUpScreen} />
        <Stack.Screen name="New Memo" component={MemoCreateScreen} />
        <Stack.Screen name="Login" component={LogInScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

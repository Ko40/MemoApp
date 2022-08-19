import React from 'react';
import {
  TouchableOpacity, Text, StyleSheet, Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import firebase from 'firebase';

export default function LogOutButton() {
  const navigation = useNavigation();
  function handlePress() {
    firebase.auth().signOut()
      .then(() => {
        navigation.reset({
          index: 0,
          routes: [{ name: 'Login' }],
        });
      })
      .catch(() => {
        Alert.alert('You failed to log in, try again.');
      });
  }
  return (
    <TouchableOpacity onPress={handlePress()} style={styles.container}>
      <Text style={styles.label}>Log out</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12,
    paddingVertical: 4,
  },
  label: {
    fontSize: 14,
    color: 'pink',
  },
});

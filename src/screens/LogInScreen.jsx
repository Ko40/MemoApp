import React, { useState } from 'react';
import {
  View, Text, TextInput, StyleSheet, TouchableOpacity,
} from 'react-native';

import Button from '../components/Button';

export default function LogInScreen(props) {
  const { navigation } = props;
  const [ID, setID] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <Text style={styles.title}>Login</Text>
        <TextInput
          style={styles.input}
          value={ID}
          onChangeText={(text) => { setID(text); }}
          autoCapitalize="none"
          keyboardType="email-address"
          placeholder="User ID"
          textContentType="username"
        />
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={(text) => { setPassword(text); }}
          autoCapitalize="none"
          keyboardType="email-address"
          placeholder="Password"
          secureTextEntry
          textContentType="password"
        />
        <Button
          label="Login"
          onPress={() => {
            navigation.reset({
              index: 0,
              routes: [{ name: 'Memo List' }],
            });
          }}
        />
        <View style={styles.footer}>
          <Text style={styles.footerText}>You do not have an ID?</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.reset({
                index: 0,
                routes: [{ name: 'Sign Up' }],
              });
            }}
          >
            <Text style={styles.footerLink}>Sign up here!</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F4F8',
  },
  inner: {
    paddingHorizontal: 28,
    paddingVertical: 24,
  },
  title: {
    fontSize: 24,
    lineHeight: 32,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  input: {
    fontSize: 16,
    lineHeight: 32,
    height: 48,
    borderColor: '#DDDDDD',
    borderWidth: 1,
    backgroundColor: '#ffffff',
    paddingHorizontal: 8,
    marginBottom: 16,
  },
  footerText: {
    fontSize: 12,
    lineHeight: 24,
    marginRight: 12,
  },
  footerLink: {
    fontSize: 12,
    lineHeight: 24,
    color: '#23054A',
  },
  footer: {
    flexDirection: 'row',
  },
});

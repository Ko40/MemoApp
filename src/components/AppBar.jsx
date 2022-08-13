import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function AppBar() {
  return (
    <View style={styles.appbar}>
      <View style={styles.appbarInner}>
        <Text style={styles.appbarTytle}>MEMO</Text>
        <Text style={styles.appbarRight}>Log Out</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appbar: {
    width: '100%',
    height: 109,
    backgroundColor: '#23054A',
    justifyContent: 'flex-end',
  },
  appbarInner: {
    alignItems: 'center',
  },
  appbarRight: {
    position: 'absolute',
    color: 'pink',
    right: 16,
    bottom: 8,
  },
  appbarTytle: {
    paddingVertical: 24,
    fontSize: 32,
    lineHeight: 36,
    color: 'pink',
    fontWeight: 'bold',
  },
});

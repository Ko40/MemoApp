import React from 'react';
import {
  View, ScrollView, Text, StyleSheet,
} from 'react-native';

import AppBar from '../components/AppBar';
import CircleButton from '../components/CircleButton';

export default function MemoDetailScreen() {
  return (
    <View>
      <AppBar />
      <View style={styles.memoHeader}>
        <Text style={styles.memoTytle}>Shopping List</Text>
        <Text style={styles.memoDate}>13/08/2022 14:00</Text>
      </View>
      <ScrollView style={styles.memoBody}>
        <Text style={styles.memoText}>
          Shopping List is that you can use this list to check what you want to buy.
        </Text>
      </ScrollView>
      <CircleButton style={{ top: 160, bottom: 'auto' }}>+</CircleButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  memoHeader: {
    backgroundColor: '#23054A',
    height: 96,
    justifyContent: 'center',
    paddingVertical: 24,
    paddingHorizontal: 20,
  },
  memoTytle: {
    color: '#ffffff',
    fontSize: 20,
    lineHeight: 32,
    fontWeight: 'bold',
  },
  memoDate: {
    color: '#ffffff',
    fontSize: 12,
    lineHeight: 16,
  },
  memoBody: {
    paddingVertical: 32,
    paddingHorizontal: 28,
  },
  memoText: {
    fontSize: 16,
    lineHeight: 24,
  },
});

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function MemoList() {
  return (
    <View>
      <View style={styles.memoList}>
        <View>
          <Text style={styles.memoListTitle}>Shopping List</Text>
          <Text style={styles.memoListDate}>13/08/2022 14:00</Text>
        </View>
        <View>
          <Text>X</Text>
        </View>
      </View>
      <View style={styles.memoList}>
        <View>
          <Text style={styles.memoListTitle}>Shopping List</Text>
          <Text style={styles.memoListDate}>13/08/2022 14:00</Text>
        </View>
        <View>
          <Text>X</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  memoList: {
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 19,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: 'rgba(0, 0, 0.15)',
  },
  memoListTitle: {
    fontSize: 16,
    lineHeight: 32,
  },
  memoListDate: {
    fontSize: 12,
    lineHeight: 16,
    color: '#848484',
  },
});

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.appbar}>
        <View style={styles.appbarInner}>
          <Text style={styles.appbarTytle}>MEMO</Text>
          <Text style={styles.appbarRight}>Log Out</Text>
        </View>
      </View>

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
      </View>

      <View style={styles.circleButton}>
        <Text style={styles.circleButtonLabel}>+</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
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
  circleButton: {
    backgroundColor: '#23054A',
    width: 64,
    height: 64,
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 40,
    bottom: 40,
    shadowColor: '#23045A',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 8,
  },
  circleButtonLabel: {
    color: '#FFFFFF',
    fontSize: 40,
    lineHeight: 40,
  },
});

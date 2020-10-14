import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function View1() {
  return (
    <View style={styles.cont}>
      <Text>View1</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  cont: {
    flex: 1,
    justifyContent: 'center',
  },
});

import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function View2() {
  return (
    <View style={styles.cont}>
      <Text>View2</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  cont: {
    flex: 1,
    justifyContent: 'center',
  },
});

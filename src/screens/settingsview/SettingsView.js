import React from 'react';
import {StyleSheet, View, Text, SafeAreaView} from 'react-native';

const SettingsView = ({props, route, navigation}) => {
  const {p1, p2} = route.params;
  return (
    <SafeAreaView>
      <Text>p1: {p1}</Text>
      <Text>p2: {JSON.stringify(p2)}</Text>
      <Text>Info View</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default SettingsView;

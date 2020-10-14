import React from 'react';
import {StyleSheet, View, Text, SafeAreaView, Button} from 'react-native';
import {useTheme, Appbar, TouchableRipple, Switch} from 'react-native-paper';
import {PreferencesContext} from './../../../PreferencesContext';

const SettingsView = ({props, route, navigation}) => {
  const {p1, p2} = route.params;
  const theme = useTheme();
  const {toggleTheme, isThemeDark} = React.useContext(PreferencesContext);

  return (
    <SafeAreaView>
      <Text>p1: {p1}</Text>
      <Text>p2: {JSON.stringify(p2)}</Text>
      <Text>Info View</Text>
      <TouchableRipple onPress={() => toggleTheme()}>
        <Switch
          style={[{backgroundColor: theme.colors.accent}]}
          color={'red'}
          value={isThemeDark}
        />
      </TouchableRipple>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default SettingsView;

import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import ContactView from './ContactView';
import SettingsView from './../settingsview/SettingsView';
import EditView from './../editview/EditView';
import View1 from './View1';
import View2 from './View2';
import View3 from './View3';

import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useTheme} from 'react-native-paper';

const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const MainView = () => {
  return (
    <Stack.Navigator initialRouteName="Main">
      <Stack.Screen
        name="Main"
        component={ContactView}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Settings"
        component={SettingsView}
        initialParams={{p1: 'damin', p2: 'stopo'}}
      />
      <Stack.Screen
        name="Edit"
        component={EditView}
        options={{title: 'Edita'}}
      />
    </Stack.Navigator>
  );
};

const MainTabScreen = () => {
  const theme = useTheme();
  return (
    <Tab.Navigator
      initialRouteName="Main"
      activeColor={theme.colors.onBackground}
      barStyle={{backgroundColor: theme.colors.background}}>
      <Tab.Screen
        name="Main"
        component={MainView}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="View1"
        component={View1}
        options={{
          tabBarLabel: 'Updates',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="bell" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="View2"
        component={View2}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainTabScreen;

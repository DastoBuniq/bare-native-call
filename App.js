import 'react-native-gesture-handler';
import {
  NavigationContainer,
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

import React, {useState} from 'react';
import {StyleSheet, SafeAreaView, FlatList, View} from 'react-native';
import {SearchBar, ListItem, Avatar} from 'react-native-elements';
import {MenuProvider} from 'react-native-popup-menu';
import ContactView from './src/screens/mainview/ContactView';
import SettingsView from './src/screens/settingsview/SettingsView';
import EditView from './src/screens/editview/EditView';
import {
  DarkTheme as PaperDarkTheme,
  DefaultTheme as PaperDefaultTheme,
  Provider as PaperProvider,
} from 'react-native-paper';
import merge from 'deepmerge';
import {PreferenceProvider, PreferencesContext} from './PreferencesContext';
import MainTabScreen from './src/screens/mainview/MainView';
import {DrawerContent} from './src/screens/DrowerContent';

const CombinedDefaultTheme = merge(PaperDefaultTheme, NavigationDefaultTheme);
const CombinedDarkTheme = merge(PaperDarkTheme, NavigationDarkTheme);

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const App = () => {
  const [isThemeDark, setIsThemeDark] = useState(true);
  let theme = isThemeDark ? CombinedDarkTheme : CombinedDefaultTheme;

  const toggleTheme = React.useCallback(() => {
    return setIsThemeDark(!isThemeDark);
  }, [isThemeDark]);

  const preferences = React.useMemo(
    () => ({
      toggleTheme,
      isThemeDark,
    }),
    [isThemeDark, toggleTheme],
  );

  return (
    <PreferencesContext.Provider value={preferences}>
      <PaperProvider theme={CombinedDefaultTheme}>
        <NavigationContainer theme={CombinedDefaultTheme}>
          <Drawer.Navigator
            initialRouteName="Main"
            drawerContent={(props) => <DrawerContent {...props} />}>
            {/* <Stack.Screen
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
            /> */}
            <Drawer.Screen name="Main" component={MainTabScreen} />
          </Drawer.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </PreferencesContext.Provider>
  );
};

const styles = StyleSheet.create({});

export default App;

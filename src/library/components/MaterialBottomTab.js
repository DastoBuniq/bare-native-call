import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';

export default createMaterialBottomTabNavigator(
  {
    Home: {screen: Main},
    Library: {screen: Library},
    History: {screen: History},
    Cart: {screen: Cart},
  },
  {
    initialRouteName: 'Album',
    activeColor: '#F44336',
  },
);

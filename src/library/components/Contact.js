import React, {useState} from 'react';
import {
  TouchableHighlight,
  StyleSheet,
  View,
  Button,
  Modal,
  Text,
  SafeAreaView,
} from 'react-native';
import {ListItem, Image, Icon} from 'react-native-elements';
import {MenuOptions, MenuOption, MenuTrigger} from 'react-native-popup-menu';

import {
  List,
  IconButton,
  Avatar,
  Divider,
  useTheme,
  Menu,
} from 'react-native-paper';
// import OptionsMenu from 'react-native-option-menu';
// import images from './../../../assets/more.png';
let dots = <List.Item icon="dots-vertical" />;

export default function Contact(props) {
  const [modalVisible, setModalVisible] = useState(false);
  const [visible, setVisible] = React.useState(false);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);
  const menui = (
    <Menu>
      <MenuTrigger children={dots} />
      <MenuOptions>
        <MenuOption onSelect={() => alert('Save')} text="Modifica" />
        <MenuOption onSelect={() => alert('Copia')} text="Copia" />
        <MenuOption
          onSelect={() => props.navigation.navigate('Settings')}
          text="Vedi info"
        />
        <MenuOption onSelect={() => alert('Delete')}>
          <Text style={{color: 'red'}}>Elimina</Text>
        </MenuOption>
      </MenuOptions>
    </Menu>
  );
  const menu = (
    <View>
      <Menu
        visible={visible}
        onDismiss={closeMenu}
        anchor={<IconButton icon="dots-vertical" onPress={openMenu} />}>
        <Menu.Item
          onPress={() => {
            closeMenu();
            props.navigation.navigate('Settings');
          }}
          title="Settings"
        />
        <Menu.Item onPress={() => {closeMenu()}} title="Nulla" />
        <Divider />
        <Menu.Item
          onPress={() => {closeMenu()}}
          title="Elimina"
          titleStyle={{color: 'red'}}
        />
      </Menu>
    </View>
  );
  return (
    // <View style={styles.ContactRow}>
    //   <TouchableHighlight
    //     style={styles.ContactMain}
    //     underlayColor="gray"
    //     activeOpacity={0.5}
    //     onPress={() => null}>
    //     <ListItem bottomDivider>
    //       <Avatar source={{uri: props.item.avatar_url}} />
    //       <ListItem.Content>
    //         <ListItem.Title>{props.item.name}</ListItem.Title>
    //         <ListItem.Subtitle>{props.item.subtitle}</ListItem.Subtitle>
    //       </ListItem.Content>
    //     </ListItem>
    //   </TouchableHighlight>
    //   <View style={styles.Icon}>{menu}</View>
    // </View>
    <View>
      <List.Item
        title={props.item.name}
        description={props.item.subtitle}
        right={() => menu}
        left={() => <Avatar.Image source={{uri: props.item.avatar_url}} />}
      />
      <Divider />
    </View>
  );
}

const styles = StyleSheet.create({
  ContactRow: {
    flex: 1,
    flexDirection: 'row',
  },
  ContactMain: {
    flex: 0.85,
  },
  Icon: {
    flex: 0.15,
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Ico: {
    backgroundColor: 'yellow',
    width: 25,
    borderRadius: 30,
    alignItems: 'center',
  },
});

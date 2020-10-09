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
import {ListItem, Avatar, Image} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';
// import OptionsMenu from 'react-native-option-menu';
const MoreIcon = require('./../assets/more.png');

export default function Contact(props) {
  const [modalVisible, setModalVisible] = useState(false);
  const menu = (
    <Menu>
      <MenuTrigger text="..." />
      <MenuOptions>
        <MenuOption onSelect={() => alert('Save')} text="Modifica" />
        <MenuOption onSelect={() => alert('Copia')} text="Copia" />
        <MenuOption onSelect={() => alert('view Info')} text="Vedi info" />
        <MenuOption onSelect={() => alert('Delete')}>
          <Text style={{color: 'red'}}>Elimina</Text>
        </MenuOption>
      </MenuOptions>
    </Menu>
  );
  return (
    <View style={styles.ContactRow}>
      <TouchableHighlight
        style={styles.ContactMain}
        underlayColor="gray"
        activeOpacity={0.5}
        onPress={() => null}>
        <ListItem bottomDivider>
          <Avatar source={{uri: props.item.avatar_url}} />
          <ListItem.Content>
            <ListItem.Title>{props.item.name}</ListItem.Title>
            <ListItem.Subtitle>{props.item.subtitle}</ListItem.Subtitle>
          </ListItem.Content>
        </ListItem>
      </TouchableHighlight>
      <View style={styles.Icon}>
        {/* <TouchableHighlight
          style={styles.Ico}
          underlayColor="gray"
          activeOpacity={0.5}
          onPress={() => setModalVisible(true)}>
          <Image source={MoreIcon} style={{width: 24, height: 24}} />
        </TouchableHighlight> */}
        {menu}
      </View>
      {/* <Icon name="angle-right" size={24} color="#C8C7CC" /> */}
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

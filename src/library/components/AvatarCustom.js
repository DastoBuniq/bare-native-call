import React from 'react';
import {StyleSheet} from 'react-native';
import {Icon} from 'react-native-elements';
import {SearchBar, ListItem, Avatar} from 'react-native-elements';

const AvatarCustom = (props) => {
  return (
    <Avatar
      rounded
      source={props.sourceImg ? props.sourceImg : null}
      showAccessory
      accessory={{
        name: 'mode-edit',
        type: 'material',
        color: '#fff',
        underlayColor: '#000',
        onPress: () => console.warn('dasd'),
      }}
      size={'large'}
      icon={{name: 'person', type: 'material', color: 'white'}}
      overlayContainerStyle={{backgroundColor: '#BDBDBD'}}
    />
  );
};

const styles = StyleSheet.create({
});

export default AvatarCustom;
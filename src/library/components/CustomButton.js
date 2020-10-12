import React from 'react';
import {StyleSheet, TouchableHighlight} from 'react-native';
import {Icon} from 'react-native-elements';

const CustomButton = (props) => {
  return (
    <TouchableHighlight
      activeOpacity={0.6}
      underlayColor="transparent"
      onPress={props.onPress}>
      <Icon
        name={props.name}
        type={props.type}
        color={props.color}
        size={props.size}
        style={styles.ico}
      />
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  ico: {
    marginLeft: 15,
    marginRight: 15,
  },
});

export default CustomButton;

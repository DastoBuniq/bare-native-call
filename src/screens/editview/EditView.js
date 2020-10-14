import React, {useState} from 'react';
import AvatarCustom from 'lib/components/AvatarCustom';
import {StyleSheet, View, SafeAreaView, ScrollView, Text} from 'react-native';
import {ListItem, Image, Icon} from 'react-native-elements';
import {TextInput} from 'react-native-paper';

const EditView = (props) => {
  const [personalInfo, setInfo] = useState({
    name: '',
    surname: '',
    title: '',
    number: '',
    mail: '',
    address: '',
  });
  return (
    <SafeAreaView>
      <View style={styles.ImgSection}>
        <AvatarCustom sourceImg={props.sourceImg} />
      </View>
      <View style={styles.fieldsArea}>
        <TextInput
          label="Nome"
          value={personalInfo.name}
          onChangeText={(text) => setInfo({...personalInfo, name: text})}
          style={styles.inputField}
        />
        <TextInput
          label="Cognome"
          value={personalInfo.surname}
          onChangeText={(text) => setInfo({...personalInfo, surname: text})}
          style={styles.inputField}
        />
        <TextInput
          value={personalInfo.title}
          onChangeText={(text) => setInfo({...personalInfo, title: text})}
          label="Titolo"
          style={styles.inputField}
        />

        <TextInput
          value={personalInfo.number}
          onChangeText={(text) => setInfo({...personalInfo, number: text})}
          label="Numero di telefono"
          style={styles.inputField}
          keyboardType="phone-pad"
        />
        <TextInput
          value={personalInfo.mail}
          onChangeText={(text) => setInfo({...personalInfo, mail: text})}
          label="Mail"
          style={styles.inputField}
          keyboardType="email-address"
        />
        <TextInput
          value={personalInfo.address}
          onChangeText={(text) => setInfo({...personalInfo, address: text})}
          label="Indirizzo"
          style={styles.inputField}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  Content: {
    flex: 1,
    alignContent: 'center',
  },
  ImgSection: {
    backgroundColor: 'blue',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'baseline',
    marginTop: 10,
    height: 90,
  },
  fieldsArea: {},
  inputField: {
    margin: 5,
  },
});

export default EditView;

import React, {useState} from 'react';
import AvatarCustom from 'lib/components/AvatarCustom';
import {
  StyleSheet,
  View,
  SafeAreaView,
  ScrollView,
  TextInput,
  Text,
} from 'react-native';
import {ListItem, Image, Icon} from 'react-native-elements';

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
          value={personalInfo.name}
          onChangeText={(text) => setInfo({...personalInfo, name: text})}
          placeholder="Nome"
          style={styles.inputField}
        />
        <TextInput
          value={personalInfo.surname}
          onChangeText={(text) => setInfo({...personalInfo, surname: text})}
          placeholder="Cognome"
          style={styles.inputField}
        />
        <TextInput
          value={personalInfo.title}
          onChangeText={(text) => setInfo({...personalInfo, title: text})}
          placeholder="Titolo"
          style={styles.inputField}
        />
        <TextInput
          value={personalInfo.number}
          onChangeText={(text) => setInfo({...personalInfo, number: text})}
          placeholder="Numero di telefono"
          style={styles.inputField}
        />
        <TextInput
          value={personalInfo.mail}
          onChangeText={(text) => setInfo({...personalInfo, mail: text})}
          placeholder="Mail"
          style={styles.inputField}
        />
        <TextInput
          value={personalInfo.address}
          onChangeText={(text) => setInfo({...personalInfo, address: text})}
          placeholder="Indirizzo"
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
  },
  fieldsArea: {},
  inputField: {
    borderColor: 'gray',
    borderRadius: 5,
    fontSize: 20, 
    borderWidth: 1,
    paddingLeft: 3,
    margin: 10,
  },
});

export default EditView;

import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  PermissionsAndroid,
  Platform,
  SafeAreaView,
  FlatList,
  TextInput,
} from 'react-native';
import Contacts from 'react-native-contacts';
import ListItem from './ListItem';

export default function View2(props) {
  let [contacts, setContacts] = useState([]);

  useEffect(() => {
    if (Platform.OS === 'android') {
      PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_CONTACTS, {
        title: 'Contacts',
        message: 'This app would like to view your contacts.',
      }).then(() => {
        loadContacts();
      });
    } else {
      console.log('prima loadcontacts');
      //loadContacts();
      Contacts.getAll()
        .then(
          (data) => setContacts(data),
          (e) => console.log(e),
        );
    }
  }, []);

  const loadContacts = () => {
    Contacts.getAll((err, conts) => {
      console.log('dentro promise');
      // contacts.sort(
      //   (a, b) => a.givenName.toLowerCase() > b.givenName.toLowerCase(),
      // );
      // console.log('contacts -> ', contacts);
      if (err === 'denied') {
        //alert('Permission to access contacts was denied');
        console.warn('Permission to access contacts was denied');
      } else {
        setContacts(conts);
        console.log('contacts', conts);
      }
    });
  };
  const openContact = (contact) => {
    console.log(JSON.stringify(contact));
    Contacts.openExistingContact(contact, () => {});
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.header}>Access Contact List in React Native</Text>
        {/* <TextInput
          onChangeText={search}
          placeholder="Search"
          style={styles.searchBar}
        /> */}
        <FlatList
          data={contacts}
          renderItem={(contact) => {
            {
              //console.log('contact -> ' + JSON.stringify(contact));
            }
            return (
              <ListItem
                key={contact.item.recordID}
                item={contact.item}
                onPress={openContact}
              />
            );
          }}
          keyExtractor={(item) => item.recordID}
        />
        <Text>wa</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: '#4591ed',
    color: 'white',
    paddingHorizontal: 15,
    paddingVertical: 15,
    fontSize: 20,
  },
  searchBar: {
    backgroundColor: '#f0eded',
    paddingHorizontal: 30,
    paddingVertical: Platform.OS === 'android' ? undefined : 15,
  },
});

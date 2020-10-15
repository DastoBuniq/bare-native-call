import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {
  Chip,
  Avatar,
  Button,
  Card,
  Title,
  Paragraph,
  Menu,
  Divider,
} from 'react-native-paper';

const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;

export default function View1() {
  const [visible, setVisible] = React.useState(false);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);
  return (
    <View style={styles.cont}>
      <Text>View1</Text>
      <Chip
        icon="information"
        onPress={() => console.log('Pressed')}
        onClose={() => null}
        style={{width: 300}}>
        Example Chip
      </Chip>
      <Chip
        icon="information"
        onPress={() => console.log('Pressed')}
        onClose={() => null}>
        Example Chip
      </Chip>
      
      <Card>
        <Card.Title
          title="Card Title"
          subtitle="Card Subtitle"
          left={LeftContent}
        />
        <Card.Content>
          <Title>Card title</Title>
          <Paragraph>Card content</Paragraph>
        </Card.Content>
        <Card.Cover source={{uri: 'https://picsum.photos/700'}} />
        <Card.Actions>
          <Button>Cancel</Button>
          <Button>Ok</Button>
        </Card.Actions>
      </Card>
      <ScrollView
        style={{
          marginTop: 300,
        }} 
        contentContainerStyle={{justifyContent: 'flex-end', flexDirection: 'row'}}>
        <Menu
          visible={visible}
          onDismiss={closeMenu}
          anchor={<Button onPress={openMenu} style={{width: 70}}>Show menu</Button>}>
          <Menu.Item onPress={() => {}} title="Item 1" />
          <Menu.Item onPress={() => {}} title="Item 2" />
          <Divider />
          <Menu.Item onPress={() => {}} title="Item 3" />
        </Menu>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  cont: {
    flex: 1,
    justifyContent: 'center',
  },
});

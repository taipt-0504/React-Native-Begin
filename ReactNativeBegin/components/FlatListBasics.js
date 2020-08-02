import React from 'react';
import { FlatList, StyleSheet, Text, View, Button } from 'react-native';

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
    color: 'red',
    textAlign: 'center',
    backgroundColor: 'yellow',
    marginBottom: 10
  },
});

const FlatListBasics = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button
          title="Go to Section List"
          onPress={() =>
              navigation.navigate('Section List Component')
          }
      />
      <FlatList
        data={[
          {key: 'Devin'},
          {key: 'Dan'},
          {key: 'Dominic'},
          {key: 'Jackson'},
          {key: 'James'},
          {key: 'Joel'},
          {key: 'John'},
          {key: 'Jillian'},
          {key: 'Jimmy'},
          {key: 'Julie'},
          {key: 'James 1'},
          {key: 'Joel 2'},
          {key: 'John 3'},
          {key: 'Jillian 4'},
          {key: 'Jimmy 5'},
          {key: 'Julie 6'},
          {key: 'James 7'},
          {key: 'Joel 8'},
          {key: 'John 9'},
          {key: 'Jillian 10'},
          {key: 'Jimmy 11'},
          {key: 'Julie 12'},
        ]}
        renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
      />
    </View>
  );
}

export default FlatListBasics;

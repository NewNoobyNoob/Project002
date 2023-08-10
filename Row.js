import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Row = ({name, phone}) => {
  return (
    <View style={styles.row}>
      <Text>{name}</Text>
      <Text>{phone}</Text>
    </View>
  );
};

export default Row

const styles = StyleSheet.create({
    row: {
        padding: 20,
        margin: 5,
        backgroundColor: "beige",
        width: 350,
        borderWidth: 5,
        borderColor: "blue",
        alignItems: "center",
        // fontColor: "white",
    },
});
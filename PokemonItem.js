import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

const PokemonItem = ({ name }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: moderateScale(10),
    borderBottomWidth: moderateScale(1),
    borderBottomColor: '#ccc',
  },
  text: {
    fontSize: moderateScale(16),
  },
});

export default PokemonItem;

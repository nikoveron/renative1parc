import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const HomeScreen = ({ navigation }) => {
  return (
    <ImageBackground source={require('./assets/pxfuel.jpg')} style={styles.backgroundImage} resizeMode="stretch">
      <View style={styles.container}>
        <Text style={styles.title}>Pokemones</Text>
        {/* <Image source={require('./assets/favicon.png')} style={styles.image} resizeMode="contain" /> */}
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Listado')}>
          <Icon name="list" size={20} color="white" />
          <Text style={styles.buttonText}>Ir al Listado</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  button: {
    flexDirection: 'row',
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 5,
  },
  backgroundImage: {
    flex: 1,
  },
});

export default HomeScreen;

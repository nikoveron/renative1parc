import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, ActivityIndicator, TextInput, StyleSheet, Image } from 'react-native';

const ListadoScreen = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [pokemonList, setPokemonList] = useState([]);
  const [pokemonImages, setPokemonImages] = useState({});
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    fetchPokemonList();
  }, []);

  const fetchPokemonList = async () => {
    try {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon');
      const data = await response.json();
      setPokemonList(data.results);
      fetchPokemonImages(data.results);
      setIsLoading(false);
    } catch (error) {
      console.log('Error fetching Pokemon list:', error);
    }
  };

  const fetchPokemonImages = async (pokemonList) => {
    try {
      const images = {};
      for (const pokemon of pokemonList) {
        const response = await fetch(pokemon.url);
        const pokemonData = await response.json();
        const pokemonImage = pokemonData.sprites.front_default;
        images[pokemon.name] = pokemonImage;
      }
      setPokemonImages(images);
    } catch (error) {
      console.log('Error fetching Pokemon images:', error);
    }
  };

  const handleDeletePokemon = (index) => {
    const updatedList = [...pokemonList];
    updatedList.splice(index, 1);
    setPokemonList(updatedList);
  };

  const renderPokemonItem = ({ item, index }) => {
    if (searchText !== '' && !item.name.includes(searchText.toLowerCase())) {
      return null;
    }

    const pokemonImage = pokemonImages[item.name];

    return (
      <View style={styles.itemContainer}>
        <Image source={{ uri: pokemonImage }} style={styles.itemImage} />
        <Text style={styles.itemText}>{item.name}</Text>
        <TouchableOpacity
          style={styles.deleteButton}
          onPress={() => handleDeletePokemon(index)}
        >
          <Text style={styles.deleteButtonText}>Eliminar</Text>
        </TouchableOpacity>
      </View>
    );
  };

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="blue" />
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Listado Screen</Text>
      <TextInput
        style={styles.searchInput}
        placeholder="Buscar..."
        value={searchText}
        onChangeText={setSearchText}
      />
      <FlatList
        data={pokemonList}
        renderItem={renderPokemonItem}
        keyExtractor={(item) => item.name}
        style={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  searchInput: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  list: {
    width: '100%',
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  itemImage: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  itemText: {
    flex: 1,
    fontSize: 16,
  },
  deleteButton: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: 'red',
    borderRadius: 5,
  },
  deleteButtonText: {
    color: 'white',
    fontSize: 12,
  },
});

export default ListadoScreen;

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './HomeScreen';
import ListadoScreen from './ListadoScreen';

const AppNavigator = createStackNavigator({
  Home: { screen: HomeScreen },
  Listado: { screen: ListadoScreen },
});

export default createAppContainer(AppNavigator);

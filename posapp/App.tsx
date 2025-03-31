import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {CartProvider} from './src/context/CartContext';
import HomeScreen from './src/screens/HomeScreen';
import ProductsScreen from './src/screens/ProductsScreen';
import CartScreen from './src/screens/CartScreen';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  return (
    <CartProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{title: 'POS System'}}
          />
          <Stack.Screen
            name="Products"
            component={ProductsScreen}
            options={{title: 'Product List'}}
          />
          <Stack.Screen
            name="Cart"
            component={CartScreen}
            options={{title: 'Your Cart'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </CartProvider>
  );
}

export default App;

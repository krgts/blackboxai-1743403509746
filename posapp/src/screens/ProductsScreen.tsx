import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import Button from '../components/common/Button';
import {useCart} from '../context/CartContext';

const products = [
  {id: '1', name: 'Product 1', price: 9.99},
  {id: '2', name: 'Product 2', price: 19.99},
  {id: '3', name: 'Product 3', price: 29.99},
];

const ProductsScreen = ({navigation}: any) => {
  const {addToCart, totalItems} = useCart();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Products</Text>
      <FlatList
        data={products}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View style={styles.productItem}>
            <Text style={styles.productName}>{item.name}</Text>
            <Text style={styles.productPrice}>${item.price.toFixed(2)}</Text>
            <Button
              title="Add to Cart"
              onPress={() => addToCart(item)}
              variant="secondary"
            />
          </View>
        )}
      />
      <Button
        title={`View Cart (${totalItems})`}
        onPress={() => navigation.navigate('Cart')}
      />
      <Button
        title="Go Back"
        onPress={() => navigation.goBack()}
        variant="secondary"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f9fa',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  productItem: {
    padding: 15,
    marginBottom: 10,
    backgroundColor: 'white',
    borderRadius: 5,
  },
  productName: {
    fontSize: 18,
    fontWeight: '600',
  },
  productPrice: {
    fontSize: 16,
    color: '#6c757d',
    marginVertical: 5,
  },
});

export default ProductsScreen;
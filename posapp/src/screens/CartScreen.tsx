import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import Button from '../components/common/Button';
import {useCart} from '../context/CartContext';

const CartScreen = ({navigation}: any) => {
  const {cartItems, totalItems, totalPrice, removeFromCart, clearCart} = useCart();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Cart ({totalItems})</Text>
      
      {cartItems.length === 0 ? (
        <View style={styles.emptyCartContainer}>
          <Text style={styles.emptyText}>Your cart is empty</Text>
          <Button
            title="Browse Products"
            onPress={() => navigation.navigate('Products')}
          />
        </View>
      ) : (
        <>
          <FlatList
            data={cartItems}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              <View style={styles.cartItem}>
                <Text style={styles.itemName}>{item.name}</Text>
                <Text style={styles.itemPrice}>${item.price.toFixed(2)} x {item.quantity}</Text>
                <Text style={styles.itemTotal}>${(item.price * item.quantity).toFixed(2)}</Text>
                <Button
                  title="Remove"
                  onPress={() => removeFromCart(item.id)}
                  variant="secondary"
                />
              </View>
            )}
          />
          <View style={styles.summary}>
            <Text style={styles.total}>Total: ${totalPrice.toFixed(2)}</Text>
            <Button
              title="Checkout"
              onPress={() => {
                clearCart();
                navigation.navigate('Home');
              }}
            />
          </View>
        </>
      )}

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
  emptyCartContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 18,
    marginBottom: 20,
    color: '#6c757d',
  },
  cartItem: {
    padding: 15,
    marginBottom: 10,
    backgroundColor: 'white',
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  itemName: {
    fontSize: 16,
    fontWeight: '600',
    flex: 2,
  },
  itemPrice: {
    fontSize: 14,
    color: '#6c757d',
    flex: 1,
    textAlign: 'right',
    marginRight: 10,
  },
  itemTotal: {
    fontSize: 16,
    fontWeight: '600',
    flex: 1,
    textAlign: 'right',
    marginRight: 10,
  },
  summary: {
    marginTop: 20,
    paddingTop: 20,
    borderTopWidth: 1,
    borderTopColor: '#dee2e6',
    alignItems: 'flex-end',
  },
  total: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default CartScreen;

import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Button from '../components/common/Button';

const HomeScreen = ({navigation}: any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>POS Application</Text>
      <View style={styles.buttonContainer}>
        <Button
          title="View Products"
          onPress={() => navigation.navigate('Products')}
        />
        <Button
          title="View Cart"
          onPress={() => navigation.navigate('Cart')}
          variant="secondary"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f9fa',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 40,
    textAlign: 'center',
  },
  buttonContainer: {
    width: '80%',
    alignSelf: 'center',
    gap: 10,
  },
});

export default HomeScreen;

import React from 'react';
import styles from '../assets/styles';

import { Text, TouchableOpacity } from 'react-native';


const City = () => {
  return (
    <TouchableOpacity style={styles.city}>
      <Text style={styles.cityText}>
        New York
      </Text>
    </TouchableOpacity>
  );
};



export default City;
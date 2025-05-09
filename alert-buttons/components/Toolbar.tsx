import React from 'react';
import { View, StyleSheet } from 'react-native';
import AlertButton from './AlertButton';



const Toolbar = () => {
    return (
        <View style={styles.container}>
            <AlertButton message="Button 1 pressed">Button 1</AlertButton>
            <AlertButton message="Button 2 pressed">Button 2</AlertButton>
            <AlertButton message="Button 3 pressed">Button 3</AlertButton>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      gap: 10,
      marginVertical: 20,
    },
  });

export default Toolbar;
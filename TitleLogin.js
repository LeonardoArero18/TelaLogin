import React from "react";
import { Text, StyleSheet } from "react-native";

export default props => <Text style={styles.formTitle}> Login no sistema </Text>
    

const styles = StyleSheet.create({
    formTitle:{
        fontSize: 36,
        fontWeight: 'bold',
        color: 'blueviolet',
        margin: 10,
      },
})

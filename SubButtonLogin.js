import React from "react";
import { Pressable, Text, StyleSheet, View} from "react-native";

export default props =>{
    return<>
        <View style={styles.subContainer}>
            <Pressable style={styles.subButton}>
                <Text style={styles.subTextButton}> Esqueci a senha </Text>
            </Pressable>
            <Pressable style={styles.subButton}>
                <Text style={styles.subTextButton}> Novo Usuario </Text>
            </Pressable>
        </View>
    </>
}

const styles = StyleSheet.create({
    subContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%',
      },
      subButton:{
        padding: 10
      },
      subTextButton:{
        color:'blueviolet'
      }
})

import React from "react";
import { TextInput, StyleSheet, Pressable, Text } from "react-native";
import { useState } from 'react';



import { auth } from '../../firebase.config';
import { signInWithEmailAndPassword } from 'firebase/auth'




export default props =>{

    const [userMail, setUserMail] = useState('')
    const [userPass, setUserPass] = useState('')


    function userLogin(){
        signInWithEmailAndPassword( auth, userMail, userPass)
            .then((userCredential) =>{
                const user = userCredential.user;
                alert('Login Complete');
                console.log(user);
            })
            .catch((error) =>{
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorMessage);
            })
    }

    return<>
        <TextInput style={styles.formInput}
            placeholder="E-mail"
            keyboardType="email-address"
            autoCapitalize='none'
            autoComplete='email'
            value={userMail}
            onChangeText={setUserMail}
        />
        <TextInput style={styles.formInput}
            placeholder='Senha'
            autoCapitalize='none'
            secureTextEntry
            value={userPass}
            onChangeText={setUserPass}
        />
        <Pressable style={styles.formButton} onPress={userLogin}>  
            <Text style ={styles.textButton}> Logar </Text>
        </Pressable>
    </>
}

const styles = StyleSheet.create ({
    formInput:{
        borderColor: 'blueviolet',
        borderWidth: 1,
        borderRadius: 10,
        fontSize: 22,
        width: '80%',
        padding: 10,
        margin: 10
    },
    formButton:{
        backgroundColor: 'blueviolet',
        width: '80%',
        margin: 10,
        padding: 10,
        borderRadius: 10,
        alignItems: 'center'
    },
    textButton:{
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold'
    }
})

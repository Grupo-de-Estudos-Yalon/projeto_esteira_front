import React from 'react'
import { Pressable, StyleSheet, Text } from 'react-native'

const Button = ({ labelButton, onpress }) => {
    return (
        <Pressable style={styles.button}
            onPress = {onpress}
        >
            <Text>{labelButton}</Text>
        </Pressable>
    )
}

export default Button

const styles = StyleSheet.create({
    button: {
        color: '#191414',
        fontFamily: 'OpenSans_400Regular',
        backgroundColor: '#1DB954',
        width: '375px',
        height: '32px',
        padding: '8px',
        justifyContent: 'center',
        alignItems: 'center'
    }
})
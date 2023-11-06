import React from 'react'
import { Pressable, StyleSheet, Text } from 'react-native'
import { SpotifyIcon } from '../../assets/icons/spotify'

const Button = ({ labelButton, onpress }) => {
    return (
        <Pressable style={styles.button}
            onPress = {onpress}
        >
            <SpotifyIcon/>
            <Text style={{marginRight: 'auto', fontFamily: 'OpenSans_700Bold'}}>{labelButton}</Text>
        </Pressable>
    )
}
export default Button

const styles = StyleSheet.create({
    button: {
        color: '#191414',
        backgroundColor: '#1DB954',
        width: '300px',
        marginBottom: '75px',
        borderRadius: '8px',
        maxHeight: '32px',
        paddingHorizontal: '16px',
        flex: '1',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    }
})
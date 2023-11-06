import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: '1',
        backgroundColor: '#191414',
        alignItems: 'center',
    },
    kanji: {
        fontFamily: 'NotoSansJP_400Regular',
        fontSize: '80px',
        textAlign: 'left',
        color: '#E0FFC2'
        
    },
    textoDuran: {
        flex: '1',
        marginTop: '80px',
        paddingHorizontal: '30px',
        color: '#1DB954',
        fontFamily: 'Montserrat_900Black',
        justifyContent: 'center',
        textAlign: 'justify'
    }
});

export default styles;

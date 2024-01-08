import { View, Text } from 'react-native';
import styles from './Style';
import Button from '../../src/components/Button';
export function HomeScreen() {


const redirecting = () => {
  window.open('http://localhost:3000/api/user/login', "_blank", "noreferrer");
}


    return (
      <View style={styles.container}>
        <Text style={styles.kanji}>速い</Text>
        <Text style={styles.textoDuran}>
          Para gerarmos suas playlists,
          precisamos que autorize nosso acesso à
          algumas funcionalidades de sua conta no Spotify
        </Text>
        <Button labelButton={"Login com Spotify"} onpress={redirecting}/>
      </View>
    );
  }
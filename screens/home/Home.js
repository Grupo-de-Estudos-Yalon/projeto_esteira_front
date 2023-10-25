import { View, Text } from 'react-native';
import styles from './Style';
import { Button } from 'react-native-web';
export function HomeScreen({ navigation }) {
    return (
      <View>
        <Text style={styles.text}>Hayai</Text>
        <Button
        title="Go to PlaylistReady"
        onPress={() => navigation.push('PlaylistReady')}
      />
      </View>
    );
  }
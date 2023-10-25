import { View, Text } from 'react-native';
import { Button } from 'react-native-web';
export function PlaylistReadyScreen() {
  return (
    <View>
      <Text>Sua Playlist esta pronta</Text>
      <Button
        title="Ir para playlist no spotify"
        onPress={() => navigation.push('PlaylistReady')}
      />
    </View>
  );
}

export default connect(state => ({ value: state.count }))(PlaylistReadyScreen)
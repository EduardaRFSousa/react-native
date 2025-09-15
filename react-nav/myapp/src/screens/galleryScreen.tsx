import { StatusBar } from 'expo-status-bar';
import { View, Text } from 'react-native';

export default function GalleryScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'blue' }}>
        <Text>Gallery Screen</Text>
        <StatusBar style='auto'></StatusBar>
    </View>
  )
}
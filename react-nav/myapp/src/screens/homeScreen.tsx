import { StatusBar } from 'expo-status-bar';
import { View, Text, Button } from 'react-native';

export default function HomeScreen({ navigation }: any) {
    function navToGallery() {
        navigation.navigate('Gallery');
    }
  
    return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'red' }}>
        <Text>Home Screen</Text>
        <Button 
            title='Go to Gallery'
            onPress={() => navToGallery()}
        />
        <StatusBar style='auto'></StatusBar>    
    </View>
  )
}
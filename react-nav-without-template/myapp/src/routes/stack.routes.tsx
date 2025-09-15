import { createStackNavigator } from "@react-navigation/stack";

const { Screen, Navigator } = createStackNavigator();
import HomeScreen from "../screens/homeScreen";
import GalleryScreen from "../screens/galleryScreen";

export function StackRoutes() {
    return (
        <Navigator>
            <Screen
                name="Home"
                component={HomeScreen}
                options={{ 
                    headerShown: false
                }}
            />
            <Screen
                name="Gallery"
                component={GalleryScreen}
                options={{ 
                    title: 'Welcome',
                    headerTintColor: 'blue'
                }}
            />
        </Navigator>
    )
}
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/homeScreen';
import GalleryScreen from '../screens/galleryScreen';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const { Navigator, Screen } = createBottomTabNavigator();

export function BottomTabsRoutes() {
    return (
        <Navigator>
            <Screen 
                name="Home" 
                component={HomeScreen} 
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons 
                            name='home'
                            color='red'
                            size={size}
                        />
                    )
                }}
            />
            <Screen 
                name="Gallery" 
                component={GalleryScreen} 
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons 
                            name='heart'
                            color='blue'
                            size={size}
                        />
                    )
                }}
            />
        </Navigator>
    );
}
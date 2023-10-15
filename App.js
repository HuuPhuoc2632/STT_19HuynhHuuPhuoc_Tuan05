import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Lab3a from './screen/Lab3a';
import Lab3b from './screen/Lab3b';


const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Lab3a" screenOptions={{headerShown: false}}>
        <Stack.Screen name="Lab3a" component={Lab3a} />
        <Stack.Screen name="Lab3b" component={Lab3b} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}



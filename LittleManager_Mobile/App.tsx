import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {
  NavigationContainer
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginPage from './Pages/LoginPage';
import HomePage from './Pages/HomePage'
//import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

const Stack = createNativeStackNavigator();
//const Tab = createMaterialBottomTabNavigator();



export default function App() {
  
  const LoginScreen = ({ navigation }: { navigation: any }) => {
    return <LoginPage navigation={navigation}></LoginPage>;
  };

  const HomeScreen = () => {
    return <HomePage></HomePage>;
  };
  return (
    <NavigationContainer>
    <Stack.Navigator
      screenOptions={{headerStyle: { backgroundColor: "#9CBA7F" }, }}
    >
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ title: "welcome" }}
      />

      <Stack.Screen
      name="Home"
      component={HomeScreen}
      options={{ title: "Home" }}/>

      
          
    </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

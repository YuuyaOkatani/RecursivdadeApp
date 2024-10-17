import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import PageOne from './pages/pageOne';
import PageTwo from './pages/pageTwo';

export default function App() {

  const Stack = createStackNavigator(); 

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="PageOne">
        <Stack.Screen name= "PageOne" component={PageOne} />
        <Stack.Screen name= "PageTwo" component={PageTwo} />
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

import * as React from 'react';
import { View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';


import HomeScreen from './screens/HomeScreen'
import SearchScreen from './screens/SearchScreen'
import SettingsScreen from './screens/SettingsScreen'
import DestinationScreen from './screens/DestinationScreen'

function FeedScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        title="Go to Settings"
        onPress={() => navigation.navigate('Settings')}
      />
    </View>
  );
}


const Tab = createBottomTabNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator
    screenOptions={({route}) => ({
      tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if(route.name === 'Home'){
          iconName = focused ? 'ios-information-circle': 'ios-information-circle-outline';
      } else if(route.name ==='Search') {
          iconName = focused ? 'search-circle': 'search';
      }else if(route.name === 'Settings'){
          iconName = focused ? 'ios-list-box': 'ios-list';
      }
      return <Ionicons name={iconName} size={size} color={color} />
    },
   })}
   
   tabBarOptions={{
    activeTintColor: 'white',
    inactiveTintColor: 'green',
    /* showLabel: false,*/
    style: { width: '90%',margin: 20, height:80,backgroundColor: 'lightgreen',borderWidth:1,borderColor: 'lightgreen' , borderRadius:'10px', paddingTop:10}
    }}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode='none'>
        <Stack.Screen name="Home" component={HomeTabs} />
        <Stack.Screen name="Destination" component={DestinationScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Cat from './Cat';
import ScrollViewBasics from './ScrollViewBasics';
import FlatListBasics from './FlatListBasics';
import SectionListBasics from './SectionListBasics';
import Home from './Home';
import StateBasics from './StateBasics';

const Stack = createStackNavigator();

const NavigatorStack = ({ navigation }) => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home Component"
          component={Home}
          options={{ title: 'Home' }}
        />
        <Stack.Screen
          name="Cat Component"
          component={Cat}
          options={{ title: 'Cat Component' }}
        />
        <Stack.Screen name="Scroll View Component" component={ScrollViewBasics} />
        <Stack.Screen name="Flat List Component" component={FlatListBasics} />
        <Stack.Screen name="Section List Component" component={SectionListBasics} />
        <Stack.Screen name="State Basics Component" component={StateBasics} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavigatorStack;
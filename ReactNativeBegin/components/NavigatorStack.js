import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Cat from './Cat';
import ScrollViewBasics from './ScrollViewBasics';
import FlatListBasics from './FlatListBasics';
import SectionListBasics from './SectionListBasics';

const Stack = createStackNavigator();

const NavigatorStack = ({ navigation }) => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Cat Component"
          component={Cat}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen name="Scroll View Component" component={ScrollViewBasics} />
        <Stack.Screen name="Flat List Component" component={FlatListBasics} />
        <Stack.Screen name="Section List Component" component={SectionListBasics} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavigatorStack;
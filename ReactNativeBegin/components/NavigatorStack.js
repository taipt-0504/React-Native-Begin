import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Cat from './Cat';
import ScrollViewBasics from './ScrollViewBasics';
import FlatListBasics from './FlatListBasics';
import SectionListBasics from './SectionListBasics';
import Home from './Home';
import StateBasics from './StateBasics';
import GenerateColor from './GenerateColor';
import ColorAdjust from './ColorAdjust';
import RestaurantSearch from './RestaurantSearch';
import ResultDetail from './ResultDetail';
import ResultItem from './ResultItem';
import BlogIndex from './BlogIndex';
import ShowBlogPost from './ShowBlogPost';

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
        <Stack.Screen name="Color Generator Component" component={GenerateColor} />
        <Stack.Screen name="Color Adjust Component" component={ColorAdjust} />
        <Stack.Screen name="Restaurant Search Component" component={RestaurantSearch} />
        <Stack.Screen name="Restaurant Detail Component" component={ResultDetail} />
        <Stack.Screen name="Blog Component" component={BlogIndex} />
        <Stack.Screen name="Blog Detail Component" component={ShowBlogPost} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavigatorStack;
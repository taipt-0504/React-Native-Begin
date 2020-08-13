import React, { useContext } from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
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
import BlogIndex from './BlogIndex';
import ShowBlogPost from './ShowBlogPost';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import BlogCreate from './BlogCreate';
import BlogEdit from './BlogEdit';

const Stack = createStackNavigator();

const NavigatorStack = () => {
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
        <Stack.Screen
          name="Blog Component"
          component={BlogIndex}
          options={({ navigation }) => ({
            headerRight: () => (
              <TouchableOpacity
                onPress={() => navigation.navigate('Blog Create Component')}
              >
                <Icon
                  name="plus-circle"
                  style={{ fontSize: 24, paddingRight: 5 }}
                />
              </TouchableOpacity>
            )
          })}
        />
        <Stack.Screen
          name="Blog Detail Component"
          component={ShowBlogPost}
          options={({ navigation, route }) => ({
            headerRight: () => {
              let { id } = route.params;
              return (
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('Blog Edit Component', {id})
                  }}
                >
                  <Icon
                    name="edit"
                    style={{ fontSize: 24, paddingRight: 5 }}
                  />
                </TouchableOpacity>
              )
            }
          })}
        />
        <Stack.Screen name="Blog Create Component" component={BlogCreate} />
        <Stack.Screen name="Blog Edit Component" component={BlogEdit} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavigatorStack;
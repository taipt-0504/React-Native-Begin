import 'react-native-gesture-handler';
import React from 'react';
import Cat from "./components/Cat";
import FlatListBasics from "./components/FlatListBasics";
import ScrollViewBasics from "./components/ScrollViewBasics";
import { View, ScrollView } from 'react-native';
import SectionListBasics from './components/SectionListBasics';
import { NavigationContainer } from "@react-navigation/native";
import NavigatorStack from './components/NavigatorStack';

const App = () => {
  return (
    <NavigatorStack />
    // <View>
    //     <Cat content="This is content props pass from parent to component"></Cat>
    // </View>
    // <FlatListBasics />
    // <ScrollViewBasics />
  );
}

export default App;
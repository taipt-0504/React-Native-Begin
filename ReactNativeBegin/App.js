import 'react-native-gesture-handler';
import React from 'react';
import Cat from "./components/Cat";
import FlatListBasics from "./components/FlatListBasics";
import ScrollViewBasics from "./components/ScrollViewBasics";
import { View, ScrollView } from 'react-native';
import SectionListBasics from './components/SectionListBasics';
import { NavigationContainer } from "@react-navigation/native";
import NavigatorStack from './components/NavigatorStack';
import Home from './components/Home';
import StateBasics from './components/StateBasics';
import GenerateColor from './components/GenerateColor';
import ColorAdjust from './components/ColorAdjust';

const App = () => {
  return (
    // <ColorAdjust />
    // <StateBasics />
    // <Home />
    // <GenerateColor />
    <NavigatorStack />
    // <View>
    //     <Cat content="This is content props pass from parent to component"></Cat>
    // </View>
    // <FlatListBasics />
    // <ScrollViewBasics />
  );
}

export default App;
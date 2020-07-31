import React from 'react';
import Cat from "./components/Cat";
import FlatListBasics from "./components/FlatListBasics";
import ScrollViewBasics from "./components/ScrollViewBasics";
import { View, ScrollView } from 'react-native';

const App = () => {
  return (
    // <View>
    //     <Cat content="This is content props pass from parent to component"></Cat>
    // </View>
    <FlatListBasics />
    // <ScrollViewBasics />
  );
}

export default App;
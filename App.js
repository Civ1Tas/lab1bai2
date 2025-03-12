import React from "react";
import { View, StyleSheet } from "react-native";
import SectionView from "./components/SectionView";
import eventInfo from "./src/data";

const App = () => {
  return (
    <View style={styles.container}>
      <SectionView sections={eventInfo} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F2F2",
  },
});

export default App;

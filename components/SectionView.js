import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import ScheduleCard from "./ScheduleCard";
import HotelCard from "./HotelCard";

const SectionView = ({ sections }) => {
  // Hàm render từng section
  const renderSection = ({ item }) => (
    <View>
      <Text style={styles.sectionTitle}>{item.title}</Text>
      <FlatList
        data={item.data}
        keyExtractor={(child, index) => index.toString()}
        renderItem={renderChild}
      />
    </View>
  );

  // Hàm render từng mục trong section
  const renderChild = ({ item }) => {
    if (item.location) {
      return <ScheduleCard schedule={item} />;
    } else {
      return <HotelCard hotel={item} />;
    }
  };

  return (
    <FlatList
      data={sections}
      keyExtractor={(item, index) => index.toString()}
      renderItem={renderSection}
      contentContainerStyle={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
});

export default SectionView;

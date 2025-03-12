import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const ScheduleCard = ({ schedule }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{schedule.location}</Text>
      <Text style={styles.text}>Thời gian: {schedule.time}</Text>
      <Text style={styles.text}>Phương tiện: {schedule.transport}</Text>
      <Text style={styles.text}>Thời gian: {schedule.duration}</Text>
      <Image source={schedule.image} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  text: {
    fontSize: 14,
    marginBottom: 5,
  },
  image: {
    width: "100%",
    height: 150,
    borderRadius: 8,
    marginTop: 10,
  },
});

export default ScheduleCard;

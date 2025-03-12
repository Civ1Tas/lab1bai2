import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const HotelCard = ({ hotel }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{hotel.name}</Text>
      <Text style={styles.text}>Giờ mở cửa: {hotel.openTime}</Text>
      <Text style={styles.text}>Địa điểm: {hotel.address}</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>CHI TIẾT</Text>
      </TouchableOpacity>
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
  button: {
    backgroundColor: "#007BFF",
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default HotelCard;

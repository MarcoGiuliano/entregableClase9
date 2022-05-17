import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { colores } from "../Styles/colors";

const Header = ({ title = "E-commerce" }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colores.darkBlue,
    height: 80,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    fontFamily: "Poppins",
    color: "white",
  },
});

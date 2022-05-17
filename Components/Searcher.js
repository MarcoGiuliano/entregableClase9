import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { colores } from "../Styles/colors";

const Searcher = ({ children }) => {
  return <View style={styles.searcherContainer}>{children}</View>;
};
// const Searcher = ({ children, additionalStyles }) => {
//   return (
//     <View style={{ ...styles.searcherContainer, ...additionalStyles }}>
//       {children}
//     </View>
//   );
// };

export default Searcher;

const styles = StyleSheet.create({
  searcherContainer: {
    backgroundColor: colores.ligthBlue,
    width: "90%",
    height: 120,
    marginVertical: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    borderRadius: 12,
  },
});

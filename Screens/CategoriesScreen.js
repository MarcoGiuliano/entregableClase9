import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Button,
} from "react-native";
import React, { useState, useEffect } from "react";
import Header from "../Components/Header";
import Searcher from "../Components/Searcher";
import { colores } from "../Styles/colors";
import List from "../List";
import { CATEGORIES } from "../data/categories";
import { Entypo } from "@expo/vector-icons";

const CategoriesScreen = ({ navigation }) => {
  const [input, setinput] = useState("");
  const [categoriesFilter, setcategoriesFilter] = useState(CATEGORIES);

  useEffect(() => {
    if (input === "") setcategoriesFilter(CATEGORIES);
    else {
      setcategoriesFilter(
        categoriesFilter.filter((category) =>
          category.category.toLowerCase().includes(input)
        )
      );
    }
  }, [input]);

  const handleBorrar = () => {
    setinput("");
  };

  const selectCategory = (category) => {
    // handleCategory(category);
    navigation.navigate("Products");
  };

  return (
    <>
      <Header />
      <View style={styles.container}>
        {/* <Searcher additionalStyles={{ backgroundColor: colores.ligthBlue }}> */}
        <Searcher additionalStyles={{ backgroundColor: colores.ligthBlue }}>
          <TextInput
            value={input}
            onChangeText={setinput}
            keyboardType="default"
            style={styles.input}
          />
          <TouchableOpacity onPress={handleBorrar}>
            <Entypo name="erase" size={24} color="black" />
          </TouchableOpacity>
        </Searcher>
        <View style={styles.listContainer}>
          <List data={categoriesFilter} onPress={selectCategory} />
        </View>
      </View>
    </>
  );
};

export default CategoriesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
  },
  input: {
    width: "80%",
    padding: 10,
    margin: 10,
    backgroundColor: "black",
    color: "white",
    height: 50,
  },
});

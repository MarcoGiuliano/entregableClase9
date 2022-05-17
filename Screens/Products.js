import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Button,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import React, { useState, useEffect } from "react";
import Header from "../Components/Header";
import Searcher from "../Components/Searcher";
import List from "../List";
import { CATEGORIES } from "../data/categories";
import { Entypo } from "@expo/vector-icons";
import { PRODUCTS } from "../data/products";
import { colores } from "../Styles/colors";

const Products = ({ category = { id: 1, category: "Ropa" }, navigation }) => {
  const [input, setinput] = useState("");
  const [initialProducts, setinitialProducts] = useState([]);
  const [productFilter, setproductFilter] = useState([]);

  const handleBorrar = () => {
    setinput("");
  };

  useEffect(() => {
    if (initialProducts.length !== 0) {
      if (input === "") setproductFilter(initialProducts);
      else {
        setproductFilter(
          initialProducts.filter((product) =>
            product.description.toLowerCase().includes(input)
          )
        );
      }
    }
  }, [input, initialProducts]);

  useEffect(() => {
    const productosIniciales = PRODUCTS.filter(
      (product) => product.category === category.id
    );
    setinitialProducts(productosIniciales);
  }, []);

  const handleDetailProduct = () => {
    navigation.navigate("Details");
  };

  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <Header title={category.category} />
      <View style={styles.container}>
        {/* <Searcher additionalStyles={{ backgroundColor: colores.ligthBlue }}> */}
        <Searcher additionalStyles={{ backgroundColor: colores.ligthBlue }}>
          <TextInput
            value={input}
            onChangeText={setinput}
            keyboardType="default"
            style={styles.input}
            placeholder="Ingrese producto a buscar"
          />
          <TouchableOpacity onPress={handleBorrar}>
            <Entypo name="erase" size={24} color="black" />
          </TouchableOpacity>
        </Searcher>
        <View style={styles.listContainer}>
          <List
            data={productFilter}
            itemType={"Producto"}
            onPress={handleDetailProduct}
          />
        </View>
        {/* <Button title="Volver" onPress={() => handleCategory(null)} /> */}
        <Button title="Volver" onPress={handleBack}></Button>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Products;
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

import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  Button,
} from "react-native";
import React, { useState, useEffect } from "react";
import Header from "../Components/Header";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const DetailScreen = ({
  product = {
    id: 8,
    category: 4,
    description: "Product 8",
    price: 80.63,
    image: "https://picsum.photos/200/300",
  },
}) => {
  const [orientation, setorientation] = useState("portrait");

  useEffect(() => {
    setorientation(windowHeight > windowWidth ? "portrait" : "landscape");
  }, [windowWidth, windowHeight]);

  return (
    <View
      style={
        orientation === "portrait"
          ? styles.container
          : styles.containerHorizontal
      }
    >
      <Header />
      <Image
        source={{ uri: product.image }}
        style={styles.image}
        resizeMode="cover"
      />
      <Text>{product.description}</Text>
      <Text>$ {product.price}</Text>
      {/* <Button onPress={() => handleProduct(null)} title="Volver" /> */}
    </View>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    width: "100%",
    alignItems: "center",
  },
  containerHorizontal: {
    flex: 1,
    flexDirection: "row",
  },
  image: {
    width: 0.8 * windowWidth,
    height: 300,
    marginTop: 40,
  },
});

import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import CategoriesScreen from "./Screens/CategoriesScreen";
import { useState } from "react";
import Products from "./Screens/Products";
import { useFonts } from "expo-font";
import DetailScreen from "./Screens/DetailScreen";
import { SafeAreaView } from "react-native-safe-area-context";
import MainNavigator from "./navigation/Shop";

export default function App() {
  // const [categorySelected, setcategorySelected] = useState(null);
  // const [productSelected, setproductSelected] = useState(null);

  // const handleCategory = (category) => {
  //   setcategorySelected(category);
  // };

  // const handleProduct = (product) => {
  //   setproductSelected(product);
  // };

  const [loaded] = useFonts({
    Poppins: require("./assets/fonts/Poppins-Medium.ttf"),
  });

  if (!loaded) {
    return <ActivityIndicator />;
  }

  return (
    <MainNavigator />
    // <View style={styles.container}>
    //   {!categorySelected ? (
    //     <CategoriesScreen handleCategory={handleCategory} />
    //   ) : !productSelected ? (
    //     <Products
    //       category={categorySelected}
    //       handleProduct={handleProduct}
    //       handleCategory={handleCategory}
    //     />
    //   ) : (
    //     <DetailScreen product={productSelected} handleProduct={handleProduct} />
    //   )}
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

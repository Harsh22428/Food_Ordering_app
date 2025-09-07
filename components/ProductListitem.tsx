import { View, Image, Text, StyleSheet, TouchableOpacity, Pressable } from "react-native";
import Colors from "@/constants/Colors";
import products from "@/assets/data/product";
import { Product } from "@/types/types";
import { Link, useSegments } from "expo-router";
import { router } from "expo-router";

type ProductListitemProps = {
  product: Product;
};
export const defaultPizzaImage =
  "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/extravaganzza.png";
const ProductListItem = ({ product }: ProductListitemProps) => {
  const segments=useSegments();
  return (
    <Link href={`${segments[0]}/menu/${product.id}`} asChild>
    {/* /* <TouchableOpacity style={styles.container} onPress={() => router.push('/product')}> */}

    {/* // touch + able + opacity => touch karne par opacity backgriund me kam hoyi hai we can use instead of <Link>
    */ }
    <Pressable style={styles.container} >

      {/* <View style={styles.container}> */}
        <Image
          source={{ uri: product.image || defaultPizzaImage }}
          style={styles.image}
          resizeMode="contain"
          />
        <Text style={styles.title}>{product.name}</Text>
        <Text style={styles.price}>{product.price}</Text>
      {/* </View> */}
          </Pressable>
    {/* /* </TouchableOpacity> */ }
     </Link>
  );
};
export default ProductListItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 20,
    flex: 1,
  },
  image: {
    width: "100%",
    aspectRatio: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    marginVertical: 10,
    paddingLeft: 10,
  },
  price: {
    color: Colors.light.tint,
    fontWeight: "bold",
    paddingLeft: 10,
  },
});

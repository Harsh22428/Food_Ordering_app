import { useLocalSearchParams, useRouter } from "expo-router";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import { Stack } from "expo-router";
import products from "@/assets/data/product";
import { defaultPizzaImage } from "@/components/ProductListitem";
import { useState } from "react";
import Button from "@/components/Button";
import { useCart } from "@/providers/CartProvider";
import { PizzaSize } from "@/types/types";
import { ScrollView } from "react-native";
import { Link } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";
import Colors from "@/constants/Colors";


function ProductDetailsScreen() {
  const [selectedSize, setSelectedSize]=useState<PizzaSize>('M')
  const { id } = useLocalSearchParams();
  const router=useRouter();
  const {addItem}=useCart()
  const product = products.find((p) => p.id.toString() == id);
  const sizes:PizzaSize[] = ["S", "M", "L", "XL"];
  // const addToCart=()=>{
  //   if(!product){
  //     return ;
  //   }
    // addItem(product,selectedSize)
    // router.push('/cart')
  
  // if (!product) {
  //   return <Text>Product not found</Text>;
  // }
  return (
    <ScrollView style={styles.container}>
      <Stack.Screen
            options={{
              title:'Menu',
              headerRight: () => (
                <Link href={`/(admin)/menu/create?id=${id}`} asChild>
                  <Pressable>
                    {({ pressed }) => (
                      <FontAwesome
                        name="pencil"
                        size={25}
                        color={Colors.light.tint}
                        style={{ marginRight: 10, opacity: pressed ? 0.5 : 1 }}
                      />
                    )}
                  </Pressable>
                </Link>
              )
            }}
         />
      <Stack.Screen
        options={{ title: product.name }}
      />
      <Image
        source={{ uri: product.image || defaultPizzaImage }}
        style={styles.image}
      />
      <Text style={styles.title}>{product.name}</Text>
      <Text style={styles.price}>${product.price}</Text>
     
    </ScrollView>
  );
}

export default ProductDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  image: {
    width: "100%",
    aspectRatio: 1,
  },
  price: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop:'auto'
  },
  title:{
    fontSize:20,
    fontWeight:'bold'
  }
});

import { useLocalSearchParams, useRouter } from "expo-router";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import { Stack } from "expo-router";
import products from "@/assets/data/product";
import { defaultPizzaImage } from "@/components/ProductListitem";
import { useState } from "react";
import Button from "@/components/Button";
import { useCart } from "@/providers/CartProvider";
import { PizzaSize } from "@/types/types";


function ProductDetailsScreen() {
  const [selectedSize, setSelectedSize]=useState<PizzaSize>('M')
  const { id } = useLocalSearchParams();
  const router=useRouter();
  const {addItem}=useCart()
  const product = products.find((p) => p.id.toString() == id);
  const sizes:PizzaSize[] = ["S", "M", "L", "XL"];
  const addToCart=()=>{
    if(!product){
      return ;
    }
    addItem(product,selectedSize)
    router.push('/cart')
   console.log("Adding to cart size "+selectedSize)
  }
  if (!product) {
    return <Text>Product not found</Text>;
  }
  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{ title: product.name, headerTitleAlign: "center" }}
      />
      <Image
        source={{ uri: product.image || defaultPizzaImage }}
        style={styles.image}
      />
      <Text>Select the Size</Text>
      <View style={styles.sizes}>
        {sizes.map((size) => (
          <Pressable onPress={()=>setSelectedSize(size)} key={size} style={[styles.size,{backgroundColor:selectedSize===size?'blue':'gainsboro'}]}>
            <Text style={[styles.sizeText,{color:selectedSize===size?'black':'white'}]}>{size}</Text>
          </Pressable>
        ))}
      </View>
      <Text style={styles.price}>${product.price}</Text>
      <Button onPress={addToCart} text="Add to Cart"/>
    </View>
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
  sizes: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical:10
  },
  size: {
    backgroundColor:'gainsboro',
    width:50,
    borderRadius:25,
    alignItems:'center',
    justifyContent:'center',
    aspectRatio:1
  },
  sizeText: {
    fontSize: 20,
    fontWeight: "500",
  },
});

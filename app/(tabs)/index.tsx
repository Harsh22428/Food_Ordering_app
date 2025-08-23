import { StyleSheet, FlatList, Image } from "react-native";
import ProductListItem from "@/components/ProductListitem";
import EditScreenInfo from "@/components/EditScreenInfo";
import { Text, View } from "@/components/Themed";
import { Product } from "@/types/types";
import products from "@/assets/data/product";

// Normally render a single component mean showing single image of pizza take from multiple data of images


// const product=products[1]
// export  function TabOneScreen(){
// return (
//   <View style={styles.container}>
//  <Image source={{uri:product.image}} style={styles.image} />
//  <Text style={styles.title}>{product.name}</Text>
//  <Text style={styles.price}>${product.price}</Text>
//   </View>
// )
// }




// It is Component based rendering when a compoent is declare in different components folder and then render it
export default function MenuScreeen() {
  return (
    <View>
      {/* It is type of map renderiing where data take the data from the products list and render it taking every image */}
      <FlatList
        // FlatList is use for infinite srcolling in app
        data={products}
        renderItem={({ item }) => <ProductListItem product={item} />}
        numColumns={2}
        contentContainerStyle={{ gap: 10, padding: 10 }}
        // renderItem take a function
      />


       {/* It is rendering of compoent by selceting the component  */}

       
      {/* <View>
        <ProductListItem product={products[5]} />
        <ProductListItem product={products[1]} />
      </View> */}
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   title: {
//     fontSize: 20,
//     fontWeight: "bold",
//   },
//   separator: {
//     marginVertical: 30,
//     height: 1,
//     width: "80%",
//   },
// });

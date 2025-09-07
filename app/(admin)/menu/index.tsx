import { StyleSheet, FlatList, Image } from "react-native";
import ProductListItem from "@/components/ProductListitem";

import { Text, View } from "@/components/Themed";
import { Product } from "@/types/types";
import products from "@/assets/data/product";

export default function MenuScreeen() {

  return (
          <FlatList 
        data={products}
        renderItem={({ item }) => <ProductListItem product={item} />}
        numColumns={2}
        contentContainerStyle={{ gap: 10, padding: 10}}
        columnWrapperStyle={{gap:10}}
       />
  )
}
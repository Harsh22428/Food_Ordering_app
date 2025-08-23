import { View, Image, Text, StyleSheet } from "react-native" 
import Colors from "@/constants/Colors";
import products from "@/assets/data/product";
import { Product } from "@/types/types";
type ProductListitemProps={
product:Product
}
export const defaultPizzaImage='https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/extravaganzza.png'
const ProductListItem = ({ product }:ProductListitemProps) => {
    return (
        <View>
            <Image source={{ uri: product.image || defaultPizzaImage }} style={styles.image} />
            <Text style={styles.title }>{product.name}</Text>
            <Text style={styles.price}>{product.price}</Text>

        </View>
    )
};
export default ProductListItem;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 20,
        flex:1
    },
    image: {
        width: "100%",
        aspectRatio: 1,
    },
    title: {
        fontSize:18,
        fontWeight: '600',
        marginVertical: 10
    },
    price: {
        color: Colors.light.tint,
        fontWeight:'bold'
    }
})
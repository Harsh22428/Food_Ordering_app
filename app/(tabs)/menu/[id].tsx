import { useLocalSearchParams } from "expo-router";
import { View ,Text, StyleSheet} from "react-native";

 function ProductDetailsScreen() {
  const {id}=useLocalSearchParams()
  return (
    <View style={style.container}>
      <Text>
      product for the id is :{id}
      </Text>
      </View>
  )
}

export default ProductDetailsScreen;

const style=StyleSheet.create({
container:{
  flex:1,
  alignItems:'center',
  justifyContent:'center',
}

})
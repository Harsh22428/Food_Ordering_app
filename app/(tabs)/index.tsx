import { StyleSheet ,FlatList} from 'react-native';
import ProductListitem from '@/components/ProductListitem';
import EditScreenInfo from '@/components/EditScreenInfo';
import product from '@/assets/data/product';
import { Text, View} from '@/components/Themed';
import { Product } from '@/types/types';

export default function MenuScreeen() {
  return (
    <FlatList
    // FlatList is use for infinite srcolling in app
    data={product}
    renderItem={({item})=><ProductListitem product={item}/>}
    numColumns={2}
    contentContainerStyle={{gap:10,padding:10}}
    // renderItem take a function
    />
    // // <View > 
    //   {/* <ProductListitem product={product[5]}/>
    //   <ProductListitem product={product[1]}/> */}
    
    // // </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   title: {
//     fontSize: 20,
//     fontWeight: 'bold',
//   },
//   separator: {
//     marginVertical: 30,
//     height: 1,
//     width: '80%',
//   },
// });

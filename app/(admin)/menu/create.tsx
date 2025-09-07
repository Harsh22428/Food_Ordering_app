import { View, Text,StyleSheet ,TextInput,Image, ScrollView, Alert} from 'react-native'
import { Stack, useLocalSearchParams } from 'expo-router';
import React, { useState } from 'react'
import Colors from '@/constants/Colors';
import Button from '@/components/Button';
import { defaultPizzaImage } from '@/components/ProductListitem';
import * as ImagePicker from 'expo-image-picker';
const CreateProductScreen = () => {
    const [name,setName]=useState('');
    const [price,setPrice]=useState('');
    const [error,setError]=useState('');
    const [image,setImage]=useState<string | null>(null)
    const {id}=useLocalSearchParams();
    const isUpdating=!!id
    const resetFields=()=>{
        setName('');
        setPrice('')
    }
    const validateInput=()=>{
        setError('')
        if(!name){
            setError('Name is required')
            return false;
        }
        if(!price){
            setError('Price is required')
            return false;
        }
      if(isNaN(parseFloat(price))){
        setError('Price is not a number')
        return false;
      }
      return true;
    }
    const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images', 'videos'],
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };
  const onDelete=()=>{
    console.warn('DELETE!!!!')
  }
  const confirmDelete=()=>{
   Alert.alert('Confirm','Are You sure you want to delete this product',[
    {
    text:'Cancel',
    },
    {
        text:'Delete',
        style:'destructive',
        onPress:onDelete
    }
])
  }
    const onSubmit=()=>{
        if(isUpdating){
            onUpdateCreate();
        }
        else{
            onCreate();
        }
    }
    const onCreate=()=>{
        if(!validateInput){
            return ;
        }
        console.warn('Creating Product: ',name);

        // saving the database

        resetFields();
    }
    const onUpdateCreate=()=>{
        if(!validateInput){
            return;
        }
        console.warn('Updating product',name)
    }
  return (
    <ScrollView style={styles.container}>
        <Stack.Screen options={{title:isUpdating?'Update Product':'Create Product'}}/>
        <Image 
        source={{uri:image || defaultPizzaImage}}
        style={styles.image}
        />
        <Text onPress={pickImage} style={styles.textButton}>
         Select Image
        </Text>
      <Text style={styles.label}>Name</Text>
      <TextInput
        value={name}
        onChangeText={setName}
        placeholder="Name"
        style={styles.input}
      />

      <Text style={styles.label}>Price ($)</Text>
      <TextInput
        value={price}
        onChangeText={setPrice}
        placeholder="9.99"
        style={styles.input}
        keyboardType="numeric"
      />
      <Text style={{ color: 'red' }}>{error}</Text>
      <Button onPress={onSubmit} text={isUpdating?'Update':'Create'}/>
      {isUpdating && (<Text onPress={confirmDelete} style={styles.textButton}>Delete</Text>)}
    </ScrollView>
  )
}

export default CreateProductScreen;

const styles=StyleSheet.create({
    container: {
    flex: 1,
    // justifyContent: 'center',
    padding: 10,
  },
  image: {
    width: '50%',
    aspectRatio: 1,
    alignSelf: 'center',
  },
  textButton: {
    alignSelf: 'center',
    fontWeight: 'bold',
    color: Colors.light.tint,
    marginVertical: 10,
  },

  input: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    marginTop: 5,
    marginBottom: 20,
  },
  label: {
    color: 'gray',
    fontSize: 16,
  },
})
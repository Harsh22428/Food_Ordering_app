import { Link } from "expo-router";
import { View } from "react-native";
import Button from "@/components/Button";

const index = () => {
  return (
    <View style={{flex:1,justifyContent:'center',padding:10}}> 
      <Link href={"/(user)" as any} asChild>
      <Button text="User" />
      </Link>
      <Link href={'/(admin)' as any} asChild>
      <Button text="Admin" />
      </Link>
      <Link href={'/signIn' as any} asChild>
      <Button text="Signin" />
      </Link>
      
    </View>
  );
};
export default index;
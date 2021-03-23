import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TextInput} from 'react-native';

export default function App() {
  return (
    <ScrollView>
    <View style={styles.container}>
    <Image style = {{width: 400, 
      height: 200}}
      source = {{uri: "https://mk0saloodoi0q2rtgmna.kinstacdn.com/wp-content/uploads/2020/08/transportation-mode.png"}}></Image>

      <TextInput style = {{height: 80, 
       borderColor:'white',
       borderWidth: 40}} 
       placeholder = "Transportation" 
       value = "  WELCOME TO PHILIPPINES PUBLIC TRASPORTATION APP"/>

      <Text style ={{height: 25, 
        borderColor: 'yellow', 
        borderWidth: 15,
        marginTop: 20}} 
        >USERNAME:</Text>

      <Text style ={{height: 25, 
        borderColor: 'red', 
        borderWidth: 15,
        marginBottom: 20}} 
        >PASSWORD:</Text>

      
    </View>
    <Text style ={{height: 15, 
      borderColor: 'skyblue', 
      borderWidth: 10, 
      marginTop: 20}} 
      > Create Account </Text>


      <TextInput style = {{height: 15, 
        borderColor:'white', 
        borderWidth: 1, 
        marginTop: 290}} 
        placeholder = "Transportation" value ="FEEDBACK/RATING"/>

     <TextInput style = {{height: 15, 
        borderColor:'white', 
        borderWidth: 1, 
        marginTop: 10}} 
        placeholder = "Transportation" value ="EXIT/QUIT"/>
      

     <TextInput style = {{height: 80, 
       borderColor:'white',
       borderWidth: 40,
       marginTop: 20}} 
       placeholder = "Transportation" 
       value = "                                           TRICYCLE                                    "/>

      <Image style = {{width: 400, 
      height: 200}}
      source = {{uri: "https://nomadicalsabbatical.com/wp-content/uploads/2012/11/Philippine-tricycle.jpg"}}></Image>

      
     <TextInput style = {{height: 80, 
       borderColor:'white',
       borderWidth: 40,
       marginTop: 20}} 
       placeholder = "Transportation" 
       value = "                                            BICYCLE                                    "/>

      <Image style = {{width: 400, 
      height: 200}}
      source = {{uri: "https://files01.pna.gov.ph/category-list/2020/08/30/053a7562.jpg"}}></Image>


     <TextInput style = {{height: 80, 
       borderColor:'white',
       borderWidth: 40,
       marginTop: 20}} 
       placeholder = "Transportation" 
       value = "                                                TAXI                                    "/>

      <Image style = {{width: 400, 
      height: 200}}
      source = {{uri: "https://images.summitmedia-digital.com/spotph/images/2019/07/29/plus-pipty-1564395218.jpg"}}></Image>

      <TextInput style = {{height: 80, 
       borderColor:'white',
       borderWidth: 40,
       marginTop: 20}} 
       placeholder = "Transportation" 
       value = "                                           JEEPNEY                                    "/>

      <Image style = {{width: 400, 
      height: 200}}
      source = {{uri: "https://images.squarespace-cdn.com/content/v1/508da03be4b0d28844ddf21c/1479301999170-CL6H8CTM6478G16WAOEA/ke17ZwdGBToddI8pDm48kCnSzGI6GQRZUdKrlKSpdG0UqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYy7Mythp_T-mtop-vrsUOmeInPi9iDjx9w8K4ZfjXt2dsfMuu5oyk-ei_Du8kAJywQQsRwZSt1jcacQT74N5jqYG6v6ULRah83RgHXAWD5lbQ/image-asset.jpeg?format=1000w"}}></Image>

      
     <TextInput style = {{height: 80, 
       borderColor:'white',
       borderWidth: 40,
       marginTop: 20}} 
       placeholder = "Transportation" 
       value = "                                                BUS                                    "/>

      <Image style = {{width: 400, 
      height: 200}}
      source = {{uri: "https://instagram.fiev22-1.fna.fbcdn.net/v/t51.2885-15/e35/82690573_1398738416976656_7421392335991729993_n.jpg?tp=1&_nc_ht=instagram.fiev22-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=Axrj-BoaaYgAX8qWnLn&ccb=7-4&oh=e7cbd511895e38a9cbb95047cbc6a306&oe=608343A0&_nc_sid=4f375e"}}></Image>

     <TextInput style = {{height: 80, 
       borderColor:'white',
       borderWidth: 40,
       marginTop: 20}} 
       placeholder = "Transportation" 
       value = "                                              SHIPPING VESSEL                                    "/>

      <Image style = {{width: 400, 
      height: 200}}
      source = {{uri: "https://jontotheworld.com/wp-content/uploads/2020/01/2go-travel-vessel-1.jpg"}}></Image>

     <TextInput style = {{height: 80, 
       borderColor:'white',
       borderWidth: 40,
       marginTop: 20}} 
       placeholder = "Transportation" 
       value = "                                              AIRPLANE                                    "/>

      <Image style = {{width: 400, 
      height: 200}}
      source = {{uri: "https://cdn.businesstraveller.com/wp-content/uploads/fly-images/894891/A321neo-Philippines-Airlines-take-off-916x516.jpg"}}></Image>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


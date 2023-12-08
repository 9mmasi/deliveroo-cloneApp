
import { StyleSheet,TextInput, Text,ScrollView, View,Image ,SafeAreaView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useLayoutEffect, useState} from 'react';
import {ChevronDownIcon,UserIcon,AdjustmentsHorizontalIcon, MagnifyingGlassIcon} from "react-native-heroicons/outline"
import Categories from '../components/Categories';


export default function HomeScreen() {
    const navigation=useNavigation();
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false
        });

        return () => {

        };
    }, []);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        
        <View style={styles.avatarsec}>
        <Image source={require("../assets/avatar.jpg")} style={styles.avatar}/>
        <View>
        <Text style={styles.textDeliver}>Deliver Now!</Text>
          <Text style={styles.textlocation}>Current Location
          <ChevronDownIcon color={"#00ccbb"} size={20}
          />
          
          </Text>
        </View>
          
        </View>
        <UserIcon color={"#00ccbb"} size={35} />

      </View>
      {/* search section*/ }

      <View style={styles.searchSection}>
        <View style={styles.searchInput}>
          <MagnifyingGlassIcon />
          <TextInput placeholder='Restaraunts and Cuisine' keyboardType='default' />
        </View>
        <AdjustmentsHorizontalIcon  color={"#00ccbb"} />
      </View>
      <ScrollView contentContainerStyle={{
                            paddingBottom: 100
                        }}>
                          <Categories />

      </ScrollView>

      

      
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical:10,
    backgroundColor: '#fff',
    
  },
  header:{
    flexDirection:"row",
    justifyContent:"space-between"
    
    
    
  },
  avatar:{
    borderRadius:50,
    height:40,
    width:40
  },
  avatarsec:{
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"flex-start",
    padding:5,
    marginHorizontal:10,


    

  },
  textlocation:{
    fontSize:17,
    fontWeight:'bold',
    marginLeft:2,
    
  },
  textDeliver:{
    fontSize:13,
    marginLeft:2,
  },
  searchSection:{
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-around",
    alignItems:"center",
    marginVertical:10

  },
  searchInput:{
    flexDirection:'row',
    alignItems:'center',
    backgroundColor:"grey",
    padding:5.5,
    opacity:0.6,
    marginHorizontal:10,
    flex:1

  }

});

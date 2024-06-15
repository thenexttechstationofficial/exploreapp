import { View, Text ,Image, TextInput} from 'react-native'
import React from 'react'
import { useUser } from '@clerk/clerk-expo'
import { Colors } from '../../constants/Colors'

import Ionicons from '@expo/vector-icons/Ionicons';

export default function Header() {
  const {user} = useUser();

  return (
    <View style={{padding:20,paddingTop:40,
    backgroundColor:Colors.primary,
    borderBottomLeftRadius:20,
    borderBottomRightRadius:20}}>
      <View style={{display:'flex',
        flexDirection:'row',
        alignItems:'center',gap:10}}>
      <Image style={{width:45,
        height:45,borderRadius:99
      }} 

      source={{uri:user?.imageUrl}}></Image>
      <View>
        <Text style={{color:'#fff'}}>Welcome</Text>
        <Text style={{fontSize:19,
          color:'#fff',
          fontFamily:'outfit-medium'
        }}> {user?.fullName}</Text>
      </View>

     
      </View>
      <View style={{display:'flex',
        flexDirection:'row',gap:10,
        alignItems:'center',backgroundColor:'#fff',
        padding:10,marginVertical:10,marginTop:15,borderRadius:8
        }}>
        {/**Search */}
        <Ionicons name="search" size={24} color={Colors.primary} />
        <TextInput style={{fontFamily:'outfit',fontSize:16}} placeholder='Search...'></TextInput>
      </View>
    </View>
  )
}
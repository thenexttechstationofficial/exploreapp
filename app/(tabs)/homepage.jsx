import { View, Text,Image } from 'react-native'
import React from 'react'
import { useUser } from '@clerk/clerk-expo'
import Header from '../../components/Home/Header';
import Slider from '../../components/Home/Slider';




export default function homepage() {
  const {user}=useUser();
  return (
    <View>
     <Header/>
     <Slider></Slider>
     
      </View>


   
    
  )
}
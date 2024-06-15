import { View, Text} from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import Ionicons from '@expo/vector-icons/Ionicons';
import {Colors} from '../../constants/Colors'

export default function _layout() {
  return (
   <Tabs screenOptions={{
    headerShown:false,
    tabBarActiveTintColor:Colors.primary
   }}>
    <Tabs.Screen options={{
        tabBarLabel:'Home',
        tabBarIcon:({color})=><Ionicons name="home" size={24} color={Colors.primary} />
    }} name="homepage"/>
    <Tabs.Screen  options={{
        tabBarLabel:'Explore',
        tabBarIcon:({color})=><Ionicons name="search-circle" size={26} color={Colors.primary} />
    }} name="explore"/>
    <Tabs.Screen options={{
        tabBarLabel:'Explore',
        tabBarIcon:({color})=><Ionicons name="people" size={24} color={Colors.primary} />
    }} name="myprofile"/>

   </Tabs>
  )
}
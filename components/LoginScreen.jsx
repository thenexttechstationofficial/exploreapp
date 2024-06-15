import { View, Text,Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors'
import * as WebBrowser from "expo-web-browser";
import { useWarmUpBrowser } from '@/hooks/useWarmUpBrowser';
import { useOAuth } from "@clerk/clerk-expo";

export default function LoginScreen() {
  WebBrowser.maybeCompleteAuthSession();

  useWarmUpBrowser();
  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });

  const onPress = React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlow();

      if (createdSessionId) {
        setActive({ session: createdSessionId });
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
  }, []);

  return (
    <View>
    <View style={{display:'flex',alignItems:'center',marginTop:100}}>
      <Image style={{width:100,
        height:100,
        borderRadius:20,
        borderWidth:6,
        borderColor:'#000'}} source={require("./../assets/images/react-logo.png")}></Image>
      <Text>LoginScreen</Text>
    </View>
    <View style={{backgroundColor:'#fff',
      padding:20
    }}>
      <Text style={{fontSize:30,
        fontFamily:'outfit-bold',
        textAlign:'center'
      }}> Welcome to <Text style={{color:Colors.primary}}>Explore </Text>App</Text>
      <Text style={{fontSize:15,
        fontFamily:'outfit',
        textAlign:'center',
        marginVertical:15,
        color:Colors.grey
      }}>An Exclusive Application to visit trending business spots</Text>
      <TouchableOpacity onPress={onPress} style={{backgroundColor:Colors.primary,
        padding:16,
        borderRadius:99,
        marginTop:20}}>
        <Text style={{textAlign:'center',
          color:'#fff',
          fontFamily:'outfit'
        }}>Let's Get Explored!</Text>
      </TouchableOpacity>
    </View>
    </View>
  )

}
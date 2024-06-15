import { View, Text, Image,FlatList } from 'react-native'
import React, { useEffect ,useState} from 'react'
import { collection, getDocs, getFirestore, query } from 'firebase/firestore'
import app from './../../configs/FirebaseConfig'
export const db=getFirestore(app);
export default function Slider() {
    const[sliderList,setSliderList] = useState([]);

    useEffect(()=>{
        GetSliderList();
    },[])
    const GetSliderList = async()=>{
        setSliderList([]);
        const q=query(collection(db,'Slider'));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc)=>{
            console.log(doc.data());
            setSliderList(prev=>[...prev,doc.data()])
        })
    }

  return (
    <View>
      <Text style={{fontFamily:'outfit-bold',
        fontSize:20,paddingLeft:20,paddingTop:20,marginBottom:5}}>#Special for You</Text>
        <FlatList style={{paddingLeft:20}} data={sliderList}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        renderItem={({item,index})=>(
            <View>
            <Text>{item.name}</Text>
            <Image style={{width:300,height:150,borderRadius:15,marginRight:15}} 
            source={{uri:item.imageUrl}}></Image>
            </View>
        )}
        >

        </FlatList>
    </View>
  )
}
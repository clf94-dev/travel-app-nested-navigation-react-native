import React, {useState, useRef} from 'react';

import {View, Text,Image, FlatList, TouchableOpacity, StyleSheet} from 'react-native';
import {CountriesDestination} from './CountriesDestination';
//import {InfoDestinations} from './InfoDestinations';


export default function HomeScreen({navigation}){
    const [country, setCountry] = useState(0);
    const flatlistRef = useRef();
    //const [continent, setContinent] = useState(0); 
    const onPressFunction = () => {
    flatlistRef.current.scrollToIndex({index: 0});
  };
    const countrySel = (countryInd) =>{
        return( 
            console.log(countryInd),
            setCountry(countryInd),
            onPressFunction()

            )
   }
  
/*    const continentSel = (continentInd) =>{
    return( 
        console.log(continentInd),
        setCountry(continentInd)

        )
}
   const showContinents =({item}) =>{
    return(
        <TouchableOpacity key={item.index} style={styles.CountryButton} onPress={() => continentSel(item.index)}><Text style={[styles.button, country == item.index && styles.select]}>{item.country}</Text></TouchableOpacity>
        )
} */
    const showCountries =({item}) =>{
        return(
            <TouchableOpacity key={item.index} style={styles.CountryButton} onPress={() => countrySel(item.index)}><Text style={[styles.button, country == item.index && styles.select]}>{item.country}</Text></TouchableOpacity>
            )
    }

    return(
        
        <View style={{ flex: 1, alignItems: 'start', justifyContent: 'start', paddingTop: 70 , paddingLeft:20, backgroundColor: 'lightgray'}}>
           {/*  <FlatList  style={{  maxHeight:50}} horizontal showsHorizontalScrollIndicator='false' data={InfoDestinations} keyExtractor={item => item.index} renderItem={showContinents}/>       */} 
            <FlatList  style={{  maxHeight:80}} horizontal showsHorizontalScrollIndicator='false' data={CountriesDestination} keyExtractor={item => item.index} renderItem={showCountries}/>       
            <FlatList ref={flatlistRef} horizontal showsHorizontalScrollIndicator='false' horizontal style={{maxHeight:370}} data={CountriesDestination[country].destinations} keyExtractor={item => item.index} renderItem={({item}) => (
                 <TouchableOpacity onPress={() => navigation.navigate('Destination', {country: item.country, name: item.name, src: item.src, info: item.info})}>
                 <View style={styles.cardPlaces}>
                            <Image style={{width:'100%', borderRadius:10}} source={item.src} />
                            <View style={styles.text}>
                                <Text style={styles.nameDest}>{item.name}</Text>
                                <Text>{item.info}</Text>
                            </View>
                </View>
                </TouchableOpacity>
            )} />    
            <View style={styles.header}>
                <Text style={styles.Top}>Top Destinations</Text>
                <TouchableOpacity ><Text style={[styles.select, styles.viewall]}>View All</Text></TouchableOpacity>
            </View>   
            <FlatList ref={flatlistRef} horizontal showsHorizontalScrollIndicator='false' horizontal  style={{maxHeight:370}}data={CountriesDestination[country].TopDestinations} keyExtractor={item => item.name} renderItem={({item}) => (
               <TouchableOpacity  onPress={() => navigation.navigate('Destination', {country: item.country, name: item.name, src: item.src, info: item.info})}>
               <View style={styles.cardTopDest}>
                            <Image style={{width:140, height:140, borderRadius:10}} source={item.src} />
                            <View style={styles.text2}>
                                <Text style={styles.TopDestName}>{item.name}</Text>
                                <Text style={styles.TopDestLoc}>{item.location}</Text>
                            </View>
                </View></TouchableOpacity>
            )}/>   
         </View>
        
    )
}

const styles = StyleSheet.create({
CountryButton: {
    padding: 10,
    
},
select: {
    color: 'green',
    textDecorationLine: 'underline',
    textDecorationStyle:'solid'
},
button: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'gray'
},
cardPlaces: {
    alignSelf: 'flex-start',
    margin: 15,
 
    width:300,
    backgroundColor: 'white',
    borderRadius:10
},
text: {
    padding: 20,
    height: 130
},
Top: {
    fontSize:25,
    fontWeight:'bold',
},
header:{
    flex: 1,
    flexDirection:'row',
    maxHeight:50
},
viewall:{
    paddingLeft: 100,
    paddingTop:4,
    fontSize:17
},
cardTopDest: {
    flex: 1,
    flexDirection:'row',
    width:300,
    padding:5,

    backgroundColor:'white',
    maxHeight:150,
    borderRadius:10,
    margin:12
, marginVertical:0
},
TopDestName:{
    fontSize:18,
    marginTop: 10,
    fontWeight:'bold'
}, text2:{
    padding:10,
    maxWidth:'50%',
},TopDestLoc:{
    paddingTop:10
},
nameDest:{
    fontSize:18,
    fontWeight:'bold',
    marginBottom:5
}
})


import React, { useState } from "react";
import {View, Text, Image, FlatList, StyleSheet} from 'react-native'

export default function DestinationScreen ({route}){
const {country,name, src, info} = route.params;
    return(
        <View style={{ flex: 1, alignItems: 'start', justifyContent: 'start', backgroundColor: 'lightgray'}}>
           <Image style={{width:'100%', height: 300, borderBottomLeftRadius:50,borderBottomRightRadius:50}} source={src}/>
            <View style={styles.text}> 
            <Text style={styles.Title}>{name}</Text>
            <Text style={styles.Subtitle}>{country}</Text>
            <Text style={styles.Info}>{info}</Text></View>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        paddingLeft:40,
        padding: 20,
        height: 130
    },
    Title:{
        fontSize:25,
        fontWeight:'bold',
        paddingBottom: 5
    },Subtitle:{
        fontSize:15,
        paddingBottom: 20
    },
    Info:{
        fontSize: 18,
        color: 'gray'

    }
})
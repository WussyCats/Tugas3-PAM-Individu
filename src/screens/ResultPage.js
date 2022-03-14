import React from 'react'
import { View, Text, StyleSheet, Colors } from "react-native"
import NavHeaderShort from './../../src/routes/Nav/NavHeaderShort'
import NavBottom from './../../src/routes/Nav/NavBottom'
import SearchResult from './../../src/routes/Result/SearchResult'

const ResultPage = ({route, navigation}) =>{

    const { data } = route.params;

    return (
        <View>
          <NavHeaderShort navigation = {navigation} data = {data}/>
          <SearchResult navigation={navigation} data = {data}/>
          <NavBottom/>
        </View>
      )
}

export default ResultPage
import React from 'react'
import {View, Text} from 'react-native'
import NavHeader from './../../src/routes/Nav/NavHeader'
import FormSearch from './../../src/routes/Form/FormSearch'
import NavBottom from './../../src/routes/Nav/NavBottom'

const SearchPage = ({navigation}) =>{
    return (
        <View>
          <NavHeader/>
          <FormSearch navigation={navigation}/>
          <NavBottom/>
        </View>
      )
}

export default SearchPage
import React from 'react'
import { View, Text, StyleSheet, Colors } from "react-native"
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import { withSafeAreaInsets } from 'react-native-safe-area-context';
import style from '../../../src/assets/Styles/NavHeader.style'

const NavHeader = () => {
    return (
        <View style={style.menu}>
            <Entypo
                style={style.menuIcon}
                name="menu"
                color={'#fff'}
            />
            
            <Text style={style.text}>Hiling.id</Text>
            
            <FontAwesome 
                style={style.userIcon}
                name="user"
                color={'#fff'}
            />
        </View>
    )
}

export default NavHeader
import React from 'react'
import { View, Text, StyleSheet, Colors } from "react-native"
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { withSafeAreaInsets } from 'react-native-safe-area-context'
import style from '../../../src/assets/Styles/NavHeaderShort.style'


const NavHeader = ({data, navigation}) => {
    return (
        <View style={style.menu}>
            <View style={style.Icon}>
                <Ionicons
                    style={style.menuIcon}
                    name="arrow-back"
                    color={'#fff'}
                    onPress={() => navigation.goBack()}
                />
                <Text style={style.textHead}>Hiling.id</Text>
                <FontAwesome 
                    style={style.userIcon}
                    name="user"
                    color={'#fff'}
                />
            </View>
            <View style={style.text}>
                
                <Text style={style.textResult}>Hasil Pencarian Penerbangan</Text>
                <Text style={style.textDate}>{data.tanggal}</Text>
            </View>
        </View>
        
    )
}

export default NavHeader
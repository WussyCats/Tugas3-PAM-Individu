import React from 'react'
import { View, Text, StyleSheet, Colors } from "react-native"
import style from '../../../src/assets/Styles/NavBottom.style'

const NavBottom = () => {
    return (
        <View style={style.copyright}>
            <Text style={style.textCopyright}>Copyright Muhammad Farisi Zatwara Putra Unyi 119140201</Text>
        </View>
    )
}

export default NavBottom
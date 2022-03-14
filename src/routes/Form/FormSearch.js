import React, { useState } from 'react'
import { View, Text, StyleSheet, Colors, TextInput, TouchableOpacity } from "react-native"
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import style from '../../../src/assets/Styles/FormSearch.style.js'

const FormSearch = ({navigation}) => {
    const [text, onChangeText] = useState({
        keberangkatan: '',
        tujuan: '',
        tanggal: '',
    });

    const clickHandler = (textInput) => {
        return (value) => {
            onChangeText({ ...text, [textInput]: value });
        }
    }
    
    return (
        
        <View style={style.box}>
            <View style={style.box2}>
                <Text style={style.text}>Lokasi Keberangkatan</Text>
                <View style={style.formSingle}>
                    <MaterialCommunityIcons style={style.Icon} name="airplane-takeoff" size={20} color="#86b257"/>
                    <TextInput
                        style={style.Input}
                        placeholder="Masukkan Lokasi Keberangkatan"
                        value={text.keberangkatan}
                        onChangeText={clickHandler('keberangkatan')}
                        underlineColorAndroid="transparent"
                    />
                </View>
            </View>
            
            <View style={style.box2}>
                <Text style={style.text}>Lokasi Tujuan</Text>
                <View style={style.formSingle}>
                    <MaterialCommunityIcons style={style.Icon} name="airplane-landing" size={20} color="#86b257"/>
                    <TextInput
                        style={style.Input}
                        placeholder="Masukkan Lokasi Tujuan"
                        value={text.tujuan}
                        onChangeText={clickHandler('tujuan')}
                        underlineColorAndroid="transparent"
                    />
                </View>
            </View>

            <View style={style.box2}>
                <Text style={style.text}>Tanggal Keberangkatan</Text>
                <View style={style.formSingle}>
                    <MaterialCommunityIcons style={style.Icon} name="calendar-month" size={20} color="#86b257"/>
                    <TextInput
                        style={style.Input}
                        placeholder="Masukkan Tanggal Keberangkatan"
                        value={text.tanggal}
                        onChangeText={clickHandler('tanggal')}
                        underlineColorAndroid="transparent"
                        keyboardType="numeric"
                    />
                </View>
            </View>

            <View style={style.box2}>
                <TouchableOpacity 
                    style={style.button}
                    onPress={() => navigation.navigate('ResultPage', {data: text})}
                >
                    <Text style={style.textButton}>Cari</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default FormSearch
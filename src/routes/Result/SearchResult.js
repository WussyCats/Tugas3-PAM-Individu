import React from 'react'
import { View, Text, StyleSheet, Colors, Image } from "react-native"
import { Maskapai, Jadwal, Bandara } from '../../../db/db'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import style from '../../../src/assets/Styles/SearchResult.style'

const SearchResult = ({data}) => {
    let available = true

    let listJadwal = () => {

        let newJadwal = Jadwal.filter( (x) => {
            let checkBandaraK = Bandara.filter( (x) => {
                return x.bandara_nama.toLowerCase() == data.keberangkatan.toLowerCase()
            })

            let checkBandaraT = Bandara.filter( (x) => {
                return x.bandara_nama.toLowerCase() == data.tujuan.toLowerCase()
            })

            try{
                return (
                    x.bandara_kode_keberangkatan.toLowerCase() == checkBandaraK[0].bandara_kode.toLowerCase() &&
                    x.bandara_kode_tujuan.toLowerCase() == checkBandaraT[0].bandara_kode.toLowerCase() &&
                    data.tanggal.length === 10
                )
            }
            catch(err){
                return available = false
            }

        })

        if(newJadwal.length>0){
            return newJadwal.map( (printJadwal, i ) => {

                let checkMaskapai = Maskapai.filter( (x) => {
                    return x.maskapai_id == printJadwal.maskapai_id
                })
                
    
                //capitalize the first letter of each word
                let capitalizeTheFirstLetterOfEachWord = (words) => {
                    let separateWord = words.toLowerCase().split(' ');
                    return separateWord.map((text) => text[0].toUpperCase() + text.substring(1)).join(' ')
                }
    
                if(available == true){
                    return(
                        <View style={style.box} key={i}>
                            <View style={style.upperText}>
                                <Text style={style.text}>{capitalizeTheFirstLetterOfEachWord(data.keberangkatan)}</Text>
                                <Text style={style.text}> - </Text>
                                <Text style={style.text}>{capitalizeTheFirstLetterOfEachWord(data.tujuan)}</Text>
                            </View>
                            
                            <View style={style.bodyBox}>
                                <Image 
                                    style={style.Image}
                                    source={checkMaskapai[0].maskapai_logo}
                                ></Image>
                                <View style={style.underText}>
                                    <Text style={style.text}>{checkMaskapai[0].maskapai_nama}</Text>
                                    <Text style={style.textBlue}>{data.tanggal}</Text>
                                </View>
                            </View>
                            
                        </View>
                    )
                }
            })
        }else{
            return(
                <View style={style.boxNotAvail}>
                    <Text style={style.textNotAvail}>Maaf, tidak tersedia jadwal penerbangan</Text>
                    <MaterialCommunityIcons 
                        style={style.userIcon}
                        name="emoticon-sad-outline"
                        color={'#86b257'}
                    />
                </View>
            )
        }

        
    }

    return(
        <View>
            {listJadwal()}
        </View>
    )
}

export default SearchResult
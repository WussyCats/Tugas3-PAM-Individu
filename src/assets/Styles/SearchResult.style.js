import { StyleSheet } from "react-native"

export default StyleSheet.create({
    notAvailable:{
        alignItems: 'center',
    }, 
    box:{
        backgroundColor: '#fff',
        borderRadius: 20,
        padding: 10,
        width: '80%',
        left: '10%',
        shadowColor: '#000',
        elevation: 5,
        marginTop: 30,
    },
    boxNotAvail:{
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 10,
        width: '80%',
        left: '10%',
        shadowColor: '#000',
        elevation: 5,
        top: '150%',
        alignItems: 'center',
    },
    textNotAvail:{
        textAlign: 'center',
    },
    userIcon: {
        marginTop: 25,
        fontSize: 60,
        alignItems: 'center'
    },
    upperText:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 30,
        marginRight: 30,
    },
    bodyBox:{
        marginTop: 10,
        alignContent: 'flex-start',
    },  
    Image:{
        width: null,
        resizeMode: 'contain',
        height: 45,
        marginRight: 140
    },
    underText:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 30,
        marginRight: 30,
    },
    text:{
        fontSize: 14,
        fontWeight: 'bold',
        marginTop:10,
        marginRight: 10
    },
    textBlue:{
        fontSize: 14,
        fontWeight: 'bold',
        color: 'blue',
        marginTop:10,
        marginRight: 10
    }
})
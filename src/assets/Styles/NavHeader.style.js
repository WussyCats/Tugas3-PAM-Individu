import { StyleSheet } from "react-native"

export default StyleSheet.create({
    menu: {
        flexDirection: 'row',
        backgroundColor: '#86b257',
        justifyContent: 'space-between',
        height: 550,
        borderRadius: 9
    },
    text: {
        marginTop: 70,
        fontSize: 35,
        color: "white",
        textAlign: 'center',
        fontWeight: 'bold'
    },
    menuIcon: {
        marginTop: 15,
        fontSize: 40,
        marginLeft:20,
        
    },
    userIcon: {
        marginTop: 15,
        fontSize: 40,
        marginRight:20,
    },
})
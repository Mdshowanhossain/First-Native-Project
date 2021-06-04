import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Footer() {
    return (
        <View style={styles.container}>
            <Text style={styles.desc}>All right reserved By Our Fashion @2021</Text>
        </View>)
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'lightgrey',
        height:100,
    },desc:{
        textAlign:'center',
        paddingTop:30
    }
})
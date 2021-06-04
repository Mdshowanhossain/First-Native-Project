import React from 'react'
import { Image, StyleSheet, Text, View, Container, ScrollView } from 'react-native'

export default function ProductDetailPage({ pd }) {
    const { title, price, description, image } = pd;

    const handleClick = () => {

        alert('Please Wait... Working On it.....')

    }


    console.log(pd)
    return (
        <View style={styles.item}>
            <View style={styles.container}>
                <Image

                    source={{ uri: image }}
                    style={{ width: 100, height: 100, }}

                />

                <Text style={styles.text}>{title}</Text>
                <Text style={styles.price}>Price: {price}</Text>
                <Text style={styles.desc}>{description}</Text>

                <View style={styles.buy}><button onClick={handleClick} style={{ fontSize: 17, }} >BUY NOW</button></View>
            </View>
        </View>







    )
}

const styles = StyleSheet.create({
    container: {
        width: 400,
        // height: 300,
        borderWidth: 1,
        borderColor: '#52C0B4',
        borderRadius: 10,
        padding: 40,
        margin: 20,
        alignItems: 'center',
        // justifyContent: 'center'
    }, text: {
        fontSize: 14,
        paddingBottom: 10,
        color: '#52C0B4',
        fontWeight: 'bold'
    }, price: {
        fontSize: 20,
        color: '#908E8C',
        paddingBottom: 10,
    }, desc: {
        fontSize: 12,
        fontWeight: 600,
        color: '#908E8C',
    }, item: {
        // overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        // justifyContent: 'center',
        alignItems: 'center',
    }, buy: {
        paddingTop: 20
    }

})

import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import ProductDetailPage from './ProductDetailPage';

export default function ProductPage() {

    const [Products, setProducts] = useState([]);


    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])


    return (
        <View>

            {
                Products.map(pd => <ProductDetailPage pd={pd} ></ProductDetailPage>)
            }
        </View >
    )
}

const styles = StyleSheet.create({})

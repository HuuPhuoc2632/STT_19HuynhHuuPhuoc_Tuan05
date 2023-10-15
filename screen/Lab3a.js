import { View, Text, Image, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';
import { useState } from 'react';

const Lab3a = (imageSource) => {
    const [url, setUrl] = useState(require('../assets/vs_blue.png'))
    useEffect(() => {
        if (imageSource && imageSource.route.params) {
            const newUrl = imageSource.route.params.imageSource;
            setUrl(newUrl);
        } else {
            setUrl(require('../assets/vs_blue.png'));
        }
    }, [imageSource]);
    const navigation = useNavigation();
    const formatPrice = (price) => {
        return price.toLocaleString('vi', {
            style: 'currency',
            currency: 'VND', 
            maximumFractionDigits: 2,
        });
    };
    const goToLab3b = () => {
        navigation.navigate('Lab3b')
    }
    return (
        <View style={styles.container}>
            <Image style={styles.productImg} source={url} ></Image>
            <Text style={styles.productName}>Điện Thoại Vsmart Joy 3 - Hàng chính hãng</Text>
            <View style={styles.reviewWrapper}>
                <View style={styles.starWrapper}>
                    <Image style={styles.starImg} source={require('../assets/star.png')} />
                    <Image style={styles.starImg} source={require('../assets/star.png')} />
                    <Image style={styles.starImg} source={require('../assets/star.png')} />
                    <Image style={styles.starImg} source={require('../assets/star.png')} />
                    <Image style={styles.starImg} source={require('../assets/star.png')} />
                </View>
                <Text style={styles.reviewSum}>(Xem 828 đánh giá)</Text>
            </View>
            <View style={styles.priceWrapper}>
                <Text style={{ fontSize: 18, fontWeight: 600 }}>{formatPrice(1790000)}</Text>
                <Text style={{ textDecorationLine: 'line-through', fontSize: 18, fontWeight: 600, marginLeft: 70, color: 'gray' }}>{formatPrice(1790000)}</Text>
            </View>
            <View style={{ flexDirection: 'row', width: '80%' }}>
                <Text style={styles.slogan}>Ở ĐÂU RẺ HƠN HOÀN TIỀN</Text>
                <Image
                    source={require('../assets/Group 1.png')}
                    style={{ width: 20, height: 20, marginLeft: 5 }}
                ></Image>
            </View>
            <TouchableOpacity style={styles.btnChoseColor} onPress={goToLab3b}>
                <View style={{ justifyContent: 'center', width: '100%', alignItems: 'center' }}>
                    <Text style={{ fontSize: 15, fontWeight: 500 }}>4 MÀU-CHỌN MÀU</Text>
                </View>
                <Text style={{ fontSize: 15, fontWeight: 500 }}>{'>'} </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnBuy}>
                <Text style={{ fontSize: 20, fontWeight: 700, color: 'white' }}>CHỌN MUA</Text>
            </TouchableOpacity>
        </View>
    )
}
export default Lab3a;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    productImg: {
        width: "80%",
        height: 370,
        resizeMode: 'contain',
        margin: 10,
    },
    productName: {
        fontSize: 15,
        fontWeight: '600',
        width: "80%",
    },
    reviewWrapper: {
        flexDirection: 'row',
        width: "80%",
        marginTop: 10,
        marginBottom: 10,
    },
    starWrapper: {
        flexDirection: 'row',
    },
    starImg: {
        width: 25,
        height: 25,
        resizeMode: 'contain',
        marginRight: 5,
    },
    reviewSum: {
        marginLeft: 20,
        fontSize: 15,
    },
    priceWrapper: {
        flexDirection: 'row',
        width: "80%",
        marginTop: 10,
        marginBottom: 10,
    },
    slogan: {
        color: '#FA0000',
        fontSize: 12,
        fontWeight: '700',
    },
    btnChoseColor: {
        flexDirection: 'row',
        width: "80%",
        height: 50,
        backgroundColor: '#FFF',
        borderRadius: 10,
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingLeft: 10,
        paddingRight: 10,
        borderColor: 'black',
        borderWidth: 1,
        marginTop: 30,

    },
    btnBuy: {
        width: "80%",
        height: 50,
        backgroundColor: '#FA0000',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 70,
    }

})
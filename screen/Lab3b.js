import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';

export default function Lab3b() {
    const navigation = useNavigation();
    const [url, setUrl] = useState(require('../assets/vs_blue.png'))
    const goToLab3a = () => {
        navigation.navigate('Lab3a', { imageSource: url })
    }

    return (
        <View style={styles.container}>
            <View style={styles.productWrapper}>
                <Image
                    source={url}
                    style={styles.productImg}
                ></Image>
                <Text style={styles.productName}>Điện Thoại Vsmart Joy 3 {'\n'}Hàng chính hãng</Text>
            </View>
            <View style={styles.formSelectColor}>
                <Text>Chọn một màu bên dưới:</Text>
                <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                    <TouchableOpacity style={{ width: 80, height: 80, backgroundColor: '#C5F1FB', margin: 20 }} onPress={()=>{
                        setUrl(require('../assets/vs_silver.png'))
                    }}>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ width: 80, height: 80, backgroundColor: 'red', margin: 20 }}onPress={()=>{
                        setUrl(require('../assets/vs_red.png'))
                            
                    }}>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ width: 80, height: 80, backgroundColor: 'black', margin: 20 }}onPress={()=>{
                        setUrl(require('../assets/vs_black.png'))

                    }}>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ width: 80, height: 80, backgroundColor: 'blue', margin: 20 }}onPress={()=>{
                        setUrl(require('../assets/vs_blue.png'))
                    }}>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnSubmit} onPress={goToLab3a}>
                        <Text style={{fontSize:20, fontWeight:500, color:'white'}}>XONG</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    productWrapper: {
        flexDirection: 'row',
        width: "80%",
        marginTop: 10,
        marginBottom: 10,

    },
    productImg: {
        width: 110,
        height: 130,
        resizeMode: 'contain',
        marginRight: 5,
    },
    productName: {
        fontSize: 15,
        fontWeight: '600',
        width: "80%",
    },
    formSelectColor: {
        width: "100%",
        height: '100%',
        backgroundColor: '#C4C4C4',
    },
    btnSubmit: {
        width: '90%',
        height: 50,
        backgroundColor: '#1952E294',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,

    }

})
import React, {Component} from 'react';
import{ View, Text, StyleSheet,Image} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {iconosPersonajes} from '../../../../Constants/Array';

const Cardpersonaje = ({name, birth_year, gender, height, mass}) =>(
    <View style = {style.container}>
        <View style={style.cardContainer}>
            <View style = {style.containerImage}>
                <Image 
                    style={{width: hp('7%'),height: hp('7%')}}
                    source ={gender === 'female'? iconosPersonajes.imageFemale: (gender === 'male'? iconosPersonajes.imageMale : iconosPersonajes.imageNA)}
                />
            </View>
            <View style = {style.containerDescripcion}>
                <Text>{`Nombre: ${name}`}</Text>
                <Text>{`Nacimiento: ${birth_year}`}</Text>
                <Text>{`Genero: ${gender}`}</Text>
                <Text>{`Estatura: ${height} cm`}</Text>
                <Text>{`Peso: ${mass}`}</Text>
            </View>
        </View>
    </View>
)


const style = StyleSheet.create({
    container:{
        width: wp('100%'),
        height: hp('15%'),
        justifyContent: 'center',
        alignItems:'center',
        backgroundColor: '#000'
    },
    cardContainer:{
        flexDirection: 'row',
        height: hp('10%'),
        width: wp('80%'),
        backgroundColor: '#FFFC33'
    },
    containerImage:{
        width: wp('20%'),
        height: hp ('9%'),
        justifyContent:"center",
        alignItems:"center"
    },
    containerDescripcion:{
        flexDirection:'column'
    },
});


export default Cardpersonaje;

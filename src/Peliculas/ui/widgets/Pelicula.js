import React  from 'react';
import {View, Text, Image, StyleSheet, requireNativeComponent} from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { TouchableNativeFeedback } from 'react-native-gesture-handler';
import {iconosPeliculas} from '../../../../Constants/Array'
const Pelicula = ({nombre, navigation, id}) => (
    <TouchableNativeFeedback onPress ={()=> {navigation.navigate('PeliculasInfo',{id:id})}}>
         <View style = {style.container}>
            <View style = {style.cardName}>
                <Image style = {style.imagenPelicula} source = {iconosPeliculas.default}/>
                <Text style = {{marginLeft: wp('3%'), fontSize : hp('2.5%')}}>
                    {nombre}
                </Text>
            </View>
        </View>
    </TouchableNativeFeedback>
   
);
const style = StyleSheet.create({
    container:{
        height: hp("10%"),
        width: wp ("100%"),
        justifyContent:"center",
        alignItems: "center"
    },
    cardName:{
        flexDirection: "row",
        height: hp("8%"),
        width: wp ("80%"),
        backgroundColor: "#FFFC33",
        alignItems: 'center',
        borderRadius: hp('3%'),
    },
    imagenPelicula:{
        marginLeft: wp('5%'),
        width : hp('7%'),
        height : hp('7%')
    }
})
export default Pelicula;
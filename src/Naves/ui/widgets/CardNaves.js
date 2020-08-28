import React from 'react';
import CardContainer from '../../../Components/CardContainer';
import { View, Image,StyleSheet, Text} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const CardNaves = ({name,cost_in_credits,model})=>(
    <CardContainer>
        <View style = {styles.content}>
            <View style = {styles.cardText}>
                <Text>Nombre: {name}</Text>
                <Text>Modelo: {model}</Text>
                <Text>Costo: {cost_in_credits}</Text>
            </View> 
        </View>
    </CardContainer>
)
const styles = StyleSheet.create({
    content:{
        height: hp("100%"),
        width: wp ("100%"),
        paddingHorizontal: wp('5%'),
        paddingVertical:hp('1%'),
        flexDirection: 'row',
        alignContent: "center",
    },
    cardText:{
        flexDirection:'column',
    },
    cardImage:{
        marginLeft: wp('5%'),
        width : hp('7%'),
        height : hp('7%')
    }
})

export default CardNaves;

const baseURL = 'https://twitter.com/';
        const defaultValue= 'https://twitter.com/empresa';
        const username = defaultValue && defaultValue.replace(baseURL, '')
            .replace('https://www.twitter.com/', '')
            .replace('http://www.twitter.com/', '')
            .replace('http://twitter.com/', '')
            .replace('www.twitter.com/', '')
            .replace('twitter.com/', '')
        console.log(defaultValue&&"hola mundo")
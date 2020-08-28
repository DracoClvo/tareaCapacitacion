import React from 'react';
import CardContainer from '../../../Components/CardContainer';
import { View, Image,StyleSheet, Text} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const CardEspecies = ({name,classification,designation})=>(
    <CardContainer>
        <View style = {styles.content}>
            <View style = {styles.cardText}>
                <Text style = {styles.h1}>{name}</Text>
                <Text>Clasificacion: {classification}</Text>
                <Text>Designaccion: {designation}</Text>
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
    h1:{
        fontWeight: 'bold',
    },
    cardImage:{
        marginLeft: wp('5%'),
        width : hp('7%'),
        height : hp('7%')
    }
})

export default CardEspecies;
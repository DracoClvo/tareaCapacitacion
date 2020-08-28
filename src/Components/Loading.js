import React from 'react';
import {ActivityIndicator,StyleSheet, View} from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import BackGround from './BackGround';

const Loading = () => (
    <BackGround style= {style.container}>
        <View style = {style.loadingContainer}>
            <ActivityIndicator  size= "large" color = "#FFFC33"/>
        </View>
    </BackGround>
);
const style = StyleSheet.create({
    container:{
        paddingTop: hp('3%'),
    },
    loadingContainer:{
        height: hp('100%'),
        width: wp('100%'),
        justifyContent: 'center',
    }
});
export default Loading;
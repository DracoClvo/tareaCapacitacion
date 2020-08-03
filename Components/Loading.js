import React from 'react';
import {ActivityIndicator,StyleSheet, View} from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const Loading = () => (
    <View style= {style.container}>
        <ActivityIndicator  size= "large" color = "#000"/>
    </View>
);
const style = StyleSheet.create({
    container:{
        height: hp("100%"),
        width: wp ("100%"),
        justifyContent: 'center',
        alignItems: 'center',
    }
});
export default Loading;
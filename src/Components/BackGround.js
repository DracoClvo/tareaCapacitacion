import React, {Component} from 'react';
import{ View, StyleSheet,} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default class BackGround extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return <View style={style.container}>
            {this.props.children}
        </View> ;
    }
}
const style =  StyleSheet.create({
    container:{
        height: hp('100%'),
        width: wp('100%'),
        backgroundColor : '#000',
        paddingTop: hp('3%'),
        alignContent:'center',
        alignItems: 'center',
    }
});

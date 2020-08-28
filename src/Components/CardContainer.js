import React, {Component} from 'react';
import{ View, StyleSheet,} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default class CardContainer extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return <View style={style.cardContainer}>
            {this.props.children}
        </View> ;
    }
}

const style = StyleSheet.create({
    cardContainer:{
        marginBottom:hp('1.5%'),
        flexDirection: 'row',
        height: hp('10%'),
        width: wp('80%'),
        backgroundColor: '#FFFC33',
        borderRadius: hp('3%'),
    },
});


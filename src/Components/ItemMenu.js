import React, {Component} from 'react';
import {View, StyleSheet, TouchableNativeFeedback, Image, Text} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { StackActions } from 'react-navigation';

export default class ItemMenu extends Component{
    constructor(props){
        super(props);
    }
    onPressItem = (nameScreen) => {
        const pushAction = StackActions.push({
            routeName: nameScreen
        });
        this.props.navigation.dispatch(pushAction);
    }
    render(){
        const {name, imagen} = this.props;
        return(
            <TouchableNativeFeedback onPress = {()=>this.onPressItem(name)}>
                <View style = {style.container}>
                    <Image style= {style.syleImage} source={imagen} />
                    <Text style= {style.textTitle}>{name}</Text>
                </View>
            </TouchableNativeFeedback>

        );
    }
}

const style = StyleSheet.create({
    container:{
        flexDirection: 'row',
        width: wp('70%'),
        height: hp('7%'),
        backgroundColor: '#FFFC33',
        borderRadius: hp('3%'),
        alignItems:'center'
    },
    textTitle:{
        paddingLeft: wp('5%'),
        fontSize: hp('4%'),
    },
    syleImage:{
        width: hp('5%'),
        height: hp('5%')
    }
});
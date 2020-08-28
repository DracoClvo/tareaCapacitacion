import React, {Component} from 'react';
import  {View, StyleSheet, Image, TouchableNativeFeedback} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {iconosHeader} from '../../Constants/Array'

export default  class Header extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <View style= {style.container}>
                <View style = {{width:wp('33.3%')}}>
                    <View style= {{width: wp('20%'), height: hp('8%'),alignItems:'center',justifyContent:'center'}}>
                        <TouchableNativeFeedback onPress= {()=> this.props.navigation.openDrawer()}>
                            <Image 
                                style = {{width: hp('4%'), height: hp('4%')}}
                                source = {iconosHeader.menuButton}
                            />
                        </TouchableNativeFeedback>
                    </View>
                </View>
                <View style={style.containerImage}>
                    <Image style= {style.imagen} source = {iconosHeader.starwars}/>
                </View>
                <View>
                
                </View>
            </View>
        );
    }
}
const style = StyleSheet.create({
    container:{
        flexDirection :'row',
        width: wp('100%'),
        height: hp('11%'),
        backgroundColor: '#FFFC33',
        paddingTop: hp('3%'),
    },
    imagen:{
        width: wp('22%'),
        height: hp('7%'),
    },
    containerImage:{
        backgroundColor: '#000000',
        width: wp('33.3%'),
        height: hp('8%'),
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: hp('3%'),
    }
});
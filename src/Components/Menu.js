import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import ItemMenu from './ItemMenu'
import {iconosMenu} from '../../Constants/Array.js'
export default class Menu extends Component{
    constructor(props){
        super(props);
    }
    render(){
        const {navigation} = this.props;
        return(
            <View style={style.container}>
                <View style= {{marginTop: hp('7%')}}>
                    <View style={style.containerMenu}>
                        <ItemMenu 
                            name = {'Peliculas'} 
                            imagen={iconosMenu['Peliculas']}
                            navigation = {navigation}
                        />
                    </View>
                    <View style={style.containerMenu}>
                        <ItemMenu 
                            name = {'Personajes'} 
                            imagen={iconosMenu['Personajes']}
                            navigation = {navigation}
                        />
                    </View>
                    <View style={style.containerMenu}>
                        <ItemMenu 
                            name = {'Planetas'} 
                            imagen={iconosMenu['Planetas']}
                            navigation = {navigation}
                        />
                    </View>
                    <View style={style.containerMenu}>
                        <ItemMenu 
                            name = {'Especies'} 
                            imagen={iconosMenu['Especies']}
                            navigation = {navigation}
                        />
                    </View>
                    <View style={style.containerMenu}>
                        <ItemMenu 
                            name = {'Vehiculos'} 
                            imagen={iconosMenu['Vehiculos']}
                            navigation = {navigation}
                        />
                    </View>
                    <View style={style.containerMenu}>
                        <ItemMenu 
                            name = {'Naves'} 
                            imagen={iconosMenu['Naves']}
                            navigation = {navigation}
                        />
                    </View>
                </View>
            </View>
        );
    }
}

const style = StyleSheet.create({
  container:{
        width: wp('80%'),
        height: hp('100%'),
        backgroundColor: '#282824',
  },
  containerMenu:{
      paddingTop: hp('1%'),
  }
});
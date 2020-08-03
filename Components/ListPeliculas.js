import React, {Component} from 'react';
import {view, FlatList,StyleSheet, Text} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Pelicula from "../Components/Pelicula";
export default class ListPeliculas extends Component{
    constructor(props){
        super(props);
    }
    render(){
        const {peliculas} = this.props;
        return(
            <FlatList
                keyExtractor = {(item) => `${item.episode_id}`}
                data = {peliculas}
                renderItem = {({item}) => <Pelicula nombre = {item.title} />}
            />
        )
    }
}
const style = StyleSheet.create({
    container:{
        height: hp("10%"),
        width: wp ("10%"),
        justifyContent: 'center',
        alignItems: 'center',
    }
})
import React, {Component} from 'react';
import {view, FlatList,StyleSheet, Text} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Pelicula from "./Pelicula";

export default class ListPeliculas extends Component{
    constructor(props){
        super(props);
    }
    render(){
        const {peliculas,navigation} = this.props;
        return(
            <FlatList
                keyExtractor = {(item) => `${item.episode_id}`}
                data = {peliculas}
                renderItem = {({item}) => <Pelicula nombre = {item.title} id= {item.episode_id} navigation= {navigation}/>}
            />
        )
    }
}

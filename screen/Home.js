import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {getPeliculas} from '../constants/Peticiones'
import ListPeliculas from '../Components/ListPeliculas';
import Loading from '../Components/Loading';

export default class Home extends Component{
    constructor(props){
        super(props);1
        this.state = {
            peliculas : [],
            loading: true,
        }
    }
    async componentDidMount(){
        try{
            setTimeout(async ()=>{
                const data = await getPeliculas();
                //console.log(data);
                this.setState({
                    peliculas: data,
                    loading: false,
                });
            },0)
            
        }catch(e){
            console.log(e);
        }
    }
    render(){
        return (
            this.state.loading 
            ?
                <Loading />
            :
                <View style={style.container}>
                    <ListPeliculas peliculas ={this.state.peliculas} />
                </View>
        );
    }
}

const style = StyleSheet.create({
    container:{
       height: hp("100%"),
       width : wp("100%"),
       justifyContent: 'center',
       alignContent: 'center',
    }
});
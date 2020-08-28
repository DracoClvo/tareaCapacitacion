import React, {Component} from 'react';
import {View, StyleSheet,Text} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {getPeliculasInfo} from '../../../../Constants/Peticiones';
import Loading from '../../../Components/Loading'
import { cleanPhrase } from '../../../../Constants/Utils.js';

export default class PeliculasInfo extends Component{
    constructor(props){
        super(props);
        this.state = {
            pelicula :{},
            id:0
        }
    }
    async componentDidMount(){
        try{
            const id = this.props.navigation.getParam('id',null);
            const data = await getPeliculasInfo(id);
            this.setState({
                pelicula:data,
                id:id
            })
        }catch(e){
            console.log(e);
        }
    }
    render(){
        return (
            Object.keys(this.state.pelicula).length
            ?
                <View style={style.container}>
                    <View style={{paddingTop:hp('3%'),width: wp('100%'),alignItems:'center', justifyContent:'center'}}>
                        <Text style = {{color: '#FFFC33', fontSize:hp('4%'),width: wp('80%')}}> 
                            {this.state.pelicula.title}
                        </Text>
                    </View>
                    <Text style = {{color: '#FFFC33'}}> 
                        {this.state.pelicula.director}
                    </Text>
                    <Text style = {{color: '#FFFC33'}}>
                        {cleanPhrase(this.state.pelicula.opening_crawl)}
                    </Text>
                </View>
            :<Loading />
        );
    }
}

const style = StyleSheet.create({
    container:{
        height: hp('100%'),
        width: wp ('100%'),
        backgroundColor: '#000'
    },
    containerBody:{
        paddingTop:hp('3%'),
        width:wp('100'),
    }
});
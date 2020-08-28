import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {getPeliculas} from '../../../../Constants/Peticiones.js'
import ListPeliculas from '../widgets/ListPeliculas';
import Loading from '../../../Components/Loading';

export default class Home extends Component{
    constructor(props){
        super(props);
        this.state = {
            peliculas : [],
            loading: true,
        }
    }
    async componentDidMount(){
        try{
            const data = await getPeliculas();
            this.setState({
                peliculas: data,
                loading: false,
            });
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
                    <View style = {{paddingTop: hp('3%')}}>
                        <ListPeliculas peliculas ={this.state.peliculas} navigation={this.props.navigation} />
                    </View>
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
       backgroundColor: '#000000',
    }
});
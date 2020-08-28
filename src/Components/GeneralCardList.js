import React, {Component} from 'react';
import BackGround from '../Components/BackGround';
import { FlatList } from 'react-native-gesture-handler';
import Loading from './Loading';

export default class GeneralCardList extends Component{
    constructor(props){
        super(props);
        this.state={
            data:[],
            loading: true,
        }
    }
    async componentDidMount(){
        try{
            const data = await this.props.getData();
            this.setState({data: data,loading : false})
        }catch(error){
            console.log(error);
        }
    }
    render(){
        return (
            this.state.loading
            ?
                <Loading />
            :
            <BackGround>
                    <FlatList 
                        keyExtractor = {item => item.name}
                        data = {this.state.data}
                        renderItem ={({item}) => this.props.cards(item)} 
                    />
            </BackGround>
        );
    }
}
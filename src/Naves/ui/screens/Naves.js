import React from 'react';
import GeneralCardList from '../../../Components/GeneralCardList';
import {getNaves} from '../../../../Constants/Peticiones';
import CardNaves from '../widgets/CardNaves'
import {StyleSheet} from 'react-native';
const Naves = ()=>(
    <GeneralCardList
        getData= {getNaves}
        cards = {(item)=>(
            <CardNaves
                style ={newStyle.nuevo}
                cost_in_credits={item.cost_in_credits}
                model = {item.model}
                name = {item.name}
            />
        )}
    />
);

export default Naves;

const newStyle= StyleSheet.create({
    nuevo:{
        backgroundColor: '#FF00FF'
    }
});
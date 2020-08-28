import React from 'react';
import {getPersonajes} from '../../../../Constants/Peticiones';
import Cardpersonaje from '../widgets/CardPersonaje';
import GeneralCardList from '../../../Components/GeneralCardList';

const Personajes =() =>(
    <GeneralCardList
        getData= {getPersonajes}
        cards = {(item)=>(
            <Cardpersonaje 
                name={item.name}
                birth_year={item.birth_year}
                gender = {item.gender}
                height = {item.height}
                mass = {item.mass}
            />
        )}
    />
);

export default Personajes;
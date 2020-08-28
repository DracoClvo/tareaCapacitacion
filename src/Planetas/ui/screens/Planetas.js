import React from 'react';
import GeneralCardList from '../../../Components/GeneralCardList';
import {getPlanetas} from '../../../../Constants/Peticiones';
import CardPlaneta from '../widgets/CardPlaneta';
const Planetas = ()=>(
    <GeneralCardList
        getData= {getPlanetas}
        cards = {(item)=>(
            <CardPlaneta
                name = {item.name}
                terrain ={item.terrain}
                climate = {item.climate}
            />
        )}
    />
);

export default Planetas;
import React from 'react';
import GeneralCardList from '../../../Components/GeneralCardList';
import {getVehiculos} from '../../../../Constants/Peticiones';
import CardVehiculos from '../widgets/CardVehiculos'
const Vehiculos = ()=>(
    <GeneralCardList
        getData= {getVehiculos}
        cards = {(item)=>(
            <CardVehiculos
                name={item.name}
                model={item.model}
                cost_in_credits={item.cost_in_credits}
                max_atmosphering_speed={item.max_atmosphering_speed}
            />
        )}
    />
);

export default Vehiculos;
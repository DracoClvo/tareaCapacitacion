
import React from 'react';
import GeneralCardList from '../../../Components/GeneralCardList';
import {getEspecies} from '../../../../Constants/Peticiones';
import CardEspecies from '../widgets/CardEspecies';
const Especies = ()=>(
    <GeneralCardList
        getData= {getEspecies}
        cards = {(item)=>(
            <CardEspecies
                name={item.name}
                classification={item.classification}
                designation={item.designation}
            />
        )}
    />
);

export default Especies;

import {api} from './Urls'

export const getListaData = async (items) => {
    try {
        const response = await fetch(`${api}${items}`);
        const data =  await response.json();
        const {results} = data;
        return results;
    } catch (e) {
        console.log(e)
    }
}
export const getEspecies = async() => getListaData('species');
export const getNaves = async () => getListaData('starships');
export const getPeliculas = async() => getListaData('films');
export const getPersonajes = async () => getListaData('people');
export const getPlanetas = async () => getListaData('planets');
export const getVehiculos = async () => getListaData('vehicles');


export const getPeliculasInfo = async (id) => {
    try{
        const response = await fetch(`${api}films/${id}`);
        const peliculasInfo =  await response.json();
        return peliculasInfo;
    }catch(e){
        console.log(e);
    } 
}







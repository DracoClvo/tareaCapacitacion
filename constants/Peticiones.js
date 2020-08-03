
import {api} from './Urls'

export const getPeliculas = async() => {
    try{
        const response = await fetch(`${api}films`);
        const data =  await response.json();
        const {results} = data;
        return results;
    }catch(e){
        console.log(e);
    } 
}


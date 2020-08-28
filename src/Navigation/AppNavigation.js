import React from 'react';
import {createStackNavigator, createAppContainer, createDrawerNavigator} from 'react-navigation';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import Especies from '../Especies/ui/screens/Especies';
import Home from '../Peliculas/ui/screens/Home';
import Naves from '../Naves/ui/screens/Naves';
import Personajes from '../Personajes/ui/screens/Personajes';
import Planetas from '../Planetas/ui/screens/Planetas';
import Vehiculos from '../Vehiculos/ui/screens/Vehiculos';
import PeliculasInfo from '../Peliculas/ui/widgets/PeliculasInfo'

import Menu from '../Components/Menu';
import Header from '../Components/Header';

const HomeStack = createStackNavigator({
    Peliculas:{
        screen: Home,
        navigationOptions:({navigation}) =>({
            header:(<Header navigation={navigation} />),
        }),
    },
    PeliculasInfo:{
        screen: PeliculasInfo,
        navigationOptions:({navigation}) =>({
            header:(<Header navigation={navigation} />),
        }),
    }
},
{
    initialRouteName: 'Peliculas',
});
const NavesStack = createStackNavigator({
    Naves:{
        screen: Naves,
        navigationOptions:({navigation}) =>({
            header:(<Header navigation={navigation} />),
        }),
    }
});
const EspeciesStack = createStackNavigator({
    Especies:{
        screen: Especies,
        navigationOptions:({navigation}) =>({
            header:(<Header navigation={navigation} />),
        }),
    }
});
const PersonajesStack = createStackNavigator({
    Personajes:{
        screen: Personajes,
        navigationOptions:({navigation}) =>({
            header:(<Header navigation={navigation} />),
        }),
    }
});
const PlanetasStack = createStackNavigator({
    Planetas:{
        screen: Planetas,
        navigationOptions:({navigation}) =>({
            header:(<Header navigation={navigation} />),
        }),
    }
});
const VehiculosStack = createStackNavigator({
    Vehiculos:{
        screen: Vehiculos,
        navigationOptions:({navigation}) =>({
            header:(<Header navigation={navigation} />),
        }),
    }
});

const MyDrawerNavigator = createDrawerNavigator(
    {
        HomeStack,
        NavesStack,
        EspeciesStack,
        VehiculosStack,
        PersonajesStack,
        PlanetasStack,
    },
    {
        initialRouteName: 'HomeStack',
        drawerWidth: wp('80%'),
        drawerType: 'slide',
        drawerBackgroundColor: '#282824',
        contentComponent: Menu
    }
);

export default AppNavigation = createAppContainer(MyDrawerNavigator);
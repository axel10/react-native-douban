/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import {StackNavigator, TabNavigator} from "react-navigation";
import MovieList from "./comp/MovieList"
import MovieDetail from "./comp/MovieDetail"
import React from "react";

const RootStack = StackNavigator(
    {
        Home: {
            screen: MovieList,
        },
        Detail:{
            screen:MovieDetail
        }
    },
    {
        initialRouteName: 'Home',
    }
);

const TabNavigate = TabNavigator(
    {
        Home: {
            screen: MovieList,
        },
        Detail:{
            screen:MovieDetail
        }
    },
    {
        initialRouteName: 'Home',
    }
);

export default class App extends React.Component{
    render(){
        return <TabNavigate/>
    }
}
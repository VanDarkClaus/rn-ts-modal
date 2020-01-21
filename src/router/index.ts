import React from 'react'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
// import { createBottomTabNavigator } from 'react-navigation-tabs';
import {
    HomeScreen,
    DetailsScreen,
    Login
} from '../screen'





const AppNavigator = createStackNavigator(
    {
      Home: HomeScreen,
      Details: DetailsScreen,
      Login
    },
    {
      initialRouteName: 'Login',
    }
  )
export const Router = createAppContainer(AppNavigator);
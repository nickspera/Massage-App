import React, { Component } from 'react';
import Home from './HomeComponent';
import Bodywork from './BodyworkComonent';
import ServiceInfo from './ServiceInfoComponent';
import { View, Platform } from 'react-native';
import { createStackNavigator, createDrawerNavigator } from 'react-navigation';

const BodyworkNavigator = createStackNavigator(
    {
        Bodywork: { screen: Bodywork },
        ServiceInfo: { screen: ServiceInfo }
    },
    {
        initialRouteName: 'Bodywork',
        navigationOptions: {
            headerStyle: {
                backgroundColor: '#05668D'
            },
            headerTintColor: '#FFF',
            headerTitleStyle: {
                color: '#FFF'
            }
        }
    }
);

const HomeNavigator = createStackNavigator(
    {
        Home: { screen: Home },
    },
    {
        navigationOptions: {
            headerStyle: {
                backgroundColor: '#05668D'
            },
            headerTintColor: '#FFF',
            headerTitleStyle: {
                color: '#FFF'
            }
        }
    }
);

const MainNavigator = createDrawerNavigator(
    {
        Home: { screen: HomeNavigator },
        Bodywork: { screen: BodyworkNavigator }
    },
    {
        drawerBackgroundColor: '#67B3C6',
    }
)

class Main extends Component {
    render() {
        return (
            <View style={{
                flex: 1,
                paddingTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight
                }}>
                <MainNavigator />
            </View>
        )
    }
}

export default Main;
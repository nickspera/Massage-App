import React, { Component } from 'react';
import Home from './HomeComponent';
import Bodywork from './BodyworkComonent';
import ServiceInfo from './ServiceInfoComponent';
import About from './AboutComponent';
import Contact from './ContactComponent';
import { View, Platform } from 'react-native';
import { createStackNavigator, createDrawerNavigator } from 'react-navigation';

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

const AboutNavigator = createStackNavigator(
    {
        About: { screen: About }
    },
    {
        initialRouteName: 'About',
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

const ContactNavigator = createStackNavigator(
    {
        Contact: { screen: Contact }
    },
    {
        initialRouteName: 'Contact',
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
        Bodywork: { screen: BodyworkNavigator },
        About: { screen: AboutNavigator },
        Contact: { screen: ContactNavigator }
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
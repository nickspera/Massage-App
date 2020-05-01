import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';
import { SERVICES } from '../shared/services';
import { PROMOTIONS } from '../shared/promotions';

function RenderItem({item}) {
    if (item) {
        return (
            <Card
                featuredTitle={item.name}
                image={require('./images/massage-service.jpg')}>
                <Text
                    style={{margin: 10}}>
                        {item.description}
                    </Text>
                </Card>
        );
    }
    return <View />
}

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            services: SERVICES,
            promotions: PROMOTIONS
        };
    }

    static navigationOptions = {
        title: 'Home'
    }

    render() {
        return (
            <ScrollView>
                <RenderItem
                    item={this.state.services.filter(service => service.featured)[0]} />
                <RenderItem
                    item={this.state.services.filter(service => service.featured)[1]} />
                <RenderItem
                    item={this.state.services.filter(service => service.featured)[2]} />
                <RenderItem
                    item={this.state.promotions.filter(promotion => promotion.featured)[0]} />
            </ScrollView>
        );
    }
}

export default Home;
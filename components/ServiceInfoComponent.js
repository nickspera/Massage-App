import React, { Component } from 'react';
import { Text, View, ScrollView, FlatList } from 'react-native';
import { Card } from 'react-native-elements';
import { SERVICES } from '../shared/services';
import { REVIEWS } from '../shared/reviews';

function RenderService({service}) {
    if (service) {
        return (
            <Card
                featuredTitle={service.name}
                image={require('./images/massage-service.jpg')}>
                <Text style={{margin: 10}}>
                    {service.description}
                </Text>
            </Card>
        );
    }
    return <View />;
}

function RenderReviews({reviews}) {
    
    const renderReviewItem = ({item}) => {
        return (
            <View style={{margin: 10}}>
                <Text style={{fontSize: 14}}>{item.text}</Text>
                <Text style={{fontSize: 12}}>{item.rating} Stars</Text>
                <Text style={{fontSize: 12}}>{`-- ${item.author}`}</Text>
            </View>
        );
    };

    return (
        <Card title='Reviews'>
            <FlatList
                data={reviews}
                renderItem={renderReviewItem}
                keyExtractor={item => item.id.toString()}
                />
        </Card>
    );
}

class ServiceInfo extends Component {

    constructor(props) {
        super(props);
        this.state= {
            services: SERVICES,
            reviews: REVIEWS
        };
    }

    static navigationOptions = {
        title: 'Service Information'
    }

    render() {
        const serviceId = this.props.navigation.getParam('serviceId');
        const service = this.state.services.filter(service => service.id === serviceId)[0];
        const reviews = this.state.reviews.filter(review => review.serviceId === serviceId);
        return (
            <ScrollView>
                <RenderService service={service} />
                <RenderReviews reviews={reviews} />
            </ScrollView>
        );
    }
}

export default ServiceInfo;
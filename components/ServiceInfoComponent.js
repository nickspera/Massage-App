import React from 'react';
import { Text, View } from 'react-native';
import { Card } from 'react-native-elements';

function RenderService({service}) {
    if (service) {
        return (
            <Card
                featuredTitle={service.name}
                image={require('./images/massage001.jpg')}>
                <Text style={{margin: 10}}>
                    {service.description}
                </Text>
            </Card>
        );
    }
    return <View />;
}

function ServiceInfoComponent(props) {
    return <RenderService service={props.service} />
}

export default ServiceInfoComponent;
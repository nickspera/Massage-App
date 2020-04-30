import React, { Component } from 'react';
import Directory from './DirectoryComonent';
import ServiceInfo from './ServiceInfoComponent';
import { View } from 'react-native';
import { SERVICES } from '../shared/services';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            services: SERVICES,
            selectedService: null
        };
    }

    onServiceSelect(servideId) {
        this.setState({selectedService: servideId});
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <Directory
                    services={this.state.services}
                    onPress={serviceId => this.onServiceSelect(serviceId)}
                />
                <ServiceInfo
                    service={this.state.services.filter
                        (service => service.id === this.state.selectedService)[0]}
                />
            </View>
        )
    }
}

export default Main;
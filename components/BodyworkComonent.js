import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';
import { SERVICES } from '../shared/services';

class Bodywork extends Component {

    constructor(props) {
        super(props);
        this.state = {
            services: SERVICES
        };
    }

    static navigationOptions = {
        title: 'Bodywork'
    };

    render() {
        const { navigate } = this.props.navigation;
        const renderBodyworkItem = ({item}) => {
                return (
                    <ListItem
                        title={item.name}
                        subtitle={item.description}
                        onPress={() => navigate('ServiceInfo', {serviceId: item.id})}
                        leftAvatar={{ source: require('./images/massage001.jpg')}}
                    />
                );
        };

        return (
            <FlatList
                 data={this.state.services}
                 renderItem={renderBodyworkItem}
                 keyExtractor={item => item.id.toString()}
             />
        )
    }
}

export default Bodywork;

// Edit so only the services with feature true are displayed on this page (commented out in shared/services.js)

// Display 5 random comments under the services listed
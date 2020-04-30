import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';
import { SERVICES } from '../shared/services';

class Directory extends Component {

    constructor(props) {
        super(props);
        this.state = {
            services: SERVICES
        };
    }

    static navigationOptions = {
        title: 'Directory'
    };

    render() {
        const { navigate } = this.props.navigation;
        const renderDirectoryItem = ({item}) => {
            return (
                <ListItem
                    title={item.name}
                    subtitle={item.description}
                    onPress={() => navigate('ServiceInfo', {serviceId: item.id})}
                    leftAvatar={{ source: require('./images/massage001.jpg')}}
                />
            )
        };

        return (
            <FlatList
                data={this.state.services}
                renderItem={renderDirectoryItem}
                keyExtractor={item => item.id.toString()}
            />
        );
    }
}

export default Directory;
import React from 'react';
import { View, Text, Button } from 'react-native';
import {Props} from 'src/interfaces/compInterfaces'
import { inject,observer } from 'mobx-react';

const DetailsScreen: React.FC<Props> = props =>{
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Details Screen</Text>
          <Text>{props.homeStore.num}</Text>
        </View>
    )
  }

  export default inject('homeStore')(observer(DetailsScreen))

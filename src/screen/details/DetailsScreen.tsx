import React from 'react';
import { View, Text, Button,DeviceEventEmitter,AsyncStorage } from 'react-native';
import {Props} from 'src/interfaces/compInterfaces'
import { inject,observer } from 'mobx-react';

const DetailsScreen: React.FC<Props> = props =>{
    const changeColor = (color:string) =>{
      DeviceEventEmitter.emit('theme_change', color)
      AsyncStorage.setItem('themeColor',color)
    }
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Details Screen</Text>
          <Button title='点击换肤' onPress={()=>{changeColor('#436')}}></Button>
          <Button title='点击换肤' onPress={()=>{changeColor('#836')}}></Button>
          <Button title='点击换肤' onPress={()=>{changeColor('#f36')}}></Button>
        </View>
    )
  }

  export default inject('homeStore')(observer(DetailsScreen))

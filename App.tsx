import React, {useEffect} from 'react';
import { View, Text, DeviceEventEmitter,AsyncStorage } from 'react-native';
import Router from './src/router'
import { MobXProviderContext } from 'mobx-react'
import store from './src/stores'
import { Provider as RnProvider } from '@ant-design/react-native'

const App:React.FC = () =>{
  //配置全局主题色
  //修改配色在页面调用DeviceEventEmitter.emit('theme_change', '#000');
  let [color, setColor] = React.useState('#000')
  AsyncStorage.getItem('themeColor')
  .then (res =>{
      if(res !== null){
          setColor(res)
      }
  })
  useEffect(()=>{
    DeviceEventEmitter.addListener('theme_change', (params:string) =>{
      setColor(params)
    })
  })
  return(
    <MobXProviderContext.Provider value = {store}>
       <RnProvider>
        <Router screenProps={{themeColor: color}}></Router>
       </RnProvider>
      </MobXProviderContext.Provider>
  )
}

export default App
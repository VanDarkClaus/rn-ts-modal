import React, {useEffect} from 'react';
import { View, Text, DeviceEventEmitter } from 'react-native';
import {Router} from './src/router'
import { MobXProviderContext } from 'mobx-react'
import store from './src/stores'
import { Provider as RnProvider } from '@ant-design/react-native'

const App:React.FC = () =>{
  //配置全局主题色
  //修改配色在页面调用DeviceEventEmitter.emit('theme_change', '#000');
  const [color, setColor] = React.useState('#f6f6f8')
  useEffect(()=>{
    DeviceEventEmitter.addListener('theme_change', params =>{
      setColor(params)
    })
  },[color])
  return(
    <MobXProviderContext.Provider value = {store}>
       <RnProvider>
        <Router screenProps={{themecolor: color}}></Router>
       </RnProvider>
      </MobXProviderContext.Provider>
  )
}

export default App
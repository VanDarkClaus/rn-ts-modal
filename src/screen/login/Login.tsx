import React from 'react';
import { View, Text, Button, AsyncStorage } from 'react-native';
import {Props} from '../../interfaces/compInterfaces'
import { inject,observer } from 'mobx-react';
import {toJS} from 'mobx'
import { StackActions, NavigationActions } from 'react-navigation';

//重置路由堆栈
const resetAction = StackActions.reset({
  index: 0,
  actions: [NavigationActions.navigate({ routeName: 'Home' })]
});


@inject('userStore')
@observer
export default class Login extends React.Component<Props> {
  static navigationOptions = {
    headerShown:false
  }
  loginHandle = async() =>{
    this.props.userStore.login()
  }
  render() {
    return (
      <View>
          {
            this.props.userStore.userInfo.isLogin?
            this.props.navigation.dispatch(resetAction)
            :
              <View>
                <Button title='登录' onPress={this.loginHandle}></Button>
              </View>
          }

      </View>
    )
  }
}


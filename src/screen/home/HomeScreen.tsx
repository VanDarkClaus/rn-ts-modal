import React from 'react';
import {View, Text, Button} from 'react-native';
import {Props} from 'src/interfaces/compInterfaces';
import {inject, observer} from 'mobx-react';
import {toJS} from 'mobx';

@inject('userStore')
@observer
export default class HomeScreen extends React.Component<Props> {
  // static navigationOptions = {
  //   headerShown:false
  // }
  jumpHandle = () =>{
    this.props.navigation.navigate('Details')
  }
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Home Screen</Text>
        <Button
          title="登出"
          onPress={() => {
            this.props.userStore.loginOut(this.props.navigation);
          }}></Button>
        <Button title="跳转到详情" onPress={this.jumpHandle}></Button>
      </View>
    );
  }
}

// @inject('userStore')
// export default  inject('userStore')(inject('homeStore')(observer(HomeScreen)))

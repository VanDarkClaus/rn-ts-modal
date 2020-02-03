import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
// import { createBottomTabNavigator } from 'react-navigation-tabs';
import {HomeScreen, DetailsScreen, Login} from '../screen';

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen,
    Login,
  },
  {
    initialRouteName: 'Login',
    defaultNavigationOptions: (params:{screenProps:any}) => {
      return {
        // screenProps 即可获取全局变量 themeColor
        headerStyle: {
          backgroundColor: params.screenProps.themeColor // <----- 看这里
        },
        headerTintColor: '#ffffff',
        headerTitleStyle: {
          fontWeight: 'bold'
        }
      }
    }
  });
export default createAppContainer(AppNavigator);

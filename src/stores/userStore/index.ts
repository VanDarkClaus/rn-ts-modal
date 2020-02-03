import { observable, action } from "mobx"
import {AsyncStorage} from 'react-native'

interface UserInfo{
    // id?:String,
    // name?:string,
    [a:string]:any,
    isLogin?:Boolean
}

class UserStore {
    @observable userInfo:UserInfo ={}
    constructor() {
        AsyncStorage.getItem('userInfo')
        .then (res =>{
            if(res !== null){
                this.userInfo.isLogin = JSON.parse(res)
            }
        })

    }
//登录动作
    @action
    login = async() =>{
       AsyncStorage.setItem('userInfo',JSON.stringify({
           userInfo:{
               isLogin:true
           }
       }))
       this.userInfo.isLogin = true
    }
//退出登录
    @action
    loginOut = async(navigation:any) =>{
        await AsyncStorage.removeItem('userInfo')
        this.userInfo = {
            isLogin:false
        }
        navigation.navigate('Login')
    }
}
export const userStore = new UserStore()
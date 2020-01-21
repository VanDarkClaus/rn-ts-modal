import axios from "axios"   //封装一个比较好用的 ajax 
import { Portal, Toast } from '@ant-design/react-native'

//提供loading动画
class StartToast {
    key: any;
    start() {
        this.key = Toast.loading('loading')
    }
    stop() {
        Portal.remove(this.key)
    }
}

const loadingToast = new StartToast()

// 当第一次请求时，显示loading  线上 开发环境  生产环境区别  process 一个进程 
class AjaxRequest{
    baseURL: string;
    timeout: number;
    queue: { [a:string]: string; };
    constructor(){
        // this.baseURL = process.env.NODE_ENV == "production" ? "/" : "http://localhost:3030"  
        this.baseURL = 'http://localhost:3000'
        this.timeout = 5000;//访问接口时间 超时了  5s 
        this.queue = { }; // 存放每一次的请求
        /**
         * 我按钮 一直点 10次 请求的url一样  这个多次请求  我只需要 看你第一个请求
         */
    }
    //目的把baseURL 和 timeout  和 /user混合一块  合并
    merge(options:any){
        return {...options,baseURL:this.baseURL,timeout:this.timeout}
    }
    //拦截器，并封装动画
    setInterceptor(instance:any,url:string){
        // 每次请求时，都要加上一个loading效果
        instance.interceptors.request.use((config:any)=>{
            config.headers.token = "xxx";  //封装token
            // console.log(this.queue)  // {}
            // console.log(Object.keys(this.queue))  // []
            // 第1次请求时，显示Loading动画
            if(Object.keys(this.queue).length === 0){
                loadingToast.start(); //只让小动画 显示一次  后来在一直请求 就不用一直转转
            }
            this.queue[url] = url; 
            return config;
        });
        //返回
        instance.interceptors.response.use((resp:any)=>{

            delete this.queue[url]
            if(Object.keys(this.queue).length === 0){
                loadingToast.stop()
            }
            return resp.data  //相应拦截 过滤数据 
        })
    }
    request(options:any){
        let instance = axios.create(); //创建一个ajax实例 发出请求  
        this.setInterceptor(instance,options.url); // 设置拦截
        let config = this.merge(options);
        return instance(config)  //实例 表示调用ajax   返回一个ajax的实例 
    }
}
export default new AjaxRequest;


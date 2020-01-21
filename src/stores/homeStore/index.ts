import { observable, action } from "mobx"


class HomeStore {
    @observable num:number = 1
    constructor() {
    }
    //
    @action
    increment = () =>{
        this.num = this.num + 1
    }
}
export const homeStore = new HomeStore()
import { makeAutoObservable } from 'mobx'

class ListStore {
  arr = [1, 2, 3, 4, 5]
  arrPush = () => {
    this.arr.push(this.arr.length + 1)
  }
  // 使用 get 方法定义计算属性，返回值为计算属性
  // 计算属性：由其他状态计算得到，依赖状态改变时，计算属性随之改变并更新渲染页面
  get newArr() {
    return this.arr.filter((item) => item > 3)
  }
  constructor() {
    makeAutoObservable(this)
  }
}

export default ListStore

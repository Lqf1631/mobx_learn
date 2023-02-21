// 创建 RootStore 根仓库类，对其余仓库模块进行导入并实例化挂载
// 实例化挂载在构造函数中进行
import React from 'react'
import CounterStore from './counter.Store'
import ListStore from './list.Store'
class RootStore {
  constructor() {
    this.listStore = new ListStore()
    this.counterStore = new CounterStore()
  }
}
// 实例化根仓库 rootStore
const rootStore = new RootStore()
// 调用 createContext 创建 context 用于承载传输 rootStore
const context = React.createContext(rootStore)
// 自定义 hook 函数 useStore 对 context 进行拦截并获取 rootStore 作为返回值
const useStore = () => React.useContext(context)
// 以命名导出形式导出 useStore 函数供组件使用
export { useStore }

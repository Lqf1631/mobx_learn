import { makeAutoObservable } from 'mobx'

// 定义仓库类
class CounterStore {
  // 定义状态数据
  count = 0
  // 定义操作状态数据方法
  addCount = () => {
    this.count++
  }
  // 实现响应式数据
  // 在构造函数中调用 makeAutoObservable 传入 this
  constructor() {
    makeAutoObservable(this)
  }
}

// 在 index 中进行仓库类的实例化并且将实例挂载到 rootStore 上
// 导出仓库类
export default CounterStore

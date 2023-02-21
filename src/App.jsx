// // 导入 counterStore 仓库
// import counter from './store/counter.Store'
// // 导入 counterStore 仓库
// import list from './store/list.Store'

// 导入 使得 react 与 mobx 产生联系
// 即 react 内部调用 mobx 的操作状态方法修改状态值后，能触发页面更新
// 导入 oberver 方法，对传入组件进行包裹，实现响应式与 mobx store 沟通
import { observer } from 'mobx-react-lite'
import { useStore } from './store'
const App = () => {
  // 仅解构到模块状态库 Store 实例，避免影响响应式
  const { listStore, counterStore } = useStore()
  return (
    <>
      <div>
        {/* 使用仓库存储的状态值和操作状态值的方法 */}
        App {counterStore.count}{' '}
        <button onClick={() => counterStore.addCount()}>+1</button>
      </div>
      <div>
        {listStore.newArr.join('-')}{' '}
        <button onClick={listStore.arrPush}>push</button>
      </div>
    </>
  )
}
export default observer(App)

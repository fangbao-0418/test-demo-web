### vuex和单纯全局对象不同
1. vuex的状态储存是响应式的 当vue组件从store读取状态的时候 如果store里面的状态发生了变化 组件也会相对应的更新
2. 不能直接改变store中的状态，改变状态唯一途径是显示提交(commit)mutations 这样方便我们跟踪每一个状态的变化
### store单一状态树可以理解为整个应用公用一个状态
* 注意：如果在模块化构建系统中，请确保在开头调用了 Vue.use(Vuex)
#### state存放状态
#### mutations存放对状态的处理
#### 通过store.commit('mutations事件类型')方式触发
* store.commit('mutations事件类型',n) 可以传递额外的参数 即提交载荷
`mutations: {
   increment (state, n) {
     state.count += n
   }
 }
store.commit('increment', 10)`
* 载荷一般是一个对象 store.commit('mutations事件类型',payload)
`mutations: {
   increment (state, payload) {
     state.count += payload.amount
   }
 }
 store.commit('increment', {
   amount: 10
 })`
* 对象风格的提交方式 但是mutations里的不变
`store.commit({
   type: 'increment',
   amount: 10
 })`
* 使用常量替代Mutation事件类型
`// mutation-types.js
 export const SOME_MUTATION = 'SOME_MUTATION'
 // store.js
 import Vuex from 'vuex'
 import { SOME_MUTATION } from './mutation-types'
 const store = new Vuex.Store({
   state: { ... },
   mutations: {
     // 我们可以使用 ES2015 风格的计算属性命名功能来使用一个常量作为函数名
     [SOME_MUTATION] (state) {
       // mutate state
     }
   }
 })`
#### mapMutations
`import { mapMutations } from 'vuex'
 export default {
   // ...
   methods: {
     ...mapMutations([
       'increment' // 映射 this.increment() 为 this.$store.commit('increment')
     ]),
     ...mapMutations({
       add: 'increment' // 映射 this.add() 为 this.$store.commit('increment')
     })
   }
 }`
#### 在vue中如何读取状态
* 因为状态是响应式的 所以通过计算属性`computed`最合适 通过`store.state.属性名` 获取到状态值 绑定到页面上可以
#### mapState辅助函数生成计算属性
* 返回的是一个对象 使用...对象展开符 直接暴露成是computed的对象
`computed: mapState([
   // 映射 this.count 为 store.state.count
   'count'
 ])`
#### 子组件如何获取到store里的状态
* 通过在根实例中`注册store`选项  然后子组件通过`this.$store.state.属性名`取到值
#### getters相当于store里面的计算属性
* 参数：state 也可以接受其他的getters作为第二个参数
* 调用：this.$store.getters.方法名
#### mapGetters辅助函数
* 使用对象展开运算符将 getters 混入 computed 对象中
* 将一个 getter 属性另取一个名字，使用对象形式：
`mapGetters({
// 映射 this.doneCount 为 store.getters.doneTodosCount
 doneCount: 'doneTodosCount'
})`
### actions
* 提交的是mutation 而不是直接修改状态；可以包含异步操作(mutations只能是同步)
### modules


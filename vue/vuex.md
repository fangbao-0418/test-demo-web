### vuex�͵���ȫ�ֶ���ͬ
1. vuex��״̬��������Ӧʽ�� ��vue�����store��ȡ״̬��ʱ�� ���store�����״̬�����˱仯 ���Ҳ�����Ӧ�ĸ���
2. ����ֱ�Ӹı�store�е�״̬���ı�״̬Ψһ;������ʾ�ύ(commit)mutations �����������Ǹ���ÿһ��״̬�ı仯
### store��һ״̬���������Ϊ����Ӧ�ù���һ��״̬
* ע�⣺�����ģ�黯����ϵͳ�У���ȷ���ڿ�ͷ������ Vue.use(Vuex)
#### state���״̬
#### mutations��Ŷ�״̬�Ĵ���
#### ͨ��store.commit('mutations�¼�����')��ʽ����
* store.commit('mutations�¼�����',n) ���Դ��ݶ���Ĳ��� ���ύ�غ�
`mutations: {
   increment (state, n) {
     state.count += n
   }
 }
store.commit('increment', 10)`
* �غ�һ����һ������ store.commit('mutations�¼�����',payload)
`mutations: {
   increment (state, payload) {
     state.count += payload.amount
   }
 }
 store.commit('increment', {
   amount: 10
 })`
* ��������ύ��ʽ ����mutations��Ĳ���
`store.commit({
   type: 'increment',
   amount: 10
 })`
* ʹ�ó������Mutation�¼�����
`// mutation-types.js
 export const SOME_MUTATION = 'SOME_MUTATION'
 // store.js
 import Vuex from 'vuex'
 import { SOME_MUTATION } from './mutation-types'
 const store = new Vuex.Store({
   state: { ... },
   mutations: {
     // ���ǿ���ʹ�� ES2015 ���ļ�����������������ʹ��һ��������Ϊ������
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
       'increment' // ӳ�� this.increment() Ϊ this.$store.commit('increment')
     ]),
     ...mapMutations({
       add: 'increment' // ӳ�� this.add() Ϊ this.$store.commit('increment')
     })
   }
 }`
#### ��vue����ζ�ȡ״̬
* ��Ϊ״̬����Ӧʽ�� ����ͨ����������`computed`����� ͨ��`store.state.������` ��ȡ��״ֵ̬ �󶨵�ҳ���Ͽ���
#### mapState�����������ɼ�������
* ���ص���һ������ ʹ��...����չ���� ֱ�ӱ�¶����computed�Ķ���
`computed: mapState([
   // ӳ�� this.count Ϊ store.state.count
   'count'
 ])`
#### �������λ�ȡ��store���״̬
* ͨ���ڸ�ʵ����`ע��store`ѡ��  Ȼ�������ͨ��`this.$store.state.������`ȡ��ֵ
#### getters�൱��store����ļ�������
* ������state Ҳ���Խ���������getters��Ϊ�ڶ�������
* ���ã�this.$store.getters.������
#### mapGetters��������
* ʹ�ö���չ��������� getters ���� computed ������
* ��һ�� getter ������ȡһ�����֣�ʹ�ö�����ʽ��
`mapGetters({
// ӳ�� this.doneCount Ϊ store.getters.doneTodosCount
 doneCount: 'doneTodosCount'
})`
### actions
* �ύ����mutation ������ֱ���޸�״̬�����԰����첽����(mutationsֻ����ͬ��)
### modules


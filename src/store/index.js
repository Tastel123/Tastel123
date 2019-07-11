import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../reducers'
export default function configStore() {
    // createStore 返回指令 单一状态树
    // vuex 四种状态
    // redux: state, reducer(函数，返回状态) 概念
    // action 返回新的状态 没有mutations
    const store = createStore(rootReducer)
    return store
}
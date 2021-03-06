

import { createStore, combineReducers } from 'redux';
import userReducer from './userReducer';

const store = createStore(combineReducers({user:userReducer}))









// 打印初始状态
console.log(store.getState())


// 每次 state 更新时，打印日志
// 注意 subscribe() 返回一个函数用来注销监听器
const unsubscribe = store.subscribe(() =>
  console.log("刷新了state")
)





// 停止监听 state 更新
unsubscribe();


export default store
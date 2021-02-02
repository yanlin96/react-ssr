import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { reducer as homeReducer } from "../containers/Home/store";

const reducer = combineReducers({
  home: homeReducer,
});

//注意，传统方法的话，store是单例模式，所有用户使用同一个store，这是错误的！！！
//const store = createStore(reducer, applyMiddleware(thunk));
//export default store;

export const getStore = () => {
  return createStore(reducer, applyMiddleware(thunk));
};

export const getClientStore = () => {
  const defaultState = window.context.state;
  return createStore(reducer, defaultState, applyMiddleware(thunk));
};

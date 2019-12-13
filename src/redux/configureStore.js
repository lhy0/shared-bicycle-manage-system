import { createStore } from 'redux';
// 引入所有的reducer
import reducer from './reducer';
// 安装redux-devtools-extension的可视化工具。
import { composeWithDevTools } from 'redux-devtools-extension'
const initialState = {
    menuName: '',
    logged: false
}
const configureStore = () => createStore(reducer, initialState);

export default configureStore;
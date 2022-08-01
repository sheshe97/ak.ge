import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux'
import {combineReducers, createStore} from "redux";

const reducer = (state=0,action)=>{
    if(action.type==='INCREMENT'){
        console.log(state)
        return state +1
    }else if(action.type==="DECREMENT"){
        return state -1
    }
    return state
}
const allReducers=combineReducers({
    counter:reducer
})
const store=createStore(allReducers);

store.dispatch({
    type:'INCREMENT'
});

store.dispatch({
    type:'DECREMENT'
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

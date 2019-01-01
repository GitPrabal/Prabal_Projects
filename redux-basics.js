const redux = require('redux');
const createStore =  redux.createStore;

// Reducer

const initialState= {
    counter:0
}

const rootReducer = (state=initialState,action)=>{
return state;
};

// Store

const store = createStore(rootReducer); 
console.log(store.getState());

// Dispatching Action
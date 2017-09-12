import { createStore } from 'redux'
import _ from 'lodash';

const uiPrefix = "_UI";

let store = null;

export const createReduxStore = (reducers) => {
    store = createStore(reducers);
    return store;
};

export const createUIReducer = (suffix, initialState = null) => {
    return (state = initialState, action) => {
        switch (action.type) {
            case `${suffix}${uiPrefix}`:
                if(_.isArray(action.payload) || _.isObject(action.payload)){
                    return {...state, ...action.payload};
                }
                return action.payload;
            default:
                return state;
        }
    }
};

const dispatcher = (type, payload) => {
    const action = {
        type,
        payload
    };
    store.dispatch(action)
};

export const uiDispatcher = (suffix, uiData) => {
    dispatcher(`${suffix}${uiPrefix}`, uiData)
};
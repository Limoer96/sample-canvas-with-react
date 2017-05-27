import { CHANGER, CHANGEG, CHANGEB, CHANGEOPCITY, CHANGESTYLE } from './Actions.js';

const INIT_STATE = {
    r: 1.0,
    g: 1.0,
    b: 1.0,
    opcity: 1.0,
    _style: 'no_style'
}

export function reducer(state=INIT_STATE, action){
    switch(action.type){
        case CHANGER:
            return Object.assign({}, state, {r: action.value});
        case CHANGEG: 
            return Object.assign({}, state, {g: action.value});
        case CHANGEB:
            return Object.assign({}, state, {b: action.value});
        case CHANGEOPCITY: 
            return Object.assign({}, state, {opcity: action.value});
        case CHANGESTYLE: 
            return Object.assign({}, state, {_style: action.value});  
        default:
            return state;        
    }
}



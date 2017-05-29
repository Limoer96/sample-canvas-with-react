import { CHANGER, CHANGEG, CHANGEB, CHANGEOPCITY, CHANGESTYLE, MAKETODEFAULT } from './Actions.js';

const INIT_STATE = {
    r: 1.0,
    g: 1.0,
    b: 1.0,
    opcity: 1.0,
    _style: 'no_style',
    hasComplete: false
}

export function reducer(state=INIT_STATE, action){
    switch(action.type){
        case CHANGER:
            return Object.assign({}, state, {r: action.value, hasComplete: false});
        case CHANGEG: 
            return Object.assign({}, state, {g: action.value, hasComplete: false});
        case CHANGEB:
            return Object.assign({}, state, {b: action.value, hasComplete: false});
        case CHANGEOPCITY: 
            return Object.assign({}, state, {opcity: action.value, hasComplete: false});
        case CHANGESTYLE: 
            return Object.assign({}, state, {_style: action.value, hasComplete: false});
        case MAKETODEFAULT: 
            return Object.assign({}, state, INIT_STATE, { hasComplete: true });  
        default:
            return state;        
    }
}




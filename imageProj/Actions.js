export const CHANGER = 'CHANGER';
export const CHANGEG = 'CHANGEG';
export const CHANGEB = 'CHANGEB';
export const CHANGEOPCITY = 'CHANGEOPCITY';
export const CHANGESTYLE = 'CHANGESTYLE';

export function changeR(value){
    return {
        type: CHANGER,
        value: value
    }
}

export function changeG(value){
    return {
        type: CHANGEG,
        value: value
    }
}

export function changeB(value){
    return {
        type: CHANGEB,
        value: value
    }
}
export function changeOpcity(value){
    return {
        type: CHANGEOPCITY,
        value: value
    }
}
export function changeStyle(value){
    return {
        type: CHANGESTYLE,
        value: value
    }
}


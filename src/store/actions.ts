import { Action, Actions } from "../types/store";

export const changeEyes = (payload: string): Action => {
    return {
        type: Actions.CHANGE_EYES,
        payload
    }
}

export const changeMouth = (payload: string): Action => {
    return {
        type: Actions.CHANGE_MOUTH,
        payload
    }
}

export const changeNose = (payload: string): Action => {
    return {
        type: Actions.CHANGE_NOSE,
        payload
    }
}
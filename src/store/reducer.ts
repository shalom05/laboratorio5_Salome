import { stateTypes, Action, Actions } from "../types/store";

export const reducer = (action: Action, currentState: stateTypes) => {
    switch (action.type) {
        case Actions.CHANGE_EYES:
            return {
                ...currentState,
                eyes: action.payload
            }
        case Actions.CHANGE_MOUTH:
            return {
                ...currentState,
                mouth: action.payload
            }
        case Actions.CHANGE_NOSE:
            return {
                ...currentState,
                nose: action.payload
            }
        default:
            return currentState
    }
}
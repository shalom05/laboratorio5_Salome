import { stateTypes, Action, Actions, Observer, eyesTypes, mouthTypes, noseTypes } from "../types/store"
import { reducer } from "./reducer"

export let state: stateTypes = {
    eyes: eyesTypes.eyes1,
    mouth: mouthTypes.mouth1,
    nose: noseTypes.nose1
}

const observers: Observer[] = []

export const dispatch = (action: Action) => {
    const clone = JSON.parse(JSON.stringify(state))
    state = reducer(action, clone)
    observers.forEach((o: Observer) => o.render())
    console.log(state)
}

export const addObserver = (observer: Observer) => {
    observers.push(observer)
}
export interface stateTypes {
    eyes: string,
    mouth: string,
    nose: string
}

export enum eyesTypes {
    eyes1 = "eyes1",
    eyes2 = "eyes2",
    eyes3 = "eyes3"
}

export enum mouthTypes {
    mouth1 = "mouth1",
    mouth2 = "mouth2",
    mouth3 = "mouth3"
}

export enum noseTypes {
    nose1 = "nose1",
    nose2 = "nose2",
    nose3 = "nose3"
}

export interface Action {
    type: Actions;
    payload: string;
}

export enum Actions {
    "CHANGE_EYES" = "CHANGE_EYES",
    "CHANGE_MOUTH" = "CHANGE_MOUTH",
    "CHANGE_NOSE" = "CHANGE_NOSE"
}

export type Observer = HTMLElement & { render: () => void}
import { Activity } from "../types"

export type ActivityActions = {
    type: 'save-activity',
    payload: { newActivity: Activity }
}

type ActivityState = {
    activities : Activity[]
}

export const initialState : ActivityState = {
    activities: []
}

export const activityReducer = (
        state:  ActivityState = initialState,
        actions: ActivityActions
    ) => {

    if(actions.type = 'save-activity') {
        // Este código maneja la lógica para actualizar el state
        return {
            ...state,
            activities: [...state.activities, actions.payload.newActivity]
        }
    }

    return state

}
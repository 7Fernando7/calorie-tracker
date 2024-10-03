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
        console.log('desde el type de save-activity ')
    }

}
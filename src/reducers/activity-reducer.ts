import { Activity } from "../types"

export type ActivityActions = 
    { type: 'save-activity', payload: { newActivity: Activity } } |
    { type: 'set-activeId', payload: { id: Activity['id'] } }

type ActivityState = {
    activities : Activity[],
    activeId: Activity['id']
}

export const initialState : ActivityState = {
    activities: [],
    activeId: ''
}

export const activityReducer = (
        state:  ActivityState = initialState,
        actions: ActivityActions
    ) => {

    if(actions.type === 'save-activity') {
        // Este código maneja la lógica para actualizar el state
        return {
            ...state,
            activities: [...state.activities, actions.payload.newActivity]
        }
    }

    if( actions.type === 'set-activeId') { 
        return {
            ...state,
            activeId: actions.payload.id  // Actualizar el estado con el id de la actividad seleccionada
        }
    }

    return state

}
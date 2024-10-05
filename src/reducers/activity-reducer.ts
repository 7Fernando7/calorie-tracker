import { Activity } from "../types"

export type ActivityActions = 
    { type: 'save-activity', payload: { newActivity: Activity } } |
    { type: 'set-activeId', payload: { id: Activity['id'] } } |
    { type: 'delete-activeId', payload: { id: Activity['id'] } } 

export type ActivityState = {
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
        let updatedActivities : Activity[] = []
        if(state.activeId) {
            updatedActivities = state.activities.map(activity => activity.id === state.activeId? actions.payload.newActivity : activity )

        } else{
            updatedActivities = [...state.activities, actions.payload.newActivity]
        }

        return {
            ...state,
            activities: updatedActivities,
            activeId: ''
        }
    }

    if( actions.type === 'set-activeId') { 
        return {
            ...state,
            activeId: actions.payload.id  // Actualizar el estado con el id de la actividad seleccionada
        }
    }

    if(actions.type === 'delete-activeId') { 
        return {
            ...state,
            activeId: '',  // Resetear el estado del id de la actividad seleccionada
            activities: state.activities.filter(activity => activity.id !== actions.payload.id) // Quitar la actividad seleccionada del state
        }
    }

    return state

}
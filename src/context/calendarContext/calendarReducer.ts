import { CalendarState } from "./CalendarProvider";
import { Events } from '../../interfaces/Events';


type CalendarAction = {type: 'addEvent' , payload: Events[]}
                     |{type: 'setEventActive' , payload: Events}
                     |{type: 'updateEvent' , payload: Events}
                     |{type: 'deleteEvent'}
                     |{type: 'setNullEvent'}




export const calendarReducer = (state: CalendarState , action:CalendarAction): CalendarState => {
    switch (action.type) {
        case 'addEvent':
            return{
                ...state,
                event: [
                    ...action.payload,
                    ...state.event
                ]
            }
        case 'setEventActive':
            return {
                ...state,
                active: action.payload
            }
        case 'updateEvent':
            return{
                ...state,
                event: state.event.map(
                    e => e.id === action.payload.id ? action.payload : e
                )
            }
        case 'deleteEvent':
            return {
                ...state,
                event: state.event.filter(
                    e => e.id !== state.active?.id
                ),
                active: undefined
            } 
        case 'setNullEvent':
            return{
                ...state,
                active: undefined
            }               
    
        default:
            return state
    }
}

import { CalendarContext } from "./CalendarContext"
import { Events } from '../../interfaces/Events';
import moment from 'moment';
import { useReducer } from 'react';
import { calendarReducer } from './calendarReducer';


interface Props {
    children: JSX.Element | JSX.Element []
}

export interface CalendarState {
    event: Events[]
    active?: Events
}

const INITIAL_STATE: CalendarState = {
    event: [{
        id: 1,
        title: 'My cumpleaño',
        start: moment().toDate(),
        end: moment().add(2 , 'hours').toDate(),
        notes: 'Comprar',
        user: {
            id: 1223,
            name: 'Juan'
        }
    }],
    active: undefined

}

export const CalendarProvider = ({children} : Props) => {
    const [state, dispatch] = useReducer(calendarReducer, INITIAL_STATE)

    const setActiveEvent = (event: Events) => {
        dispatch({
            type: 'setEventActive',
            payload: event
        })
    }

    const addEvent = (event: Events[]) => {
        dispatch({
            type: 'addEvent',
            payload: event
        })
    }

    const updateEvent = (event: Events) => {
        dispatch({
            type: 'updateEvent',
            payload: event
        })
    }

    const deleteEvent = () => {
        dispatch({
            type: 'deleteEvent'
        })
    }

    const setNullEvent = () => {
        dispatch({type: 'setNullEvent'})
    }

    return (
       <CalendarContext.Provider value={{
            state,
            setActiveEvent,
            addEvent,
            updateEvent,
            deleteEvent,
            setNullEvent
       }}>
           {children}
       </CalendarContext.Provider>
    )
}

import { createContext } from 'react';
import { CalendarState } from './CalendarProvider';
import { Events } from '../../interfaces/Events';

interface CalendarContextProps {
    state: CalendarState,
    setActiveEvent: (event: Events) => void
    addEvent: (event: Events[]) => void
    updateEvent: (event: Events) => void
    deleteEvent: () => void,
    setNullEvent: () => void
}

export const CalendarContext = createContext({} as CalendarContextProps)
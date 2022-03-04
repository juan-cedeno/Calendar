import { DeleteFab, FabButton, ModalContent, NavBar } from "../components"
import { Calendar, momentLocalizer } from 'react-big-calendar'
import { CalendarEvent } from '../components/CalendarEvent';
import { useContext } from 'react';
import { UiContext } from '../context/uiContext/UiContext';
import { CalendarContext } from '../context/calendarContext/CalendarContext';
import moment from 'moment'

import 'react-big-calendar/lib/css/react-big-calendar.css'

const myEventsList = [{
    title: 'My cumpleaño',
    start: moment().toDate(),
    end: moment().add(2 , 'hours').toDate(),
    notes: 'Comprar',
    user: {
        id: 1223,
        name: 'Juan'
    }
}]


export const HomePage = () => {

    const localizer = momentLocalizer(moment)
    const {openModal} = useContext(UiContext)
    const {state,setActiveEvent , setNullEvent} = useContext(CalendarContext)
    const {active} = state

    const handlenDobleClick = (e: any) => {
        openModal()
        
    }
    const handlenSelect = (e:any) => {
        setActiveEvent(e)
    }

    const onSelectSlot = () => {
        setNullEvent()
    }


    return (
        <div>
            <NavBar/>
            <Calendar
                localizer={localizer}
                events={state.event}
                startAccessor="start"
                endAccessor="end"
                style={{ height: '100vh' }}
                components={{
                    event: CalendarEvent
                }}
                onDoubleClickEvent={handlenDobleClick}
                onSelectEvent={handlenSelect}
                selectable={true}
                onSelectSlot={onSelectSlot}
            />
            <ModalContent/>
            <FabButton/>
            {
                active && <DeleteFab/>
            }
        </div>
    )
}

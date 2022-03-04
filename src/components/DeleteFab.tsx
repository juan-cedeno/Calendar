import { useContext } from 'react';
import { CalendarContext } from '../context/calendarContext/CalendarContext';

export const DeleteFab = () => {

const {deleteEvent} = useContext(CalendarContext)

return (
<div onClick={deleteEvent}>
    <button className='btn btn-danger fab-danger'>
       Delete event
    </button>
</div>
)
}
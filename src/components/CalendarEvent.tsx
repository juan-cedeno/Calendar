
interface Props {
    title: string;
    start: Date;
    end: Date;
    notes: string;
    user: {
        id: number;
        name: string;
    };
}


export const CalendarEvent = ({event}: any) => {

    const {user} = event
    console.log(event);
    
    return (
        <div>
            <p>{event.title}</p>
            <p>{user.name}</p>
        </div>
    )
}

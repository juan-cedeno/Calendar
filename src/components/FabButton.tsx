import { useContext } from 'react';
import { UiContext } from '../context/uiContext/UiContext';

export const FabButton = () => {

    const {openModal} = useContext(UiContext)

    return (
        <button 
         className="btn btn-primary fab"
         onClick={openModal}
        >
          Add event
        </button>
    )
}

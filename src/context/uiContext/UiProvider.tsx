import { useReducer } from "react"
import { UiContext, uiReducer } from ".."

interface Props {
    children: JSX.Element | JSX.Element []
}

export interface UiState {
    openOrCloseModal: boolean
}

const INITIAL_STATE:UiState = {
    openOrCloseModal: false
}

export const UiProvider = ({children}: Props) => {

    const [state, dispatch] = useReducer(uiReducer, INITIAL_STATE)

    const openModal = () => {
        dispatch({type:'onpenModal'})
    }
    const closeModal = () => {
        dispatch({type:'closeModal'})
    }

    return (
        <UiContext.Provider value={{
            openModal,
            closeModal,
            state
        }}>
            {children}
        </UiContext.Provider>   
    )
}

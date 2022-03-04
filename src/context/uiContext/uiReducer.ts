import { UiState } from "./UiProvider";

type UiAction ={type: 'onpenModal'}
               |{type: 'closeModal'}

export const uiReducer = (state: UiState, action: UiAction):UiState => {
    switch (action.type) {
        case 'onpenModal':
            return {
                ...state,
                openOrCloseModal: true
            }
        case 'closeModal':
            return {
                ...state,
                openOrCloseModal: false
            }    
            
    
        default:
            return state
    }
}

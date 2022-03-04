import { createContext } from "react";
import { UiState } from "./UiProvider";


interface UiContextProps {
    openModal: () => void,
    closeModal: () => void
    state: UiState,
}
export const UiContext = createContext({} as UiContextProps)
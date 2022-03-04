import { ChangeEvent, useState } from 'react';

export const useForm = <T extends object>(initialState: T) => {
    
    const [form, setForm] = useState(initialState)


    const handlenChange = ({target}: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({
            ...form,
            [target.name]:target.value
        })
    }

    const clearForm = () => {
        setForm(initialState)
    }

    return {
        form,
        handlenChange,
        setForm,
        clearForm
    }
}

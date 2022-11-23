import { useState } from "react";


export const useForm = ( initialValue ) => {

    const [ formState, setFormSate ] = useState( initialValue );

    const onChangeInput = ({ target }) => {
        const { name, value } = target;
        setFormSate({
            ...formState,
            [ name ] : value
        })
    }

    const resetForm = () => {
        setFormSate( initialValue );
    }

    return {
        formState,
        ...formState,
        onChangeInput,
        resetForm,
    }
}

import { SetStateAction, useState } from 'react';

export const useField = (type: any) => {
    const [value, setValue] = useState('');

    const onChange = (event: { target: { value: SetStateAction<string>; }; }) => {
        setValue(event.target.value);
    };

    const clear = () => {
        setValue('');
    };

    return {
        type,
        value,
        onChange,
        clear,
    };
};
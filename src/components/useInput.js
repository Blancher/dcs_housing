import {useState} from 'react';

export default function useInput(validation) {
    const [input, setInput] = useState('');
    const [touched, setTouched] = useState(false);
    const valid = validation(input);
    const invalid = !valid && touched;
    const inputClasses = invalid ? 'invalid' : '';
    const handleChange = (e) => setInput(e.target.value);
    const handleBlur = () => setTouched(true);
    const handleSubmit = () => setTouched(valid ? false : true);
    return [input, setInput, valid, inputClasses, handleChange, handleBlur, handleSubmit, invalid];
}  
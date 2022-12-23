import {useState} from 'react';

const Field = () => {
    const [values,setValues] = useState({
        nom: "",
        email: ""
    })
    const handleChange = (key, value) => {
        setValues(...values, values.key = value )
    }
    return (
        <div>
            <label htmlFor=""></label>
            <input type="text" value={values.nom} onChange={(e) => {handleChange(key,e.target.value)}} />
        </div>
    );
}

export default Field;
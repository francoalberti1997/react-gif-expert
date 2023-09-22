import React from 'react'
import {useState} from 'react'

export const AddCategory = ({onSetPersonaje}) =>  {
  
    const [valor, setValor] = useState([""]);

    const onInputChange = ({target}) =>{
        
        setValor(target.value);
    }

    const onSbmit = (event) =>{
        event.preventDefault();
        // console.log(event);
        // onSetPersonaje(i => [valor, ...i])
        onSetPersonaje(valor)
        setValor("");

    }
    

    return (
    <form action="" onSubmit={onSbmit}>
        <input type="text" placeholder="busca gifs" value={valor} onChange={onInputChange}/>
    </form>
    // <input type="text" placeholder="busca gifs" value={valor} onChange={(event) => onInputChange(event)}/>

    )
}

export default AddCategory

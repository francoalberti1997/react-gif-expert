import React from 'react'
import {useState} from 'react'

function AddTitle() {

    const [titulo, setTitulo] = useState([""]);
    const [entrada, setEntrada] = useState([""]);

//SUBMIT
    const changeTitle = (event) =>{
        event.preventDefault();
        if(titulo.includes(entrada)) return;
        
        setTitulo([...titulo, entrada]);
        setEntrada("");

    }

//INPUT
    const entradaInput = ({target}) =>{
        setEntrada(target.value);
    }

    return (
    <div className='formulario'>
        <form action="" onSubmit={changeTitle}>
        <input type="text" onChange={entradaInput} value={entrada}/>
        </form>
        <h1>{titulo}</h1>
    </div>
  )
}

export default AddTitle

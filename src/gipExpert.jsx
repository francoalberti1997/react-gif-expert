import React from 'react'
import {useState} from 'react'
import {AddCategory} from "./components/AddCategory"
import AddTitle from "./components/addTitle"
import GifGrid from "./components/GifGrid"


export default function gipExpert() {
    const [personaje, setPersonaje] = useState(["punch"]);

    // const onBtn = (event)=>{
    //     setPersonaje([...personaje, "Valo  rant"])
    // }
    const onSetPersonaje = (arg) =>{
      
        if (personaje.includes(arg)) return;

        setPersonaje((i) =>
            [...i, arg]
            )
    }

    return (
      <div>
        <AddCategory onSetPersonaje = {onSetPersonaje}
        // check={(category)}
        />
        {/* <button onClick={onBtn}>Sumar 1 más</button> */}

        {/* <AddTitle/> */}

{
        personaje.map((i) => {
            return <li><GifGrid items={i} key={i}/></li>
        })}

      </div>


      
    );
  }

// export default gipExpert



// const GipExpert = () => {
    
//     const [category, setCategory] = useState(["DB", "Naruto"]);

//     const onButton = () =>{

//         setCategory([...category, "Valorant"]);
//     } 

//     const [inputValue, setInputValue] = useState();

//     const inputChange = ({target})=>{
//         setInputValue(target.value);
//     }

//     const onsubmit = (event) =>{
//         event.preventDefault();
//         console.log(inputValue);
//     }

//     return(
//     <>
//         <button onClick={onButton}>Push Here</button>

//         <form action="" onSubmit={event =>{onsubmit(event)}}>
//             <input type="text" placeholder = "Introducir Texto" value={inputValue} onChange={(event) => inputChange(event)}/>
//         </form>

//         <ul>
//             {category.map(i =>{
//                 return(
//                 <li key={i}>
//                     {i}
//                 </li>)
//             })}
//         </ul>
//     </>
//     )
// }

// export default GipExpert

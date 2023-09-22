import React, { useEffect } from "react";
import { useState } from "react";
import { getGifs } from "../helpers/getGifs";


const useFetchGifs = (items) => {
    
    const [imagen, setImages] = useState([""])
    const [is_loading, set_loading] = useState([true])


    const setImg = async () =>{
        const NewImg = await getGifs(items);
        setImages(NewImg);
        set_loading(false);
    } 

    useEffect( () => {
        setImg();
    }, []);
  
  return (
 {
    imagen,
    is_loading
 }
  )
}

export default useFetchGifs


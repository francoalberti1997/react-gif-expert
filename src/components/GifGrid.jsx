import React, { useState, useEffect } from 'react'
import {getGifs} from '../helpers/getGifs';
import GifItem from './gifItem';
import useFetchGifs from '../hooks/useFetchGifs';
import Loading from './Loading';

const GifGrid = ({items}) => {

  const {imagen, is_loading} = useFetchGifs(items)

  // console.log({imagen, is_loading})

  // const [counter, setCounter] = useState(10);
  
  // const [images, setImages] = useState([""])

  // const setImg = async () =>{
  //   const NewImg = await getGifs(items);
  //   setImages(NewImg);
  // } 

  // useEffect( () => {
  //   setImg();
  // })

const [counter, setCounter] = useState(10);

  return (
    <div> 
        {items}
        <button onClick={() =>setCounter(counter+2)}>
        {counter}
        </button>
        <div>
          <Loading key={1} arg={is_loading}/>
          {/* { is_loading  ? (<h2>Is loading</h2>) : null} */}
          {imagen.map((c) =><GifItem 
          key={c.id}
          {...c}
          />)}
        </div>
    </div>
  )
}

export default GifGrid

import React from 'react'

const Loading = ({arg}) => {
    if(arg){
        return  <h2>Is loading</h2>
    }
    else{
      return  <h2>Cargó</h2>
    }
}

export default Loading

import React from 'react'


const GifItem = ({ title, url }) => {
    return (
      <div>
        {title}
        <img src={url} alt="" />
      </div>
    );
  };
  
  export default GifItem;

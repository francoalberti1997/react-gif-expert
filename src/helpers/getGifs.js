
export const getGifs = async(items) =>{
    const url = `https://api.giphy.com/v1/gifs/search?api_key=TiMbzuOm8JvGw9e0zZRSQrhr5KtdG3tF&q=${items}&limit=2`	    
    const resp = await fetch(url)
    
    const {data} = await resp.json()
    
    const gifs = data.map(img =>({
      id:img.id,
      title:img.title,
      url: img.images.downsized_medium.url
    }))

    return gifs;
}




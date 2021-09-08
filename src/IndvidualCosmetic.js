import React, {useState, useEffect} from 'react'

 function Item(){

    useEffect(() =>{
        fetchItem()
      },[])
      const [items, setItems] = useState([])

      const fetchItem = async () =>{
          const data = await fetch(`https://fortnite-api.com/v2/cosmetics/br/BID_773_Carabus`).then((data) =>{
              return data.json()
          })
          

        console.log(data)
      }
   

 

    return (
        <div className="itemsContainer">
          
              <h1>item</h1>
        
        </div>
    )
}

export default Item

import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'

export default function Cosmetics(){

    useEffect(() =>{
        fetchItems()
    },[])
 
const [items, setItems] = useState([])
    const fetchItems = async ()=>{
        const data = await fetch("https://fortnite-api.com/v2/cosmetics/br/new").then((data)=>{
            return data.json()
        }).catch((error) =>{
            console.log(error)
        })

        const fortniteCosmetics = data.data.items
        console.log(fortniteCosmetics.images)
        console.log(fortniteCosmetics[0].id)
        setItems(fortniteCosmetics)


        
    }

    return (
        <div className="itemsContainer">
            {items.map((item) =>{
                return  (
                    <div key={item.id} className="item">
                <h2>{item.name}</h2>
                <img className="fortniteImg" src={item.images.icon} alt="avatar"/>
                <p>{item.description}</p>
            <Link to={`/shop/${item.id}`}>
           more...
            </Link>
                </div>)
              
            })}
        </div>
    )
}


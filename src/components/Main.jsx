import {useEffect} from 'react';
import React from 'react'
import './Main.scss';
import Card from './Card';
import axios from 'axios';
function Main({setData,data,url,setUrl}) {
    
    return (

        <div id='card-group'>   
            {
                data.length!= 0 ? 
                data.map(items=>{
                    return(
                        <Card title={items.title} image_url={items.img} rating={items.rating} url={items.url} console_name={items.console_name} setUrl={setUrl}/>
                    )
                })
                :
                <h1>Loading...</h1>
            }
        </div>
    )
}

export default Main

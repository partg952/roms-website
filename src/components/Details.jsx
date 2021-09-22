import React from 'react'
import {useEffect,useState} from 'react';
import './Details.scss';
import axios from 'axios';
import DownloadIcon from '@material-ui/icons/CloudDownload';
function Details({setUrl}) {
    const [body,setBody] = useState([]);
    const [downloadUrl,setURL] = useState('');
    let sliced = [];
    if(body.length!=0){
        sliced = body.slice(1,body.length)
    }
    useEffect(()=>{
        const url = sessionStorage.getItem('url')
        setBody([]);
        for(let i=0;i<4;i++){
            axios('https://roms-api.herokuapp.com/api/details?url='+url)
            .then(res=>{
                setBody([])
                setBody(res.data)
            })
        }   
    },[])
    return (
        <div id="details__div">
        {
            downloadUrl.length!=0 &&
            <iframe src={downloadUrl} style={{display:'none'}} frameborder="0"></iframe>
        }
                {body.length!=0 && body.length == 8 ? 
                    <>
                     <img src={`https://www.gamulator.com/${body[0].image}`} id='poster' alt="" /> 
                     <div id='text'>
                     {
                         sliced.map(items=>(
                             <p> {items} </p>
                             ))
                    }
                    <button id="download" onClick={()=>{
                        axios('https://roms-api.herokuapp.com/api/download?url='+sessionStorage.getItem('url'))
                        .then(res=>{
                            console.log(res.data);
                            setURL(res.data)
                        })
                    }}>
                    <DownloadIcon/>
                    Download</button>
                     </div>
                    </>
                    :
                    <h1>Loading...</h1>
                }

                

        </div>
    )
}

export default Details

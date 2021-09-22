import React from 'react'
import './Card.scss';
import { useHistory } from 'react-router';
function Card({image_url,title,rating,url,console_name,setUrl}) {
    const history = useHistory();
    function cutString(string){
        if(string!=(undefined || null)){
            if(string.length > 30){
                let cut = string.substr(30,string.length);
                return string.replace(cut,'...')
            }
            else{
                return string;
            }
        }
    }
    return (
        <div id='card' onClick={()=>{
            console.log(url)
            sessionStorage.setItem('url',url)
            history.push('/details')
        }}>
            <img src={`${image_url}`} alt="" />
            <h4> {cutString(title)} </h4>
            <p> {rating} </p>
            <div id="console_name">
                <p> {console_name} </p>
            </div>
        </div>
    )
}

export default Card

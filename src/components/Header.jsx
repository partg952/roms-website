import React from 'react'
import './Header.scss';
import axios from 'axios';
import { useHistory } from 'react-router';
function Header({data,setData}) {
    const history = useHistory();
    return (
        <div className='header'>
        <h1 id='heading' onClick={()=>{
            for(let i=1;i<=6;i++){
                setData([]);
                axios('https://roms-api.herokuapp.com/api/homepage/'+i)
                .then(res=>{
                    console.log(res.data)
                    setData(res.data);
                })
            }
            history.push('/')
        }}>RomsMaster</h1>
            <div id="input">
                <input type="text" onKeyPress={(e)=>{
                    if(e.key === 'Enter' && e.target.value.length!=0){
                        setData([]);
                        for(let i=1;i<=3;i++){
                            axios('https://roms-api.herokuapp.com/api/search?q='+e.target.value+'&page='+i)
                            .then(res=>{
                                setData([]);
                                console.log(res.data)
                                res.data.forEach(items=>{
                                    setData(prev=>[...prev,items])
                                })
                            })
                        }
                    }
                    else if(e.target.value.length == 0){
                        history.push('/')
                    }
                    
                }}/>
            </div>
        </div>
    )
}

export default Header

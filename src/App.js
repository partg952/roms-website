import logo from './logo.svg';
import './App.css';
import {useState,useEffect} from 'react';
import Main from './components/Main';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Header from './components/Header';
import Details from './components/Details';
import axios from 'axios';
function App() {
  const [data,setData] = useState([]);
  const [url,setUrl] = useState();
  console.log(url);
  
  useEffect(()=>{
    for(let i=1;i<=6;i++){
        setData([]);
        axios('https://roms-api.herokuapp.com/api/homepage/'+i)
        .then(res=>{
            console.log(res.data)
            setData(res.data);
        })
    }
},[])
  return (
    <div className="App">
     <Router>
     <Header data={data} setData={setData} />
      <Route path='/' exact>
        <Main data={data} setData={setData} url={url} setUrl={setUrl}/>
      </Route>
      <Route path='/details' exact>
        <Details url={url} setUrl={setUrl}/>
      </Route>
     </Router>
    </div>
  );
}

export default App;

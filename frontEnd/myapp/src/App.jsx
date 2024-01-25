import React ,  {useState}from 'react';
import '../src/App.css'
import Occasions from './components/Occasions'
import Plants from './components/Plants';
import Nav from './components/Nav';
import Home from './components/Home.jsx'

function App() {

  const[view,setView]=useState("Home")
  const[term,setTerm]=useState("")
  const changeView = (newView)=>{
    setView(newView)
  }
  return (
    <div className="App">
      <Nav changeView={changeView} set={setTerm}/> 
      {view==="Home"&& <Home changeView={changeView}/>}
      {view==="Occasions"&& <Occasions term={term} changeView={changeView} />}
      {view==="Plants"&& <Plants term={term} changeView={changeView}/>}
      
    {/* <Nav/>
    <Plants/> 
    <Home/>  */}
    
  </div>
  );
}

export default App;
import "./App.css";
import NaveBar from "./components/NaveBar";
import News from "./components/News";
import {  Routes, Route } from "react-router-dom";
import { useState } from "react";
import LoadingBar from 'react-top-loading-bar'
// import Countryddl from "./components/Country";
// import DropDown from "./components/Dropdown";

const App =(props)=> {
  const  pageSize = 9;
  const apiKey= process.env.REACT_APP_API_KEY;
  const[progress,setProgress]=useState(0)
  

  return (
    <div className="App">
    <LoadingBar 
        height={3}
        color='#f11946'
        progress={progress} 
      /> 
      <NaveBar />
   
      
           
           <Routes>
           
           <Route path="/" element={<News setProgress={setProgress} apiKey={apiKey} key='general' pageSize={pageSize}  category ='general'/>} />
           
           <Route path="/business" element={<News setProgress={setProgress} apiKey={apiKey} key='business' pageSize={pageSize}  category ='business'/>} />
           
           <Route path="/entertainment" element={<News setProgress={setProgress} apiKey={apiKey} key='entertainment' pageSize={pageSize}  category ='entertainment'/>} />
           
           <Route path="/general" element={<News setProgress={setProgress} apiKey={apiKey} key='general' pageSize={pageSize}  category ='general'/>} />
           
           <Route path="/health" element={<News setProgress={setProgress} apiKey={apiKey} key='health' pageSize={pageSize}  category ='health'/>} />
           
           <Route path="/science" element={<News setProgress={setProgress} apiKey={apiKey} key='science' pageSize={pageSize}  category ='science'/>} />
           
           <Route path="/sports" element={<News setProgress={setProgress} apiKey={apiKey} key='sports' pageSize={pageSize}  category ='sports'/>} />
           
           <Route path="/technology" element={<News setProgress={setProgress} apiKey={apiKey} key='technology' pageSize={pageSize}  category ='technology'/>} />

      </Routes>
      
    </div>
  );
}

export default App;



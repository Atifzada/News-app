import "./App.css";
import NaveBar from "./components/NaveBar";
import News from "./components/News";
import {  Routes, Route } from "react-router-dom";
import { Component } from "react";
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
   pageSize = 4;
   apiKey= process.env.REACT_APP_API_KEY;
  
   state = {
    progress: 0,
   }
   setProgress=(progress)=>{
    this.setState({ progress: progress})
   }

   render(){
  return (
    <div className="App">
    <LoadingBar 
        height={3}
        color='#f11946'
        progress={this.state.progress} 
      /> 
      <NaveBar />
      
           
           <Routes>
           
           <Route path="/" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key='general' pageSize={this.pageSize} country='us' category ='general'/>} />
           
           <Route path="/business" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key='business' pageSize={this.pageSize} country='us' category ='business'/>} />
           
           <Route path="/entertainment" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key='entertainment' pageSize={this.pageSize} country='us' category ='entertainment'/>} />
           
           <Route path="/general" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key='general' pageSize={this.pageSize} country='us' category ='general'/>} />
           
           <Route path="/health" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key='health' pageSize={this.pageSize} country='us' category ='health'/>} />
           
           <Route path="/science" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key='science' pageSize={this.pageSize} country='us' category ='science'/>} />
           
           <Route path="/sports" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key='sports' pageSize={this.pageSize} country='us' category ='sports'/>} />
           
           <Route path="/technology" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key='technology' pageSize={this.pageSize} country='us' category ='technology'/>} />

      </Routes>
    </div>
  );
}
}



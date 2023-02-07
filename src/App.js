import "./App.css";
import NaveBar from "./components/NaveBar";
import News from "./components/News";
import {  Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NaveBar />
    <Routes>
    <Route path="/" element={<News key='general' pageSize={12} country='us' category ='general'/>} />
    <Route path="/business" element={<News key='business' pageSize={12} country='us' category ='business'/>} />
    <Route path="/entertainment" element={<News key='entertainment' pageSize={12} country='us' category ='entertainment'/>} />
    <Route path="/general" element={<News key='general' pageSize={12} country='us' category ='general'/>} />
    <Route path="/health" element={<News key='health' pageSize={12} country='us' category ='health'/>} />
    <Route path="/science" element={<News key='science' pageSize={12} country='us' category ='science'/>} />
    <Route path="/sports" element={<News key='sports' pageSize={12} country='us' category ='sports'/>} />
    <Route path="/technology" element={<News key='technology' pageSize={12} country='us' category ='technology'/>} />

      </Routes>
    </div>
  );
}

export default App;

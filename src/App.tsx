import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import  Page  from "./Page";
import Right_Arrow from './Vector_Arrow_Right.png';
import Left_Arrow from './Vector_Arrow_Left.png';
import Book from './book.png';

const App : React.FC =() => {
  const [pages, setPages] = useState<boolean[]>([true]);
  return <div className = "Container">
    <img src={Right_Arrow} id="right"></img>
    <img src={Left_Arrow} id="left"></img>
    <img src={Book} id = "book"></img>
    {pages.map((visibility, index) => (
      <Page key={index} visibility = {visibility} pageNum = {index} />
    ))}
  
  </div>
}

export default App;

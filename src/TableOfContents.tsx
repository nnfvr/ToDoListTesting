import React, { useState, useEffect, useRef } from 'react'
import './TableOfContents.css'


type contentProps = {
    
    
}

interface propFunctions {
    changeClickedIndex: (index:number) => void;
    pageList : number[];
}

const TableOfContents : React.FC<propFunctions>= ({changeClickedIndex, pageList}) => {

    const setClickedWrap = (index : number) => {
        changeClickedIndex(index);
    }

    return (
    <div className="contents">
        {pageList.map((page, index) => 
        <button key={index} id = {`page-${index}`} className="indexButton" onClick={() => setClickedWrap(index)}>{page}</button>
        )}
    </div>
    )
}

export default TableOfContents
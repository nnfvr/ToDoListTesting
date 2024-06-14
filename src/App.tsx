import React, { useState, useEffect, useRef } from 'react'
import './App.css'
import Page from './Page'
import Right_Arrow from './Vector_Arrow_Right.png'
import Left_Arrow from './Vector_Arrow_Left.png'
import Book from './book.png'
import TableOfContents from './TableOfContents'

type Page = {
  pageNum: number
}

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0)
  const [pageList, setPageList] = useState<number[]>([1]);
  const [pointerEvent, setPointerEvent] = useState<number>(0);
  const [pages, setPages] = useState<Page[]>([{
    pageNum: 0
  }])

  const setClicked = (index : number) => {
    setCurrentPage(index);
  }

  const displayTable = () => {
    if (pointerEvent != -1) {
      setPointerEvent(-1);
    }
    else {
      setPointerEvent(currentPage);
    }
  }
  // useEffect((pages) => {}, [pages]);

  console.log(currentPage, pages)

  return (
    
    <div className='Container' style={{display: 'block'}}>
    <div style={{display: pointerEvent === -1 ? 'block': 'none', position: 'absolute', zIndex: 10, top: '90px', pointerEvents: pointerEvent === -1 ? 'auto': 'none'}}>
      <TableOfContents changeClickedIndex={setClicked} pageList={pageList} />
    </div>
      <button
        id='right'
        className='action-arrow'
        style={{pointerEvents: pointerEvent === -1 ? 'none' : 'auto'}}
        onClick={() => {
          // Create new page if that page doesnt exist
          if (currentPage === pages.length - 1) {
            setPages(prevState => [...prevState, { pageNum: pages.length }])
            setPageList(prevState => [...prevState, currentPage+2]);
          }
          // Increment current page
          setCurrentPage(prevState => prevState + 1)
        }}
      >
        <img src={Right_Arrow}></img>
      </button>

      <button
        id='left'
        className='action-arrow'
        style={{pointerEvents: pointerEvent === -1 ? 'none' : 'auto'}}
        onClick={() => {
          if (currentPage !== 0) {
            setCurrentPage(prevState => prevState-1);
          }
        }}
      >
        <img src={Left_Arrow}></img>
      </button>

      <button
        id='book'
        onClick={displayTable}
        style={{order: 10}}
      >
        <img src={Book} ></img>
      </button>

      {pages.map((page) => (
        <div style={{ display: page.pageNum === currentPage ? 'block' : 'none', pointerEvents : pointerEvent === -1 ? 'none' : 'auto'}}>
          <Page key={page.pageNum} pageNum={page.pageNum}/>
        </div>
      ))}

    </div>
  )
}

export default App

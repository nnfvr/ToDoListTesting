import React, { useState, useEffect, useRef } from 'react'
import './App.css'
import Page from './Page'
import Right_Arrow from './Vector_Arrow_Right.png'
import Left_Arrow from './Vector_Arrow_Left.png'
import Book from './book.png'
<<<<<<< HEAD
import TableOfContents from './TableOfContents'
=======
>>>>>>> f9ac903 ([nt] mikes changes)

type Page = {
  pageNum: number
}

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0)
<<<<<<< HEAD
  const [pageList, setPageList] = useState<number[]>([1]);
  const [pointerEvent, setPointerEvent] = useState<number>(0);
=======
>>>>>>> f9ac903 ([nt] mikes changes)
  const [pages, setPages] = useState<Page[]>([{
    pageNum: 0
  }])

<<<<<<< HEAD
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
=======
  console.log(currentPage, pages)

  return (
    <div className='Container'>
      <button
        id='right'
        className='action-arrow'
>>>>>>> f9ac903 ([nt] mikes changes)
        onClick={() => {
          // Create new page if that page doesnt exist
          if (currentPage === pages.length - 1) {
            setPages(prevState => [...prevState, { pageNum: pages.length }])
<<<<<<< HEAD
            setPageList(prevState => [...prevState, currentPage+2]);
=======
>>>>>>> f9ac903 ([nt] mikes changes)
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
<<<<<<< HEAD
        style={{pointerEvents: pointerEvent === -1 ? 'none' : 'auto'}}
        onClick={() => {
          if (currentPage !== 0) {
            setCurrentPage(prevState => prevState-1);
          }
=======
        onClick={() => {
>>>>>>> f9ac903 ([nt] mikes changes)
        }}
      >
        <img src={Left_Arrow}></img>
      </button>

<<<<<<< HEAD
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
=======
      <button>
        <img src={Book} id='book'></img>
      </button>

      {pages.map((page) => (
        <div style={{ display: page.pageNum === currentPage ? 'block' : 'none' }}>
          <Page key={page.pageNum} pageNum={page.pageNum} />
>>>>>>> f9ac903 ([nt] mikes changes)
        </div>
      ))}

    </div>
  )
}

export default App

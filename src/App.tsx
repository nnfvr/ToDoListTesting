import React, { useState, useEffect, useRef } from 'react'
import './App.css'
import Page from './Page'
import Right_Arrow from './Vector_Arrow_Right.png'
import Left_Arrow from './Vector_Arrow_Left.png'
import Book from './book.png'

type Page = {
  pageNum: number
}

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0)
  const [pages, setPages] = useState<Page[]>([{
    pageNum: 0
  }])

  console.log(currentPage, pages)

  return (
    <div className='Container'>
      <button
        id='right'
        className='action-arrow'
        onClick={() => {
          // Create new page if that page doesnt exist
          if (currentPage === pages.length - 1) {
            setPages(prevState => [...prevState, { pageNum: pages.length }])
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
        onClick={() => {
        }}
      >
        <img src={Left_Arrow}></img>
      </button>

      <button>
        <img src={Book} id='book'></img>
      </button>

      {pages.map((page) => (
        <div style={{ display: page.pageNum === currentPage ? 'block' : 'none' }}>
          <Page key={page.pageNum} pageNum={page.pageNum} />
        </div>
      ))}

    </div>
  )
}

export default App

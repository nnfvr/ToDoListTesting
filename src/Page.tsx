import React, { useState, useEffect, useRef } from 'react'
import './Page.css'
import Right_Arrow from './Vector_Arrow_Right.png'

type pageProps = {
  pageNum: number
}

const Page = (props: pageProps) => {
<<<<<<< HEAD
=======

  const inputRef = useRef<HTMLTextAreaElement | null>(null)
>>>>>>> f9ac903 ([nt] mikes changes)

  const inputRef = useRef<HTMLTextAreaElement | null>(null)

  const checkKey = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Tab') {
      inputRef.current!.setRangeText('\t', inputRef.current!.selectionStart, inputRef.current!.selectionStart, 'end')
      return false //prevent default behavior
    }
  }

  return (
    <div className='Page'>
      <p id='pageNum'>{props.pageNum + 1}</p>
      <div className='Header'>

        <h1 id='head'>To-do list</h1>

      </div>
      <div className='List'>
        <textarea ref={inputRef} onKeyDown={(e) => checkKey(e)} maxLength={1245} placeholder='Start typing!' />
      </div>
    </div>)
}

export default Page

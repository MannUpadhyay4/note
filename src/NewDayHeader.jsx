import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Header(props) {
  return (
    <>
      <br />
      <div className='NewDay'>
        <div className='Date'>{props.date}</div>
        <div className='header'>{props.header}</div>
        <div className='LectureNo'>{props.lecture}</div>
      </div>

    </>
  )
}

export default Header

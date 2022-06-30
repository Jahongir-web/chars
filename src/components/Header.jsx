import React, {memo} from 'react'
import "./Header.css"

function Header() {


  return (
    <div className='header'>
      <h1>Header</h1>
      <h1>{Math.random()}</h1>  
       
    </div>
  )
}

export default memo(Header)

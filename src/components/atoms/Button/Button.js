import React from 'react'
import './Button.scss'

const Button = ({className, name, value, clickHandler, setActiveSortButton}) => {

  return (
    <button 
      className={`button ${className}`} 
      onClick={e => {
        clickHandler(value)
        setActiveSortButton(value)
      }}
    >
      {name}
    </button>
  )
}

export default Button
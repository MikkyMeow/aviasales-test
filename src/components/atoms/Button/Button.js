import React from 'react'
import './Button.scss'

const Button = ({className, name, value, clickHandler, sortButton}) => {

  return (
    <button 
      className={`button ${className}`} 
      onClick={e => {
        clickHandler(value)
        sortButton(value)
      }}
    >
      {name}
    </button>
  )
}

export default Button
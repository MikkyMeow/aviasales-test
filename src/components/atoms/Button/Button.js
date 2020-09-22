import React from 'react'
import './Button.scss'

const Button = ({className, name, value, clickHandler, sortByCheapest}) => {

  return (
    <button 
      className={`button ${className}`} 
      onClick={e => {
        clickHandler(value)
        sortByCheapest()
      }}

    >
      {name}
    </button>
  )
}

export default Button
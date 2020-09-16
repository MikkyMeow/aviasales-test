import React from 'react'
import './Button.scss'

const Button = ({className, name, value, clickHandler}) => {
  return (
    <button className={`button ${className}`} onClick={e => clickHandler(value)} >
      {name}
    </button>
  )
}

export default Button
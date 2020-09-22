import React from 'react'
import './Checkbox.scss'

const Checkbox = ({id, name, value, isSelected, checkboxChecked}) => {
  return (
     <div className='checkbox'>
       <input className='checkbox__input' 
        type='checkbox' 
        checked={isSelected} 
        value={value}
        name={name}
        id={id}
        onChange={e => checkboxChecked(value)}/>
       <label className='checkbox__label' htmlFor={id}>{name}</label>
     </div>
  )
}

export default Checkbox
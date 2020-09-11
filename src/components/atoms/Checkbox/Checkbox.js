import React from 'react'
import './Checkbox.scss'

const Checkbox = ({id, value, filterArray, checked, checkboxSelected}) => {

  return (
     <div className="checkbox">
       <input className="checkbox__input" type="checkbox" id={id} name={id} checked={checked} onClick={e => {filterArray(id); checkboxSelected(id, checked)}}/>
       <label className="checkbox__label" htmlFor={id}>{value}</label>
     </div>
  )
}

export default Checkbox
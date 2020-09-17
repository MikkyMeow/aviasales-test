import React from 'react'
import './Checkbox.scss'

const Checkbox = ({id, value, filterArray, isSelected, checkboxList}) => {

  return (
     <div className="checkbox">
       <input className="checkbox__input" type="checkbox" checked={isSelected} id={id} name={id} onClick={e => {filterArray(id); checkboxList(id)}}/>
       <label className="checkbox__label" htmlFor={id}>{value}</label>
     </div>
  )
}

export default Checkbox
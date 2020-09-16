import React, { useState } from 'react'
import './Checkbox.scss'

const Checkbox = ({id, value, filterArray}) => {

  return (
     <div className="checkbox">
       <input className="checkbox__input" type="checkbox" id={id} name={id} onClick={e => {filterArray(id)}}/>
       <label className="checkbox__label" htmlFor={id}>{value}</label>
     </div>
  )
}

export default Checkbox
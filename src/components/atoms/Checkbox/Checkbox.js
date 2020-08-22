import React from 'react'
import './Checkbox.scss'

const Checkbox = (props) => {
  return (
     <div className="checkbox">
       <input className="checkbox__input" type="checkbox" id={props.id} name={props.id} />
       <label className="checkbox__label" for={props.id}>{props.value}</label>
     </div>
  )
}

export default Checkbox
import React from 'react'
import Section from './../Section'
import TableRow from './../../molecules/TableRow'
import './../../../assets/images/S7-logo.png'
import './Flight.scss'

const Flight = (props) => {
  return (
    <Section class="flight-section">
      <div className="flight__price">
        {props.price} P
      </div>
      <div className="flight__logo">
        <img src="../../../assets/images/S7-logo.png" />
      </div>
      <TableRow />
      <TableRow />
    </Section>
  )
}

export default Flight
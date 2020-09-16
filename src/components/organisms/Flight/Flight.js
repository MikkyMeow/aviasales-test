import React from 'react'
import Section from './../Section'
import TableRow from './../../molecules/TableRow'
import airlogo from  './../../../assets/images/S7-logo.png'
import './Flight.scss'

const Flight = (data) => {
  return (
    <Section className="flight-section">
      <div className="flight__price">
        {data.price} P
      </div>
      <div className="flight__logo">
        <img src={airlogo} alt="flight-logo"/>
      </div>
      <TableRow 
        from={data.from}
        to={data.to}
        duration={data.duration}
        transfer={data.transfer}
        time={data.time} />
    </Section>
  )
}

export default Flight
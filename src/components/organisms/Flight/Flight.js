import React from 'react'
import Section from './../Section'
import TableRow from './../../molecules/TableRow'
import airlogo from  './../../../assets/images/S7-logo.png'
import './Flight.scss'

const Flight = ({price, from, to, duration, transfer, time}) => {
  return (
    <Section className='flight-section'>
      <div className='flight__price'>
        {price} P
      </div>
      <div className='flight__logo'>
        <img src={airlogo} alt='flight-logo'/>
      </div>
      <TableRow 
        from={from}
        to={to}
        duration={duration}
        transfer={transfer}
        time={time} />
    </Section>
  )
}

export default Flight
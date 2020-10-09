import React from 'react'
import Section from '../Section'
import TableRow from '../../molecules/TableRow'
import airlogo from  './../../../assets/images/S7-logo.png'
import './Ticket.scss'

const Ticket = ({price, from, to, duration, transfer, time}) => {
  return (
    <Section className='ticket-section'>
      <div className='ticket__price'>
        {price} P
      </div>
      <div className='ticket__logo'>
        <img src={airlogo} alt='air-logo'/>
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

export default Ticket
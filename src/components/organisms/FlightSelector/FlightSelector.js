import React, { useState } from 'react'
import Section from './../Section'
import Button from './../../atoms/Button'
import './FlightSelector.scss'

const buttons = [
  { name: 'Самый дешевый', value: 'cheapest', isActive: false },
  { name: 'Самый быстрый', value: 'fastest', isActive: false },
]

const FlightSelector = ({sortByCheapest}) => {
  
  const [flightSortButtons, setFlightSortButtons] = useState(buttons)
  

  const handleActive = value => {
    setFlightSortButtons(
      
      flightSortButtons.map(obj => {
        if (obj.value === value) {
          return {
            ...obj,
            isActive: true
          }
        }

        return {
          ...obj,
          isActive: false
        }
      })
    )
  }
    
  return (
    <Section className='flight-selector'>
      {flightSortButtons.map(elem => (
        <Button 
          key={elem.name} 
          name={elem.name} 
          className={`flight-selector__${elem.value} ${elem.isActive === true ? 'active' : ''}`} 
          value={elem.value} 
          clickHandler={handleActive} 
          sortByCheapest={sortByCheapest}
        />))}
    </Section>
  )
}

export default FlightSelector
import React from 'react'
import Section from './../Section'
import Button from './../../atoms/Button'
import './FlightSelector.scss'

const FlightSelector = ({flightSortButtons, setFlightSortButtons, setActiveSortButton}) => {
  
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
          setActiveSortButton={setActiveSortButton}
        />))}
    </Section>
  )
}

export default FlightSelector
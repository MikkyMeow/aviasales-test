import React, { useState } from 'react'
import Section from './../Section'
import Button from './../../atoms/Button'
import './FlightSelector.scss'


const FlightSelector = () => {

  const [flightSortButtons, setFlightSortButtons] = useState([
    { name: 'Самый дешевый', value: 'cheapest', isActive: false },
    { name: 'Самый быстрый', value: 'fastest', isActive: false },
  ])

  // добавлять класс active при нажатии на кнопку
  // в handleActive сделать копию массива, по value заменить isActive, отдать измененный массив

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
      }))
  }
    
  return (
    <Section className="flight-selector">
      {flightSortButtons.map(elem => <Button key={elem.name} name={elem.name} className={`flight-selector__${elem.value} ${elem.isActive === true ? 'active' : ''}`} value={elem.value} clickHandler={handleActive} />)}
    </Section>
  )
}

export default FlightSelector
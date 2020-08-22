import React from 'react'
import Section from './../Section'
import Button from './../../atoms/Button'
import './FlightSelector.scss'

const FlightSelector = () => {
  return (
    <Section class="flight-selector">
      <Button value="Самый дешевый" class="cheapest active" />
      <Button value="Самый быстрый" class="fastest"/>
    </Section>
  )
}

export default FlightSelector
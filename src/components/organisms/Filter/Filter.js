import React from 'react'
import Section from './../Section'
import Checkbox from './../../atoms/Checkbox'
import './Filter.scss'

const Filter = () => {
  return (
    <Section class="filter-section">
      <h2 className="filter__title">Количество пересадок</h2>
      <Checkbox value="Все" id="all"/>
      <Checkbox value="Без пересадок" id="without"/>
      <Checkbox value="1 пересадка" id="transfer1"/>
      <Checkbox value="2 пересадки" id="transfer2"/>
      <Checkbox value="3 пересадки" id="transfer3"/>
    </Section>
  )
}

export default Filter
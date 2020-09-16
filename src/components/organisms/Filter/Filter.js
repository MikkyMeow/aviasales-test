import React from 'react'
import Section from './../Section'
import Checkbox from './../../atoms/Checkbox'
import './Filter.scss'

const checkboxList = [
  {
    value: "Все пересадки",
    id: 'all',
    isSelected: false,
  },
  {
    value: "Без пересадок",
    id: 0,
    isSelected: true,
  },
  {
    value: "1 пересадка",
    id: 1,
    isSelected: false,
  },
  {
    value: "2 пересадки",
    id: 2,
    isSelected: false,
  },
  {
    value: "3 пересадки",
    id: 3,
    isSelected: false,
  },
]

const Filter = ({filterArray}) => {

  return (
    <Section className="filter-section">
      <h2 className="filter__title">Количество</h2>
      {checkboxList && checkboxList.map(({value, id}) => <Checkbox key={id} value={value} id={id} checked={false} filterArray={filterArray}/>)}
    </Section>
  )
}

export default Filter
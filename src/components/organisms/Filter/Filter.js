import React, { useState } from 'react'
import Section from './../Section'
import Checkbox from './../../atoms/Checkbox'
import './Filter.scss'

const Filter = ({filterArray}) => {
  
  const [checkboxList, setCheckboxList] = useState([
    { value: "Все пересадки", id: 'all', isSelected: false },
    { value: "Без пересадок", id: 0, isSelected: false },
    { value: "1 пересадка", id: 1, isSelected: false },
    { value: "2 пересадки", id: 2, isSelected: false },
    { value: "3 пересадки", id: 3, isSelected: false },
  ])
  
// если all = true, везде true
// если all true а потом я нажимаю на цифру, поставить цифре и all false

  console.log(checkboxList[0].isSelected)

  const checkboxChecked = id => {
    setCheckboxList(
      checkboxList.map(obj => {
        if (id === 'all' && checkboxList[0].isSelected === false) {
          return {
            ...obj,
            isSelected: true
          }
        } 
        if (id === 'all' && checkboxList[0].isSelected === true) {
          return {
            ...obj,
            isSelected: false
          }
        } 
        
        if (typeof id === 'number') {
          if (obj.id === 'all') {
            return {
              ...obj,
              isSelected: false
            }
          }
          if(id === obj.id) {
            return {
              ...obj,
              isSelected: !obj.isSelected
            }
          }
          return {
            ...obj
          }
        }
      })
    )
  }

  return (
    <Section className="filter-section">
      <h2 className="filter__title">Количество</h2>
      {checkboxList && checkboxList.map((elem) => <Checkbox key={elem.id} value={elem.value} id={elem.id} isSelected={elem.isSelected} filterArray={filterArray} checkboxList={checkboxChecked} />)}
    </Section>
  )
}

export default Filter
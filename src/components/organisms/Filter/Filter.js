import React from 'react'
import Section from './../Section'
import Checkbox from './../../atoms/Checkbox'
import './Filter.scss'

const Filter = ({checkboxList, setCheckboxList}) => {
  //логика чекбоксов
  const checkboxChecked = value => {
    setCheckboxList(
      checkboxList.map(obj => {
        if (value === 'all') {
          return {
            ...obj,
            isSelected: checkboxList[0].isSelected === false ? true : false
          }
        } else {
          if (obj.value === 'all') {
            return {
              ...obj,
              isSelected: false
            }
          }
          if(value === obj.value) {
            return {
              ...obj,
              isSelected: !obj.isSelected
            }
          }
        }
        return {
          ...obj
        }
      })
    )
  }

  return (
    <Section className='filter-section'>
      <h2 className='filter__title'>Количество</h2>
      {checkboxList && checkboxList.map((elem) => 
        <Checkbox 
          key={elem.id}
          {...elem}
          checkboxChecked={checkboxChecked} />)}
    </Section>
  )
}

export default Filter
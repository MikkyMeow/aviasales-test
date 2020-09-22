import React, { useState, useEffect } from 'react'
import Logo from './components/atoms/Logo'
import Filter from './components/organisms/Filter'
import FlightSelector from './components/organisms/FlightSelector'
import Flight from './components/organisms/Flight'
import data from './data.js'
// import axios from 'axios'
import './styles/style.scss'

const flights = data.flights
const checkboxListArr = data.checkboxList

const App =  () =>  {

  // Запрос на бэк
  // const result = axios.get('https://front-test.beta.aviasales.ru/tickets?searchId=clzw')

  // работа чекбоксов
  const [checkboxList, setCheckboxList] = useState(checkboxListArr)
  const [selectedCheckbox, setSelectedCheckbox] = useState([])
  const [currentFlights, setCurrentFlights] = useState(flights)

  useEffect(() => {
    setSelectedCheckbox(checkboxList.map(elem => elem.isSelected ? elem.value : null ))
  }, [checkboxList])

  useEffect(() => {
    selectedCheckbox.length &&
    setCurrentFlights(
    flights.filter(item => {
      if (selectedCheckbox.includes(item.transfer.length)) {
        return item
      }
    })
    )
  }, [selectedCheckbox])

  const sortByCheapest = () => {
    setCurrentFlights(
      [...currentFlights].sort((a, b) => a.price - b.price)
    )
  }


  console.log('currentflights ', currentFlights);

  return (
    <div className='wrapper'>
      <header className='header'>
        <Logo />
      </header>
      <div className='row'>
        <div className='sidebar'>
          <Filter 
            checkboxList={checkboxList} 
            setCheckboxList={setCheckboxList} />
        </div>
        <main className='main'>
          <FlightSelector
            sortByCheapest={sortByCheapest}
          />
          {currentFlights && currentFlights.map(item => {
            return (
              <Flight 
                key={item.id}
                price={item.price}
                from={item.from}
                to={item.to}
                duration={item.duration}
                transfer={item.transfer}
                time={item.time}
              />  
            )
          }
          )}
        </main>
      </div>
    </div>
    
  )
}

export default App

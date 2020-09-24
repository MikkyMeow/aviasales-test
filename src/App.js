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
const buttonSelector = data.buttonSelector

const App =  () =>  {

  // Запрос на бэк
  // const result = axios.get('https://front-test.beta.aviasales.ru/tickets?searchId=clzw')

  // рендеринг списка чекбоксов
  const [checkboxList, setCheckboxList] = useState(checkboxListArr)
  // создание массива выбранных чекбоксов
  const [selectedCheckbox, setSelectedCheckbox] = useState([])
  // рендеринг доступных билетов согласно фильтрам и сортировке
  const [currentFlights, setCurrentFlights] = useState(flights)
  // рендеринг кнопок сортировки билетов
  const [flightSortButtons, setFlightSortButtons] = useState(buttonSelector)
  // создание массива выбранной сортировки
  const [activeSortButton, setActiveSortButton] = useState('')

  // изменяет массив выбранных чекбоксов
  useEffect(() => {
    setSelectedCheckbox(checkboxList.map(elem => elem.isSelected ? elem.value : null ))
  }, [checkboxList])

  useEffect(() => {
    let arrFlight = [];
    // фильтрует массив относительно выбранных чекбоксов
    if (selectedCheckbox.length) {
      arrFlight = flights.filter(item => {
        if (selectedCheckbox.includes(item.transfer.length)) {
          return item
        }
      })
    }
    // сортировка по цене
    if (activeSortButton === 'cheapest') {
      console.log(arrFlight);
      arrFlight.sort((a, b) => a.price - b.price)
    }
    // сортировка по времени
    if (activeSortButton === 'fastest') {
      console.log(arrFlight);
      arrFlight.sort((a, b) => a.duration - b.duration)
    }
    setCurrentFlights(
      arrFlight 
    )
    
  }, [selectedCheckbox, activeSortButton])
     
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
            flightSortButtons={flightSortButtons}
            setFlightSortButtons={setFlightSortButtons}
            setActiveSortButton={setActiveSortButton}
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

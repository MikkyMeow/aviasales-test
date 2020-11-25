import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
//
import Logo from './components/atoms/Logo'
import Filter from './components/organisms/Filter'
import FlightSelector from './components/organisms/FlightSelector'
import Ticket from './components/organisms/Ticket'
import { data } from './data.js'
import {getTicketList} from './store/reducers/ticketList'
import axios from 'axios'
import './styles/style.scss'

const checkboxListArr = data.checkboxList
const buttonSelector = data.buttonSelector

const App =  () =>  {
  
  const searchId = axios.get('https://habr.com').then((e) => console.log(e.data.searchId))
  console.log('searchId ', searchId)

  const dispatch = useDispatch()
  const tickets = useSelector(state => state.ticketList)
  
  // рендеринг списка чекбоксов
  const [checkboxList, setCheckboxList] = useState(checkboxListArr)
  // создание массива выбранных чекбоксов
  const [selectedCheckbox, setSelectedCheckbox] = useState([])
  // рендеринг доступных билетов согласно фильтрам и сортировке
  const [currentTickets, setCurrentTickets] = useState(tickets)
  // рендеринг кнопок сортировки билетов
  const [flightSortButtons, setFlightSortButtons] = useState(buttonSelector)
  // создание массива выбранной сортировки
  const [activeSortButton, setActiveSortButton] = useState('')

  useEffect(() => {
    dispatch(getTicketList(2))
  }, [dispatch])

  // изменяет массив выбранных чекбоксов
  useEffect(() => {
    setSelectedCheckbox(checkboxList.map(elem => elem.isSelected ? elem.value : null ))
  }, [checkboxList])

  useEffect(() => {
    let arrFlight = [];
    // фильтрует массив относительно выбранных чекбоксов
    if (selectedCheckbox.length) {
      arrFlight = tickets.filter(item => {
        if (selectedCheckbox.includes(item.transfer.length)) {
          return item
        }
      })
    }
    // сортировка по цене
    if (activeSortButton === 'cheapest') {
      arrFlight.sort((a, b) => a.price - b.price)
    }
    // сортировка по времени
    if (activeSortButton === 'fastest') {
      arrFlight.sort((a, b) => a.duration - b.duration)
    }
    setCurrentTickets(
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
          {currentTickets && currentTickets.map(item => {
            return (
              <Ticket 
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

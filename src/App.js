import React, { useState } from 'react'
import Logo from './components/atoms/Logo'
import Filter from './components/organisms/Filter'
import FlightSelector from './components/organisms/FlightSelector'
import Flight from './components/organisms/Flight'
import data from './data.js'
// import axios from 'axios'
import './styles/style.scss'

const flight = data.flights;

const App =  () =>  {

  // const result = axios.get('https://front-test.beta.aviasales.ru/tickets?searchId=clzw')
  // console.log(result, 'result')

  const [filter, setFilter] = useState([])
  
  const filterArray = (value, isSelected) => {

    const indexArray = filter.indexOf(value)
    if (indexArray === -1) {
      setFilter([
          ...filter,
          value
        ]
      )
    } else {
      const removeItem = [...filter.slice(0, indexArray),
        ...filter.slice(indexArray + 1)]
      setFilter(removeItem)
    }

  }

  function filterCheck(item, filter) {
    if(filter.includes('all', 0)) {
      return <Flight key={item.id} {...item} />
    }

    for (let i = 0; i < filter.length; i++) {
      if (item.transfer.length === filter[i]) {
        return <Flight key={item.id} {...item} />
      }
    }
  }

  return (
    <div className="wrapper">
      <header className="header">
        <Logo />
      </header>
      <div className="row">
        <div className="sidebar">
          <Filter filterArray={filterArray}/>
        </div>
        <main className="main">
          <FlightSelector flight={flight} />
          {flight.map(item => filterCheck(item, filter))}
          <p></p>
        </main>
      </div>
    </div>
    
  )
}

export default App

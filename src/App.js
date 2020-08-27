import React from 'react'
import Logo from './components/atoms/Logo'
import Filter from './components/organisms/Filter'
import FlightSelector from './components/organisms/FlightSelector'
import Flight from './components/organisms/Flight'
import data from './data.js'
import './styles/style.scss'

function App() {
  const flight = data.flights;

  return (
    <div className="wrapper">
      <header className="header">
        <Logo />
      </header>
      <div className="row">
        <div className="sidebar">
          <Filter />
        </div>
        <main className="main">
          <FlightSelector />
          {flight.map(item => <Flight key={item.id} {...item} />)}
        </main>
      </div>
    </div>
    
  )
}

export default App

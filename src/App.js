import React from 'react'
import Logo from './components/atoms/Logo'
import Filter from './components/organisms/Filter'
import FlightSelector from './components/organisms/FlightSelector'
import Flight from './components/organisms/Flight'
import './styles/style.scss'

function App() {
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
          <Flight price="13 400"/>
        </main>
      </div>
    </div>
    
  )
}

export default App

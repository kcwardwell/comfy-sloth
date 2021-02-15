import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Navbar, Sidebar, Footer, Error, CartButtons } from './components'
import Routes from './components/navigation/routes'


function App() {
  return (
    <Router>
      <Navbar />
      <Sidebar />
      <Routes />
      <Error />
      <Footer />
    </Router>
  )
}

export default App

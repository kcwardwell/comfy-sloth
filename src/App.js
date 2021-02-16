import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Navbar, Sidebar, Footer, Error } from './components'
import Routes from './components/navigation/routes'
import { ErrorPage } from './pages'


function App() {
  return (
    <Router>
      <Navbar />
      <Sidebar />
      <Routes />
     
      <Footer />
    </Router>
  )
}

export default App

import React from 'react'
import Header from './components/header/header'
import Collection from './components/bookCollection/bookCollection'
import BookDescription from './components/bookDescription/bookDesctiption'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
      <BrowserRouter>
        <div>
          <Routes>
            <Route path='/' element={ <Header /> }>
              <Route path='books/:cat/:title/:sortby' element={ <Collection /> }/>
              <Route path='books/:cat/:title/:sortby/:id' element={ <BookDescription /> }/>
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
  )
}

export default App
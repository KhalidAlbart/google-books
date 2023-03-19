import React from 'react'
import Header from './components/header/header'
import Collection from './components/bookCollection/bookCollection'
import BookDescription from './components/bookDescription/bookDesctiption'
import { GlobalStyle } from './style'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import store from './store'

function App() {
  return (
    <Provider store={ store }>
      <BrowserRouter>
        <GlobalStyle />
        <div>
          <Routes>
            <Route path='/' element={ <Header /> }>
              <Route path='books/:cat/:title/:sortby' element={ <Collection /> }/>
              <Route path='books/:cat/:title/:sortby/:id' element={ <BookDescription /> }/>
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  )
}

export default App
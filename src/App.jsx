import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Main from './component/Homepages'
import DettailPage from './component/DettailPage'
import DefaultLayaut from './component/layouts/DefaultLayaut'

function App() {


  return (
    <>
      <BrowserRouter>


        <Routes>
          <Route Component={DefaultLayaut}>

            <Route path="/" element={<Main />} />
            <Route path="/:id" element={<DettailPage />} />

          </Route>

          <Route path="*" element={<div>page not found</div>} />

        </Routes>


      </BrowserRouter>
    </>
  )
}

export default App

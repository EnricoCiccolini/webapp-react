import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Main from './component/Homepages'
import DettailPage from './component/DettailPage'

function App() {


  return (
    <>
      <BrowserRouter>

        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/:id" element={<DettailPage />} />


        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App

import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {


  return (
    <>
      <BrowserRouter>

        <Routes>
          <Route path="/" element={<div> home page</div>} />
          <Route path="/:id" element={<div> dettaglio del film</div>} />


        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App

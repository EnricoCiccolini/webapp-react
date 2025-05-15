import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Main from './component/Homepages'
import DettailPage from './component/DettailPage'
import DefaultLayaut from './component/layouts/DefaultLayaut'
import FormFilm from './component/FormFilm'
import { GlobalContexProvider } from './component/contex/globalprovider'

function App() {


  return (
    <>
      <GlobalContexProvider>


        <BrowserRouter>


          <Routes>
            <Route Component={DefaultLayaut}>

              <Route path="/" element={<Main />} />
              <Route path="/:id" element={<DettailPage />} />
              <Route path="/addfilm" element={<FormFilm />} />

            </Route>

            <Route path="*" element={<div>page not found</div>} />

          </Routes>


        </BrowserRouter>

      </GlobalContexProvider>
    </>
  )
}

export default App
